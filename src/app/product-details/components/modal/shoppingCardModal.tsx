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

import { mockShoppingCardModal } from "../../data/mock-product-details";

import { Trash2 } from "lucide-react";

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
              <p className="text-base text-gray-950 font-normal">{mockShoppingCardModal.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>

          <div className="flex items-center gap-x-5 my-5">
            <div className="w-[28%]">
              <Image alt="product-photo" src={mockShoppingCardModal.image} />
            </div>
            <div className="flex flex-col gap-y-4 w-full ">
              <p>{mockShoppingCardModal.name}</p>
              <div className="flex justify-between">
                <div className="flex items-center gap-x-2 bg-gray-100 rounded-full py-1 px-1 w-22">
                  <span className="inline-block w-5 h-5 bg-white rounded-full" />
                  <p className="text-xs text-gray-700">سفید</p>
                </div>
                <p className="text-base text-gray-900">
                  {toRialMoney(mockShoppingCardModal.price)} تومان
                </p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <div className="flex flex-col gap-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-green-700">{mockShoppingCardModal.addInsurance}</p>
                <Button variant="destructive" size="xl" className="pt-1">
                  <div className="flex items-center gap-x-2">
                    <Trash2 className="size-4" />
                    <p> حذف بیمه</p>
                  </div>
                </Button>
              </div>
              <div className="flex flex-col gap-y-3">
                <p className="text-sm text-gray-900">{mockShoppingCardModal.description}</p>
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
