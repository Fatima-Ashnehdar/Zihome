import { StaticImageData } from "next/image";

export interface ProductCardProps {
  id: string;
  name: string;
  photo: StaticImageData;
  score: string;
  currentPrice: string;
  previousPrice: string;
  model: string;
  discount: string;
}

export interface CategoryCardProps {
  id: string;
  name: string;
  image?: StaticImageData;
}
