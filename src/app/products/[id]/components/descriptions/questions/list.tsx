/**@format */

import { useProductIdStore } from "@/store/useProductStore";
import { QuestionsCardProps } from "../../../types";

import { QuestionsCard } from "./card";

// export interface QuestionCard {
//   questions: QuestionsCardProps[];
// }

export function QuestionList() {
  const product = useProductIdStore((state) => state.product);
  return (
    <div className="flex flex-col gap-y-4 w-[70%]">
      {product?.questions.map((question) => (
        <QuestionsCard key={question.id} {...question} />
      ))}
    </div>
  );
}
