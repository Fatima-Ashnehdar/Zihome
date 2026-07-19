/**@format */

import { toRialMoney } from "@/app/products/utils";

import { Button } from "@/components/ui/button";

export function QuestionsTabs() {
  const questionTabs = [
    { id: 1, name: "جدیدترین" },
    { id: 2, name: "بیشترین پاسخ" },
  ];

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <span className="inline-block w-1 h-10 bg-red-500 rounded-tr-4xl rounded-br-4xl"></span>
        <div className="flex gap-x-6">
          {questionTabs.map((item) => (
            <Button key={item.id} variant={"ghost"}>
              <p className="text-sm font-normal hover:text-red-500">{item.name}</p>
            </Button>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-950">{toRialMoney(85)} پرسش</p>
    </div>
  );
}
