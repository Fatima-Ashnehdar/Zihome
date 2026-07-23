/**@format */

import { QuestionsCardProps } from "@/app/product-details/types";

import { MessageCircleMore } from "lucide-react";
import { AnswerModal } from "../../modal/answerModal";

export function QuestionsCard({ question, answer, icon }: QuestionsCardProps) {
  return (
    <div className="flex flex-col gap-y-8 border rounded-2xl px-6 py-6">
      <div className="flex gap-x-2">
        <MessageCircleMore className="size-5 text-gray-600" />
        <p className="text-gray-900">{question}</p>
      </div>
      <div className="flex justify-start">
        <AnswerModal answer={answer} icon={icon} />
      </div>
    </div>
  );
}
