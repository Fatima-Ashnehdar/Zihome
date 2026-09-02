import type {
  Product,
  Category,
  Brand,
  Review,
  Question,
  InsuranceOption,
  ProductImage,
  ProductSpecification,
} from "@prisma/client";
import { formatPersianScore } from "@/server/lib/auth-tokens";

export type ProductWithRelations = Product & {
  brand?: Brand | null;
  category?: Category | null;
  images?: ProductImage[];
  specifications?: ProductSpecification[];
  reviews?: Review[];
  questions?: Question[];
  insurance?: InsuranceOption | null;
};

export function mapProductCard(product: Product) {
  return {
    id: product.id,
    name: product.name,
    score: formatPersianScore(product.score),
    photo: product.photoUrl,
    currentPrice: product.currentPrice,
    previousPrice: product.previousPrice,
    model: product.model,
    discount: product.discountLabel,
  };
}

export function mapCategoryCard(category: Category) {
  return {
    id: category.id,
    name: category.name,
    ...(category.imageUrl ? { image: category.imageUrl } : {}),
  };
}

export function mapProductDetail(product: ProductWithRelations) {
  return {
    ...mapProductCard(product),
    description: product.description,
    introduction: product.introduction,
    inStock: product.inStock,
    hasColorOptions: product.hasColorOptions,
    hasWarranty: product.hasWarranty,
    brand: product.brand?.name ?? null,
    category: product.category?.name ?? null,
    images:
      product.images?.map((img) => ({
        id: img.id,
        url: img.url,
        isMain: img.isMain,
        sortOrder: img.sortOrder,
      })) ?? [],
    mainPicture: product.photoUrl,
    littlePictures:
      product.images
        ?.filter((img) => !img.isMain)
        .map((img, index) => ({ id: index + 1, picture: img.url })) ?? [],
    specifications:
      product.specifications?.map((spec) => ({ key: spec.key, value: spec.value })) ?? [],
    reviews:
      product.reviews?.map((review) => ({
        id: review.id,
        name: review.authorName,
        date: review.reviewDate,
        score: review.score,
        opinion: review.opinion,
        answer: "پاسخ به این نظر",
        question: "این نظر برای شما مفید است ؟",
      })) ?? [],
    questions:
      product.questions?.map((q) => ({
        id: q.id,
        question: q.question,
        answer: q.answer ?? "مشاهده پاسخ های دیگر",
      })) ?? [],
    insurance: product.insurance
      ? {
          title: product.insurance.title,
          insuranceDetails: "جزئیات بیمه",
          description: product.insurance.description,
          attention: product.insurance.attention,
          previousPrice: product.insurance.previousPrice,
          currentPrice: product.insurance.currentPrice,
          paragraphs: product.insurance.paragraphs,
        }
      : null,
  };
}

export function mapSimilarProduct(product: Product) {
  return {
    id: product.id,
    photo: product.photoUrl,
    name: product.name,
    score: product.score,
    previousPrice: product.previousPrice,
    currentPrice: product.currentPrice,
    model: product.model,
  };
}

export function mapCartItem(item: {
  id: string;
  color: string;
  quantity: number;
  hasInsurance: boolean;
  product: Product;
}) {
  return {
    id: item.product.id,
    cartItemId: item.id,
    name: item.product.name,
    color: item.color,
    warranty: item.product.hasWarranty ? "گارانتی ۱۸ ماهه گلدیران" : "",
    picture: item.product.photoUrl,
    quantity: item.quantity,
    hasInsurance: item.hasInsurance,
    currentPrice: item.product.currentPrice,
    previousPrice: item.product.previousPrice,
  };
}
