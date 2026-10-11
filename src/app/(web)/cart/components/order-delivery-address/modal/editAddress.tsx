/**@format */

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Pencil } from "lucide-react";

import { SelectBox } from "./selectBox";

const editAddressModal = {
  title: "ویرایش آدرس",
};

export function EditAddressModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"ghost"}>
              <div className="flex gap-x-2">
                <Pencil className="text-blue-600" />
                <p className="text-blue-600 font-normal">ویرایش</p>
              </div>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-4xl h-[80%]">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{editAddressModal.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col gap-y-7 overflow-y-scroll">
            <div className="flex gap-x-4">
              <div className="w-full">
                <p className="text-base text-gray-900">نام و نام خانوادگی تحویل گیرنده</p>
                <Input className="h-11 mt-2" placeholder="مثلا ساره حسینی" />
              </div>
              <div className="w-full">
                <p className="text-base text-gray-900">شماره همراه</p>
                <Input className="h-11 mt-2" placeholder="09124981298" />
              </div>
            </div>
            <SelectBox />

            <div className="flex flex-col gap-y-2">
              <p className="text-base text-gray-800">خیابان و کوچه</p>
              <Input placeholder="خیابان ..." className="h-10" />
            </div>
            <div className="flex items-center gap-x-5">
              <div className="w-full flex flex-col gap-y-2">
                <p className="text-base text-gray-800">پلاک</p>
                <Input placeholder="مثلا 23" className="h-10" />
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <p className="text-base text-gray-800">واحد</p>
                <Input placeholder="مثلا 2" className="h-10" />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-base text-gray-800">کدپستی</p>
              <Input placeholder="10 رقمی باشد" className="h-10" />
            </div>
          </div>
          <DialogFooter>
            <div className="flex justify-start w-full my-3">
              <Button variant={"shoppingCard"} size={"xl"}>
                <p>ویرایش و ادامه</p>
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
