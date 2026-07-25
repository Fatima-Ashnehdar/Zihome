import { StaticImageData } from "next/image";

export interface TotalPriceProps {
  id: number;
  price: number;
  name: string;
}

export interface ProductsListProps {
  id: number;
  name: string;
  color: string;
  warranty: string;
  picture: StaticImageData;
}
