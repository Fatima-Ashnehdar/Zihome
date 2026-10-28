import { StaticImageData } from "next/image";

import { ReactNode } from "react";

export interface ProposalCardProps {
  id: string;
  previousPrice: number;
  currentPrice: number;
  discount: string;
  title: string;
  model: string;
  score: string;
  photo: StaticImageData;
}

export interface CategoryCardProps {
  id: string;
  title: string;
  picture: StaticImageData;
}

export interface BlogCardProps {
  id: number;
  question: string;
  description: string;
  date: string;
  picture: StaticImageData;
  icon: ReactNode;
}
