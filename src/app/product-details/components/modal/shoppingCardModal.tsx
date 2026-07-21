/**@format */

import Image from "next/image";

import { toRialMoney } from "@/app/products/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import mainPhoto from "../../../../../public/pictures/details/main-pic.png";

import { Trash2 } from "lucide-react";

const shoppingCardModal = {
  title: "کالا به سبد خرید شما اضافه شد",
  name: "پلوپز ۸ نفره پارس خزر مدل Tyan-181",
  price: 86000000,
  color: "سفید",
  description:
    "باتوجه به بالا بودن ارزش کالا خریداری شده ،بیمه گلدیران برای شما۷۵.۰۰۰ تومان فعال شد.",
  addInsurance: "بیمه به کالا اضافه شده",
  image: mainPhoto,
};

export function ShoppingCardModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <Button variant={"shoppingCard"} size={"xl"}>
              <p className="text-sm font-normal">افزودن به سبد خرید</p>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{shoppingCardModal.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>

          <div className="flex items-center gap-x-5 my-5">
            <div className="w-[28%]">
              <Image alt="product-photo" src={shoppingCardModal.image} />
            </div>
            <div className="flex flex-col gap-y-4 w-full ">
              <p>{shoppingCardModal.name}</p>
              <div className="flex justify-between">
                <div className="flex items-center gap-x-2 bg-gray-100 rounded-full py-1 px-1 w-22">
                  <span className="inline-block w-5 h-5 bg-white rounded-full" />
                  <p className="text-xs text-gray-700">سفید</p>
                </div>
                <p className="text-base text-gray-900">
                  {toRialMoney(shoppingCardModal.price)} تومان
                </p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-green-700">{shoppingCardModal.addInsurance}</p>
                <Button variant="destructive" size="xl" className="pt-1">
                  <div className="flex items-center gap-x-2">
                    <Trash2 className="size-4" />
                    <p> حذف بیمه</p>
                  </div>
                </Button>
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-sm text-gray-900">{shoppingCardModal.description}</p>
              </div>
              <Button variant="shoppingCard" size="xl" className="mt-3">
                <p> برو به سبد خرید</p>
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
