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

const questionModal = {
  title: "پرسش شما",
  submitQuestion: "پرسش خود را درباره این محصول ثبت کنید.",
  hideName: "عدم نمایش نام شما در پرسش ها",
};

export function QuestionModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"outline"} size={"xl"}>
              <p>ثبت دیدگاه</p>
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
            <Input
              placeholder="نظر خود را در مورد این کالا  به اشتراک بگذارید."
              className="px-4 pt-6 pb-20"
            />
            <div className="flex items-center gap-x-2 pr-3 pt-1">
              <Checkbox />
              <p className="text-xs text-gray-800">{questionModal.hideName}</p>
            </div>
          </div>

          <DialogFooter>
            <Button variant={"fillDisable"} size={"xl"}>
              <p>ثبت پرسش</p>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
