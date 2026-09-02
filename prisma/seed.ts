import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const brands = [
  { name: "تکنو", slug: "techno" },
  { name: "دیپوینت", slug: "depoint" },
  { name: "تفلون", slug: "teflon" },
  { name: "چدن", slug: "cast-iron" },
  { name: "کنوود", slug: "kenwood" },
  { name: "فیلیپس", slug: "philips" },
  { name: "ال جی", slug: "lg" },
  { name: "سامسونگ", slug: "samsung" },
];

const categories = [
  { name: "یخچال فریزر", slug: "refrigerator-freezer", imageUrl: "/pictures/products/pic-26.png", sortOrder: 1 },
  { name: "سرویس قابلمه", slug: "cookware-set", imageUrl: "/pictures/products/pic-24.png", sortOrder: 2 },
  { name: "قاشق چنگال و کارد", slug: "cutlery", imageUrl: "/pictures/products/pic-25.png", sortOrder: 3 },
  { name: "محصولات دیگر", slug: "other-products", sortOrder: 4 },
];

const shopProducts = [
  { name: "اجاق گاز تکنو", model: "N-llTE ۲۰۳ alRllNKS", photoUrl: "/pictures/products/pic-37.png", currentPrice: 3870000, previousPrice: 5400000, brandSlug: "techno", categorySlug: "other-products" },
  { name: "سرویس قابلمه تفلون", model: "N-llTE ۲۰۳ alRllNKS", photoUrl: "/pictures/products/pic-38.png", currentPrice: 1640000, previousPrice: 2400000, brandSlug: "teflon", categorySlug: "cookware-set" },
  { name: "سرخ کن فیلیپس", model: "N-llTE ۲۰۳ alRllNKS", photoUrl: "/pictures/products/pic-39.png", currentPrice: 6048000, previousPrice: 8640000, brandSlug: "philips", categorySlug: "other-products" },
  { name: "یخچال فریزر ساید بای ساید ال جی", model: "N-llTE ۲۰۳ alRllNKS", photoUrl: "/pictures/products/pic-40.png", currentPrice: 1640000, previousPrice: 2400000, brandSlug: "lg", categorySlug: "refrigerator-freezer" },
  { name: "ماکروویو کنوود ۲۴۰ لیتری", model: "N-llTE ۲۰۳ alRllNKS", photoUrl: "/pictures/products/pic-41.png", currentPrice: 3640000, previousPrice: 4400000, brandSlug: "kenwood", categorySlug: "other-products" },
  { name: "ست ماهیتابه تفلون", model: "N-llTE ۲۰۳ alRllNKS", photoUrl: "/pictures/products/pic-42.png", currentPrice: 1640000, previousPrice: 2400000, brandSlug: "teflon", categorySlug: "cookware-set" },
  { name: "ماهیتابه گریل چدنی", model: "N-llTE ۲۰۳ alRllNKS", photoUrl: "/pictures/products/pic-43.png", currentPrice: 3780000, previousPrice: 5400000, brandSlug: "cast-iron", categorySlug: "cookware-set" },
  { name: "یخچال فریزر دوقلو دیپوینت", model: "N-llTE ۲۰۳ alRllNKS", photoUrl: "/pictures/products/pic-44.png", currentPrice: 1640000, previousPrice: 2400000, brandSlug: "depoint", categorySlug: "refrigerator-freezer" },
  { name: "اجاق گاز تکنو", model: "N-llTE ۲۰۳ alRllNKS", photoUrl: "/pictures/products/pic-45.png", currentPrice: 3640000, previousPrice: 4400000, brandSlug: "techno", categorySlug: "other-products" },
];

const categoryProducts = [
  { name: "یخچال دوقلو دیپوینت", photoUrl: "/pictures/category/pic-46.png", currentPrice: 3870000, previousPrice: 5400000, brandSlug: "depoint" },
  { name: "یخچال امرسان مدل کلاسیک", photoUrl: "/pictures/category/pic-47.png", currentPrice: 1640000, previousPrice: 2400000, brandSlug: "depoint" },
  { name: "یخچال دو درب ال جی", photoUrl: "/pictures/category/pic-48.png", currentPrice: 6048000, previousPrice: 8640000, brandSlug: "lg" },
  { name: "یخچال دوقلو ال جی", photoUrl: "/pictures/category/pic-49.png", currentPrice: 1640000, previousPrice: 2400000, brandSlug: "lg" },
  { name: "یخچال چهار درب دوو", photoUrl: "/pictures/category/pic-50.png", currentPrice: 3640000, previousPrice: 4400000, brandSlug: "depoint" },
  { name: "یخچال فریزر کنوود", photoUrl: "/pictures/category/pic-51.png", currentPrice: 1640000, previousPrice: 2400000, brandSlug: "kenwood" },
  { name: "فریزر تک درب ال جی", photoUrl: "/pictures/category/pic-52.png", currentPrice: 3780000, previousPrice: 5400000, brandSlug: "lg" },
  { name: "یخچال فریزر سامسونگ", photoUrl: "/pictures/category/pic-53.png", currentPrice: 1640000, previousPrice: 2400000, brandSlug: "samsung" },
  { name: "یخچال دو درب کنوود", photoUrl: "/pictures/category/pic-54.png", currentPrice: 3640000, previousPrice: 4400000, brandSlug: "kenwood" },
  { name: "یخچال دو درب کنوود", photoUrl: "/pictures/category/pic-54.png", currentPrice: 3640000, previousPrice: 4400000, brandSlug: "kenwood" },
  { name: "یخچال اسمگ", photoUrl: "/pictures/category/pic-56.png", currentPrice: 3640000, previousPrice: 4400000, brandSlug: "depoint" },
  { name: "یخچال سامسونگ", photoUrl: "/pictures/category/pic-55.png", currentPrice: 3640000, previousPrice: 4400000, brandSlug: "samsung" },
];

const insuranceParagraphs = [
  { id: 1, text: "۱.آسیب‌های فیزیکی: مانند شکستگی صفحه‌نمایش تلویزیون، آسیب به لولای درب ماشین لباسشویی، یا خرابی قطعات داخلی." },
  { id: 2, text: "۲.آب‌دیدگی و نفوذ مایعات: شامل آسیب‌های ناشی از نفوذ آب یا رطوبت به دستگاه‌ها." },
  { id: 3, text: "۳.نوسانات برق شهری: خسارات ناشی از نوسانات برق که ممکن است به بردهای الکترونیکی یا سایر قطعات آسیب برساند." },
  { id: 4, text: "۴.حوادث طبیعی: مانند آتش‌سوزی، صاعقه، زلزله، طوفان و سیل." },
  { id: 5, text: "۵.سرقت با شکست حرز: در صورت سرقت دستگاه با وجود موانع ایمنی مناسب." },
];

async function main() {
  console.log("Seeding database...");

  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.refreshToken.deleteMany();
  await prisma.otpCode.deleteMany();
  await prisma.review.deleteMany();
  await prisma.question.deleteMany();
  await prisma.insuranceOption.deleteMany();
  await prisma.productSimilar.deleteMany();
  await prisma.productSpecification.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.address.deleteMany();
  await prisma.discountCode.deleteMany();
  await prisma.shippingTimeSlot.deleteMany();
  await prisma.shippingDay.deleteMany();
  await prisma.layoutLink.deleteMany();
  await prisma.layoutLinkGroup.deleteMany();
  await prisma.layoutBanner.deleteMany();
  await prisma.layoutFeature.deleteMany();
  await prisma.category.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.user.deleteMany();

  for (const brand of brands) {
    await prisma.brand.create({ data: brand });
  }

  const brandMap = Object.fromEntries(
    (await prisma.brand.findMany()).map((b) => [b.slug, b.id]),
  );

  for (const cat of categories) {
    await prisma.category.create({ data: cat });
  }

  const categoryMap = Object.fromEntries(
    (await prisma.category.findMany()).map((c) => [c.slug, c.id]),
  );

  const refrigeratorCategoryId = categoryMap["refrigerator-freezer"];

  const createdProducts = [];

  for (const p of shopProducts) {
    const product = await prisma.product.create({
      data: {
        name: p.name,
        model: p.model,
        photoUrl: p.photoUrl,
        currentPrice: p.currentPrice,
        previousPrice: p.previousPrice,
        discountLabel: "۳۰٪",
        score: 4.3,
        categoryId: categoryMap[p.categorySlug],
        brandId: brandMap[p.brandSlug],
        inStock: true,
        hasColorOptions: true,
        hasWarranty: true,
        description: "خرید وسایل خانه و آشپزخانه یکی از لذت‌بخش‌ترین کارهاست.",
        introduction: "یخچال یکی از مهم‌ترین وسایل آشپزخانه است.",
        images: {
          create: [
            { url: p.photoUrl, isMain: true, sortOrder: 0 },
            { url: "/pictures/details/pic-58.png", sortOrder: 1 },
            { url: "/pictures/details/pic-59.png", sortOrder: 2 },
          ],
        },
        specifications: {
          create: [
            { key: "برند", value: p.brandSlug },
            { key: "مدل", value: p.model },
            { key: "گارانتی", value: "۱۸ ماهه" },
          ],
        },
        insurance: {
          create: {
            title: "بیمه نامه",
            description: "بیمه سامان بخش زیادی از خسارت حوادث زیر را جبران میکند:",
            attention: "توجه : این بیمه بلافاصله پس از نصب فعال می‌شود.",
            previousPrice: 95000,
            currentPrice: 75000,
            paragraphs: insuranceParagraphs,
          },
        },
        reviews: {
          create: [
            {
              authorName: "سارا عیدی",
              score: 3.4,
              opinion: "کوچولو و جمع و جوره، ته دیگ خفنی ازش نگرفتم.",
              reviewDate: "۲۸ مهر ۱۴۰۳",
            },
            {
              authorName: "سارا عیدی",
              score: 3.4,
              opinion: "پلوپز پارس خزر واقعا عالی.",
              reviewDate: "۲۸ مهر ۱۴۰۳",
            },
          ],
        },
        questions: {
          create: [
            { question: "امکان پرداخت اقساطی هست؟", answer: "بله، از طریق درگاه زی‌هوم." },
            { question: "سلام میشه کیک داخلش درست کرد؟", answer: null },
          ],
        },
      },
    });
    createdProducts.push(product);
  }

  for (const p of categoryProducts) {
    await prisma.product.create({
      data: {
        name: p.name,
        model: "N-llTE ۲۰۳ alRllNKS",
        photoUrl: p.photoUrl,
        currentPrice: p.currentPrice,
        previousPrice: p.previousPrice,
        discountLabel: "۳۰٪",
        score: 4.3,
        categoryId: refrigeratorCategoryId,
        brandId: brandMap[p.brandSlug],
        inStock: true,
        hasWarranty: true,
      },
    });
  }

  if (createdProducts.length >= 2) {
    await prisma.productSimilar.createMany({
      data: [
        { productId: createdProducts[0].id, similarProductId: createdProducts[1].id },
        { productId: createdProducts[0].id, similarProductId: createdProducts[2].id },
      ],
    });
  }

  const adminPassword = await import("bcryptjs").then((b) => b.hash("Admin1234", 12));
  const userPassword = await import("bcryptjs").then((b) => b.hash("User12345", 12));

  await prisma.user.create({
    data: {
      phone: "09123456789",
      passwordHash: adminPassword,
      role: "ADMIN",
    },
  });

  await prisma.user.create({
    data: {
      phone: "09126996755",
      passwordHash: userPassword,
      role: "USER",
    },
  });

  await prisma.address.createMany({
    data: [
      {
        userId: (await prisma.user.findFirst({ where: { phone: "09126996755" } }))!.id,
        city: "استان تهران ،شهر تهران",
        address: "بلوار فردوس غرب ، بهارشمالی،کوی نگین ،پلاک۲ واحد۱",
        postalCode: "176567890",
        contactNumber: "9891234567",
        isDefault: true,
      },
    ],
  });

  await prisma.discountCode.create({
    data: { code: "ZIHOME10", percentOff: 10, minAmount: 1000000, active: true },
  });

  const shippingDay = await prisma.shippingDay.create({
    data: { day: "پنج شنبه", date: 7, month: "فروردین", sortOrder: 1 },
  });

  await prisma.shippingTimeSlot.createMany({
    data: [
      { shippingDayId: shippingDay.id, clock: "۷ الی ۹", sortOrder: 1 },
      { shippingDayId: shippingDay.id, clock: "۹ الی ۱۲", sortOrder: 2 },
      { shippingDayId: shippingDay.id, clock: "۱۲ الی ۱۵", sortOrder: 3 },
      { shippingDayId: shippingDay.id, clock: "۱۵ الی ۱۸", sortOrder: 4 },
    ],
  });

  const footerGroups = [
    {
      title: "محصولات",
      type: "footer",
      links: ["مبلمان", "دکوراسیون", "لوازم آشپزخانه", "ابزار خانه", "سرویس خواب"],
    },
    {
      title: "خدمات مشتریان",
      type: "footer",
      links: ["پیگیری سفارش", "شرایط و قوانین", "روش های ارسال", "سوالات متداول"],
    },
    {
      title: "درباره ما",
      type: "footer",
      links: ["معرفی فروشگاه", "تماس با ما", "همکاری با ما", "وبلاگ"],
    },
  ];

  for (const [gi, group] of footerGroups.entries()) {
    const g = await prisma.layoutLinkGroup.create({
      data: { title: group.title, type: group.type },
    });
    for (const [li, text] of group.links.entries()) {
      await prisma.layoutLink.create({
        data: { groupId: g.id, text, sortOrder: li + 1 },
      });
    }
  }

  await prisma.layoutBanner.createMany({
    data: [
      { text: "ارسال رایگان برای سفارش‌های بالای ۵ میلیون تومان", sortOrder: 1 },
      { text: "تخفیف ویژه لوازم آشپزخانه", sortOrder: 2 },
    ],
  });

  await prisma.layoutFeature.createMany({
    data: [
      { title: "ارسال سریع", text: "در کمترین زمان ممکن", sortOrder: 1 },
      { title: "ضمانت بازگشت کالا", text: "حداکثر ۱۰ روز کاری", sortOrder: 2 },
      { title: "اصالت کالا", text: "ضمانت اصل بودن کالا", sortOrder: 3 },
    ],
  });

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
