/**@format */

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { AnswerModalProps } from "../../types";

const questionModal = {
  title: "به این پرسش پاسخ دهید.",
  submitQuestion: "سلام امکانش هست پرداخت اقساطی رو براش فعال کنید؟؟",
  hideName: "عدم نمایش نام شما در پرسش ها",
};

export function AnswerModal({ answer, icon }: AnswerModalProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"ghost"}>
              <div className="flex items-center gap-x-3">
                <p className="text-xs text-gray-800">{answer}</p>
                {icon}
              </div>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{questionModal.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>

          <div className="flex flex-col gap-y-3 mb-4">
            <p className="text-base text-gray-900">{questionModal.submitQuestion}</p>
            <Input placeholder="پاسخ" className="px-4 pt-6 pb-20" />
            <div className="flex items-center gap-x-2 pr-3 pt-1">
              <Checkbox />
              <p className="text-xs text-gray-800">{questionModal.hideName}</p>
            </div>
          </div>

          <DialogFooter>
            <Button variant={"fillDisable"} size={"xl"}>
              <p>ثبت پاسخ</p>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
