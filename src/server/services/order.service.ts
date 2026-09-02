import { z } from "zod";
import { prisma } from "@/server/db/prisma";
import { badRequest, notFound } from "@/server/lib/errors";

export const checkoutSchema = z.object({
  addressId: z.string().min(1),
  shippingMethod: z.string().min(1),
  shippingDay: z.string().optional(),
  shippingTime: z.string().optional(),
  paymentMethod: z.string().min(1),
  discountCode: z.string().optional(),
});

function generateTrackingNumber() {
  return `${Date.now()}`.slice(-12);
}

export async function listOrders(userId: string) {
  return prisma.order.findMany({
    where: { userId },
    include: { items: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getOrder(userId: string, orderId: string) {
  const order = await prisma.order.findFirst({
    where: { id: orderId, userId },
    include: { items: true },
  });
  if (!order) throw notFound("Order");
  return order;
}

export async function checkout(userId: string, input: z.infer<typeof checkoutSchema>) {
  const [cartItems, address] = await Promise.all([
    prisma.cartItem.findMany({
      where: { userId },
      include: { product: { include: { insurance: true } } },
    }),
    prisma.address.findFirst({ where: { id: input.addressId, userId } }),
  ]);

  if (!address) throw notFound("Address");
  if (cartItems.length === 0) throw badRequest("سبد خرید خالی است.");

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.currentPrice * item.quantity, 0);
  const insuranceTotal = cartItems.reduce((sum, item) => {
    if (!item.hasInsurance) return sum;
    return sum + (item.product.insurance?.currentPrice ?? 7500000) * item.quantity;
  }, 0);

  let discountAmount = 0;
  if (input.discountCode) {
    const discount = await prisma.discountCode.findUnique({ where: { code: input.discountCode } });
    if (discount?.active) {
      if (discount.percentOff) discountAmount = Math.floor(subtotal * (discount.percentOff / 100));
      if (discount.amountOff) discountAmount = discount.amountOff;
    }
  }

  const shippingCost = input.shippingMethod.includes("express") ? 150000 : 0;
  const total = subtotal + insuranceTotal + shippingCost - discountAmount;

  const order = await prisma.$transaction(async (tx) => {
    const created = await tx.order.create({
      data: {
        userId,
        addressId: input.addressId,
        status: "PENDING_PAYMENT",
        trackingNumber: generateTrackingNumber(),
        paymentMethod: input.paymentMethod,
        shippingMethod: input.shippingMethod,
        shippingDay: input.shippingDay,
        shippingTime: input.shippingTime,
        subtotal,
        insuranceTotal,
        shippingCost,
        discountAmount,
        total,
        items: {
          create: cartItems.map((item) => ({
            productId: item.productId,
            productName: item.product.name,
            color: item.color,
            quantity: item.quantity,
            unitPrice: item.product.currentPrice,
            hasInsurance: item.hasInsurance,
            insurancePrice: item.hasInsurance
              ? (item.product.insurance?.currentPrice ?? 7500000)
              : 0,
          })),
        },
      },
      include: { items: true },
    });
    await tx.cartItem.deleteMany({ where: { userId } });
    return created;
  });

  return {
    order,
    paymentDetails: {
      title: "جزییات پرداخت",
      notice:
        "در صورتی که مبلغی از حساب شما کسر شده باشد نهایت تا ۷۲ ساعت آینده به حساب شما عودت داده خواهد شد.",
      details: [
        { id: 1, name: "شماره پیگیری سفارش:", text: order.trackingNumber },
        { id: 2, name: "شیوه پرداخت:", text: input.paymentMethod },
        { id: 3, name: "وضعیت پرداخت:", text: "در انتظار واریز وجه" },
        { id: 4, name: "تاریخ:", text: new Date().toLocaleDateString("fa-IR") },
      ],
    },
  };
}

export async function getShippingOptions() {
  return [
    { id: 1, name: "ارسال اکسپرس و سریع", paragraph: "در کمترین زمان محصولات تحویل می شود", disabled: false },
    { id: 2, name: "ارسال عادی", paragraph: "در کمترین زمان محصولات تحویل می شود", disabled: false },
  ];
}

export async function getShippingDays() {
  const days = await prisma.shippingDay.findMany({
    orderBy: { sortOrder: "asc" },
    include: { slots: { orderBy: { sortOrder: "asc" } } },
  });
  return {
    title: "انتخاب روز ارسال",
    days: days.map((d) => ({ id: d.id, day: d.day, date: d.date, month: d.month })),
  };
}

export async function getShippingTimes(dayId?: string) {
  const slots = dayId
    ? await prisma.shippingTimeSlot.findMany({ where: { shippingDayId: dayId }, orderBy: { sortOrder: "asc" } })
    : await prisma.shippingTimeSlot.findMany({ orderBy: { sortOrder: "asc" }, take: 4 });

  return {
    title: "انتخاب ساعت ارسال",
    time: slots.map((s) => ({ id: s.id, clock: s.clock })),
  };
}

export async function getHeaderLayout() {
  const [banners, groups] = await Promise.all([
    prisma.layoutBanner.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.layoutLinkGroup.findMany({
      where: { type: "header" },
      include: { links: { orderBy: { sortOrder: "asc" } } },
    }),
  ]);
  return { banners, linkGroups: groups };
}

export async function getFooterLayout() {
  const [groups, features] = await Promise.all([
    prisma.layoutLinkGroup.findMany({
      where: { type: "footer" },
      include: { links: { orderBy: { sortOrder: "asc" } } },
    }),
    prisma.layoutFeature.findMany({ orderBy: { sortOrder: "asc" } }),
  ]);

  return {
    linkGroups: groups.map((g) => ({
      title: g.title,
      link: g.links.map((l, i) => ({ id: i + 1, text: l.text, url: l.url })),
    })),
    features,
    copyright: "تمامی حقوق برای زی‌هوم محفوظ است.",
  };
}

export async function getDashboardStats() {
  const [users, orders, revenueAgg] = await Promise.all([
    prisma.user.count(),
    prisma.order.count(),
    prisma.order.aggregate({
      _sum: { total: true },
      where: { status: { in: ["PAID", "PROCESSING", "SHIPPED", "DELIVERED"] } },
    }),
  ]);

  return {
    stats: [
      { title: "Total Users", value: users.toLocaleString(), change: "+12.5%" },
      { title: "Revenue", value: `$${((revenueAgg._sum.total ?? 0) / 100).toLocaleString()}`, change: "+8.2%" },
      { title: "Orders", value: orders.toLocaleString(), change: "+5.4%" },
      { title: "Conversion", value: "4.8%", change: "+2.1%" },
    ],
  };
}

export async function getDashboardActivity() {
  const orders = await prisma.order.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
    include: { user: { select: { phone: true } } },
  });

  return orders.map((o) => ({
    id: o.id,
    user: o.user.phone,
    action: `Order ${o.status}`,
    amount: o.total,
    date: o.createdAt,
  }));
}
