/**@format */

import { QuestionsCardProps } from "@/app/product-details/types";
import { QuestionsCard } from "./card";

export interface QuestionCard {
  questions: QuestionsCardProps[];
}

export function QuestionList({ questions }: QuestionCard) {
  return (
    <div className="flex flex-col gap-y-4 w-[70%]">
      {questions.map((question) => (
        <QuestionsCard key={question.id} {...question} />
      ))}
    </div>
  );
}
