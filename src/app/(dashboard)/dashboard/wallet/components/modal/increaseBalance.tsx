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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Plus, CircleAlert } from "lucide-react";

import { toRialMoney } from "@/app/(web)/products/(shop)/utils";

import { modalIncreaseBalance } from "../../data/mock-wallet";

export function ModalIncreaseBalance() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"outline"} size={"xl"}>
              <div className="flex gap-x-2">
                <Plus />
                <p>افزایش موجودی</p>
              </div>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{modalIncreaseBalance.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col gap-y-6 px-8 py-6">
            <p className="text-base text-gray-900">{modalIncreaseBalance.description}</p>
            <Input placeholder="مبلغ دلخواه" className="h-11" />
            <div className="flex items-center gap-x-3 bg-gray-50 p-3 rounded-lg">
              <CircleAlert className="size-5 text-blue-700" />
              <p className="text-sm text-gray-800">{modalIncreaseBalance.note}</p>
            </div>
            <div className="flex gap-x-4">
              {modalIncreaseBalance.price.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-center gap-x-2 bg-neutral-50 hover:bg-pink-50 active:bg-red-50 w-full 
                  rounded-lg cursor-pointer py-3"
                >
                  <p className="text-sm text-gray-900">{toRialMoney(item.number)}</p>
                  <p className="text-sm text-gray-900">ریال</p>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter className="flex gap-x-5">
            <Button variant={"secondary"} size={"xl"} className="border border-gray-500 w-[38%]">
              <p>انصراف</p>
            </Button>
            <Button variant={"default"} size={"xl"} className="w-[58%]">
              <div className="flex justify-center">
                <p>افزایش موجودی کیف پول</p>
              </div>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
