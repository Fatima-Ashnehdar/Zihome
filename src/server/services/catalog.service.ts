import type { Prisma } from "@prisma/client";
import { prisma } from "@/server/db/prisma";
import {
  mapProductCard,
  mapCategoryCard,
  mapProductDetail,
  mapSimilarProduct,
} from "@/server/lib/mappers";
import { paginationMeta, parsePagination } from "@/server/lib/response";
import { notFound } from "@/server/lib/errors";

type SortOption = "decoration" | "latest" | "best-selling" | "buyers-recommendations";

function buildProductOrder(sort?: string): Prisma.ProductOrderByWithRelationInput {
  switch (sort as SortOption) {
    case "latest":
      return { createdAt: "desc" };
    case "best-selling":
    case "buyers-recommendations":
      return { score: "desc" };
    default:
      return { name: "asc" };
  }
}

function buildProductWhere(query: Record<string, string>): Prisma.ProductWhereInput {
  const where: Prisma.ProductWhereInput = {};
  if (query.categoryId) where.categoryId = query.categoryId;
  if (query.brandId) where.brandId = query.brandId;
  if (query.inStock === "true") where.inStock = true;
  if (query.hasColorOptions === "true") where.hasColorOptions = true;
  if (query.hasWarranty === "true") where.hasWarranty = true;
  if (query.hasDiscount === "true") where.previousPrice = { gt: 0 };
  if (query.minPrice || query.maxPrice) {
    where.currentPrice = {};
    if (query.minPrice) where.currentPrice.gte = Number(query.minPrice);
    if (query.maxPrice) where.currentPrice.lte = Number(query.maxPrice);
  }
  if (query.search) {
    where.OR = [
      { name: { contains: query.search, mode: "insensitive" } },
      { model: { contains: query.search, mode: "insensitive" } },
    ];
  }
  return where;
}

export async function listProducts(query: Record<string, string>) {
  const { page, limit, skip } = parsePagination(query);
  const where = buildProductWhere(query);

  const [total, products] = await Promise.all([
    prisma.product.count({ where }),
    prisma.product.findMany({ where, orderBy: buildProductOrder(query.sort), skip, take: limit }),
  ]);

  return { data: products.map(mapProductCard), meta: paginationMeta(page, limit, total) };
}

export async function getProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      brand: true,
      category: true,
      images: { orderBy: { sortOrder: "asc" } },
      specifications: true,
      reviews: { orderBy: { createdAt: "desc" } },
      questions: { orderBy: { createdAt: "desc" } },
      insurance: true,
    },
  });
  if (!product) throw notFound("Product");
  return mapProductDetail(product);
}

export async function getSimilarProducts(id: string) {
  const similar = await prisma.productSimilar.findMany({
    where: { productId: id },
    include: { similarProduct: true },
  });

  if (similar.length > 0) {
    return similar.map((s) => mapSimilarProduct(s.similarProduct));
  }

  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) throw notFound("Product");

  const fallback = await prisma.product.findMany({
    where: { categoryId: product.categoryId, NOT: { id } },
    take: 4,
  });
  return fallback.map(mapSimilarProduct);
}

export async function createReview(
  productId: string,
  input: { authorName: string; score: number; opinion: string; reviewDate?: string },
  userId?: string,
) {
  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) throw notFound("Product");

  return prisma.review.create({
    data: {
      productId,
      authorName: input.authorName,
      score: input.score,
      opinion: input.opinion,
      reviewDate: input.reviewDate ?? "امروز",
      userId,
    },
  });
}

export async function createQuestion(productId: string, question: string) {
  const product = await prisma.product.findUnique({ where: { id: productId } });
  if (!product) throw notFound("Product");
  return prisma.question.create({ data: { productId, question } });
}

export async function listCategories() {
  const categories = await prisma.category.findMany({
    where: { parentId: null },
    orderBy: { sortOrder: "asc" },
  });
  return categories.map(mapCategoryCard);
}

export async function getCategoryById(id: string) {
  const category = await prisma.category.findUnique({ where: { id } });
  if (!category) throw notFound("Category");
  return mapCategoryCard(category);
}

export async function listCategoryProducts(categoryId: string, query: Record<string, string>) {
  const category = await prisma.category.findUnique({ where: { id: categoryId } });
  if (!category) throw notFound("Category");

  const { page, limit, skip } = parsePagination(query);
  const where = { ...buildProductWhere(query), categoryId };

  const [total, products] = await Promise.all([
    prisma.product.count({ where }),
    prisma.product.findMany({ where, orderBy: buildProductOrder(query.sort), skip, take: limit }),
  ]);

  return { data: products.map(mapProductCard), meta: paginationMeta(page, limit, total) };
}

export async function listBrands() {
  return prisma.brand.findMany({ orderBy: { name: "asc" } });
}
