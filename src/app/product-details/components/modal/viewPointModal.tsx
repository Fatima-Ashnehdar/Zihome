/**@format */

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

import { Angry, Frown, Laugh, Smile, SmilePlus } from "lucide-react";

const viewPointModal = {
  title: "دیدگاه شما",
  scoreText: "لطفا به این کالا امتیاز دهید",
  Text: "متن دیدگاه",
  hideName: "عدم نمایش نام شما در دیدگاه",
};

const productScore = [
  { id: 1, icon: <Laugh className="text-gray-600 size-6" />, score: "عالی" },
  { id: 2, icon: <SmilePlus className="text-gray-600 size-6" />, score: "خوب" },
  { id: 3, icon: <Smile className="text-gray-600 size-6" />, score: "معمولی" },
  { id: 4, icon: <Angry className="text-gray-600 size-6" />, score: "ضعیف" },
  { id: 5, icon: <Frown className="text-gray-600 size-6" />, score: "بد" },
];

export function ViewPointModal() {
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
              <p className="text-base text-gray-950 font-normal">{viewPointModal.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-4">
              <p className="text-base text-gray-900">{viewPointModal.scoreText}</p>
              <div className="flex gap-x-4">
                {productScore.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center gap-y-3 border w-full py-3 rounded-md cursor-pointer bg-white hover:bg-pink-50
                    hover:border-pink-300"
                  >
                    {item.icon}
                    <p className="text-sm text-gray-800">{item.score}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-2 mb-4">
              <p className="text-base text-gray-900">{viewPointModal.Text}</p>
              <Input
                placeholder="نظر خود را در مورد این کالا  به اشتراک بگذارید."
                className="px-4 pt-6 pb-20"
              />
              <div className="flex items-center gap-x-2 pr-3 pt-2">
                <Checkbox />
                <p className="text-xs text-gray-800">{viewPointModal.hideName}</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant={"fillDisable"} size={"xl"}>
              <p>ثبت دیدگاه</p>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
