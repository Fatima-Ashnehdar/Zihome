import { z } from "zod";
import { prisma } from "@/server/db/prisma";
import { mapCartItem } from "@/server/lib/mappers";
import { badRequest, notFound } from "@/server/lib/errors";

export const addCartItemSchema = z.object({
  productId: z.string().min(1),
  color: z.string().default("سفید"),
  quantity: z.number().int().min(1).default(1),
  hasInsurance: z.boolean().default(false),
});

export const updateCartItemSchema = z.object({
  quantity: z.number().int().min(0).optional(),
  hasInsurance: z.boolean().optional(),
});

export const addressSchema = z.object({
  city: z.string().min(1),
  address: z.string().min(1),
  postalCode: z.string().min(1),
  contactNumber: z.string().min(1),
  isDefault: z.boolean().optional(),
});

export async function getCart(userId: string) {
  const items = await prisma.cartItem.findMany({
    where: { userId },
    include: { product: true },
  });

  const subtotal = items.reduce((sum, item) => sum + item.product.currentPrice * item.quantity, 0);
  const insuranceTotal = items.reduce(
    (sum, item) => sum + (item.hasInsurance ? 7500000 * item.quantity : 0),
    0,
  );

  return {
    items: items.map(mapCartItem),
    summary: [
      { id: 1, name: "قیمت محصولات", price: subtotal, color: true },
      { id: 2, name: "هزینه بیمه", price: insuranceTotal, color: true },
      { id: 3, name: "جمع کل", price: subtotal + insuranceTotal, color: true },
      {
        id: 4,
        name: "سود شما",
        price: items.reduce(
          (sum, item) =>
            sum + (item.product.previousPrice - item.product.currentPrice) * item.quantity,
          0,
        ),
        color: false,
      },
    ],
  };
}

export async function addCartItem(userId: string, input: z.infer<typeof addCartItemSchema>) {
  const product = await prisma.product.findUnique({ where: { id: input.productId } });
  if (!product) throw notFound("Product");

  const item = await prisma.cartItem.upsert({
    where: {
      userId_productId_color: { userId, productId: input.productId, color: input.color },
    },
    update: { quantity: { increment: input.quantity }, hasInsurance: input.hasInsurance },
    create: { userId, ...input },
    include: { product: true },
  });

  return mapCartItem(item);
}

export async function updateCartItem(
  userId: string,
  itemId: string,
  input: z.infer<typeof updateCartItemSchema>,
) {
  const existing = await prisma.cartItem.findFirst({ where: { id: itemId, userId } });
  if (!existing) throw notFound("Cart item");

  if (input.quantity === 0) {
    await prisma.cartItem.delete({ where: { id: itemId } });
    return { deleted: true };
  }

  const item = await prisma.cartItem.update({
    where: { id: itemId },
    data: {
      ...(input.quantity !== undefined ? { quantity: input.quantity } : {}),
      ...(input.hasInsurance !== undefined ? { hasInsurance: input.hasInsurance } : {}),
    },
    include: { product: true },
  });

  return mapCartItem(item);
}

export async function removeCartItem(userId: string, itemId: string) {
  const existing = await prisma.cartItem.findFirst({ where: { id: itemId, userId } });
  if (!existing) throw notFound("Cart item");
  await prisma.cartItem.delete({ where: { id: itemId } });
  return { deleted: true };
}

export async function clearCart(userId: string) {
  await prisma.cartItem.deleteMany({ where: { userId } });
  return { cleared: true };
}

export async function listAddresses(userId: string) {
  return prisma.address.findMany({ where: { userId }, orderBy: { isDefault: "desc" } });
}

export async function createAddress(userId: string, input: z.infer<typeof addressSchema>) {
  if (input.isDefault) {
    await prisma.address.updateMany({ where: { userId }, data: { isDefault: false } });
  }
  return prisma.address.create({ data: { ...input, userId } });
}

export async function updateAddress(
  userId: string,
  id: string,
  input: z.infer<typeof addressSchema>,
) {
  const existing = await prisma.address.findFirst({ where: { id, userId } });
  if (!existing) throw notFound("Address");
  if (input.isDefault) {
    await prisma.address.updateMany({ where: { userId }, data: { isDefault: false } });
  }
  return prisma.address.update({ where: { id }, data: input });
}

export async function deleteAddress(userId: string, id: string) {
  const existing = await prisma.address.findFirst({ where: { id, userId } });
  if (!existing) throw notFound("Address");
  await prisma.address.delete({ where: { id } });
  return { deleted: true };
}

export async function validateDiscount(code: string, subtotal: number) {
  const discount = await prisma.discountCode.findUnique({ where: { code } });
  if (!discount?.active) throw badRequest("کد تخفیف نامعتبر است.");
  if (discount.expiresAt && discount.expiresAt < new Date()) {
    throw badRequest("کد تخفیف منقضی شده است.");
  }
  if (discount.minAmount && subtotal < discount.minAmount) {
    throw badRequest("حداقل مبلغ سفارش برای این کد رعایت نشده است.");
  }

  let amountOff = 0;
  if (discount.percentOff) amountOff = Math.floor(subtotal * (discount.percentOff / 100));
  if (discount.amountOff) amountOff = discount.amountOff;

  return { code, amountOff, valid: true };
}
