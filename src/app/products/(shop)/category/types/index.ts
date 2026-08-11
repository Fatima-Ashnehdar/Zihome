import { StaticImageData } from "next/image";

export interface CategoriesCardProps {
  id: string;
  name: string;
  photo: StaticImageData;
  score: string;
  currentPrice: number;
  previousPrice: number;
  model: string;
  discount: string;
}
