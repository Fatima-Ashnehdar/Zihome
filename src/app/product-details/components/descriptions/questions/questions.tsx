/** @format */

import { PostQuestions } from "./post";
import { QuestionList } from "./list";
import { QuestionsTabs } from "./tabs";

import { mockQuestions } from "@/app/product-details/data/mock-product-details";

const question = {
  title: "پرسش ها",
};

export function Questions() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-gray-50 rounded-2xl px-8 py-4">
        <p className="text-base text-gray-950">{question.title}</p>
      </div>
      <div>
        <QuestionsTabs />
      </div>
      <div className="flex gap-x-6 justify-between">
        <QuestionList questions={mockQuestions} />
        <div className="sticky top-0 left-0 w-[29%]">
          <PostQuestions />
        </div>
      </div>
    </div>
  );
}
