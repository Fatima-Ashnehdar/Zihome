export interface ProductImage {
  id: string;
  url: string;
  isMain: boolean;
  sortOrder: number;
}

export interface LittlePicture {
  id: number;
  picture: string;
}

export interface Specification {
  key: string;
  value: string;
}

export interface Review {
  id: string;
  name: string;
  date: string;
  score: string;
  opinion: string;
  answer: string;
  question: string;
}

export interface ProductQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface InsuranceParagraph {
  id: number;
  text: string;
}

export interface Insurance {
  title: string;
  insuranceDetails: string;
  description: string;
  attention: string;
  previousPrice: number;
  currentPrice: number;
  paragraphs: InsuranceParagraph[];
}

export interface Product {
  id: string;
  name: string;
  score: string;
  photo: string;
  currentPrice: number;
  previousPrice: number;
  model: string;
  discount: string;
  description: string;
  introduction: string;
  inStock: boolean;
  hasColorOptions: boolean;
  hasWarranty: boolean;
  brand: string;
  category: string;
  images: ProductImage[];
  mainPicture: string;
  littlePictures: LittlePicture[];
  specifications: Specification[];
  reviews: Review[];
  questions: ProductQuestion[];
  insurance: Insurance;
}
