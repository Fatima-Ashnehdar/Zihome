import { StaticImageData } from "next/image";

export interface ProductCardProps {
  id: string;
  name: string;
  photo: StaticImageData;
  score: string;
  currentPrice: number;
  previousPrice: number;
  model: string;
  discount: string;
}

export interface CategoryCardProps {
  id: string;
  name: string;
  image?: StaticImageData;
}
