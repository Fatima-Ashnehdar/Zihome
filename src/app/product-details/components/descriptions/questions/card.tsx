/**@format */

import { QuestionsCardProps } from "@/app/product-details/types";

import { Button } from "@/components/ui/button";

import { MessageCircleMore } from "lucide-react";

export function QuestionsCard({ question, answer, icon }: QuestionsCardProps) {
  return (
    <div className="flex flex-col gap-y-8 border rounded-2xl px-6 py-6">
      <div className="flex gap-x-2">
        <MessageCircleMore className="size-5 text-gray-600" />
        <p className="text-gray-900">{question}</p>
      </div>
      <div>
        <Button variant={"ghost"}>
          <div className="flex items-center gap-x-3">
            <p className="text-xs text-gray-800">{answer}</p>
            {icon}
          </div>
        </Button>
      </div>
    </div>
  );
}
