import { ReactNode } from "react";

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
