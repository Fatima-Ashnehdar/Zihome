import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ProductsSimilarCardProps {
  id: number;
  photo: StaticImageData;
  name: string;
  score: number;
  model: string;
  previousPrice: number;
  currentPrice: number;
}

export interface ViewPointCardProps {
  id: number;
  name: string;
  date: string;
  score: number;
  opinion: string;
  answer: string;
  question: string;
}

export interface QuestionsCardProps {
  id: number;
  question: string;
  answer: string;
  icon: ReactNode;
}

export interface AnswerModalProps {
  answer: string;
  icon: ReactNode;
}
