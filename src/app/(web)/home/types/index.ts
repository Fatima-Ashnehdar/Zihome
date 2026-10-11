import { StaticImageData } from "next/image";

import { ReactNode } from "react";

export interface ProposalCardProps {
  id: number;
  previousPrice: number;
  currentPrice: number;
  discount: string;
  title: string;
  model: string;
  score: string;
  picture: StaticImageData;
}

export interface CategoryCardProps {
  id: number;
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
