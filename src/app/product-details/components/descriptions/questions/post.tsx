/**@format */

import { Button } from "@/components/ui/button";

export function PostQuestions() {
  const postQuestions = {
    title: "سوالات خود را با ما در میان بگذارید",
    paragraph: "کارشناسان ما  آماده پاسخگویی به سوالات شما هستند.",
  };

  return (
    <div className="sticky top-0 right-0 w-full">
      <div className="flex flex-col  gap-y-10 border rounded-2xl px-5 py-6">
        <div className="flex flex-col items-center gap-y-4">
          <p className="text-base text-gray-950">{postQuestions.title}</p>
          <p className="text-sm text-gray-950">{postQuestions.paragraph}</p>
        </div>

        <Button variant={"outline"} size={"xl"}>
          <p>ثبت دیدگاه</p>
        </Button>
      </div>
    </div>
  );
}
