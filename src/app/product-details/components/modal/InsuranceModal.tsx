/**@format */

import { mockInsuranceModal } from "../../data/mock-product-details";

import { toRialMoney } from "@/app/products/utils";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ChevronLeft } from "lucide-react";

export function InsuranceModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <Button variant={"ghost"}>
              <div className="flex items-center gap-x-3">
                <p className="text-sm text-blue-800 font-medium">نمایش جزئیات</p>
                <ChevronLeft className="size-3 text-blue-800" />
              </div>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{mockInsuranceModal.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-3">
              <p className="text-sm text-gray-900">{mockInsuranceModal.insuranceDetails}</p>
              <p className="text-sm text-gray-900">{mockInsuranceModal.description}</p>
            </div>
            <div className="flex flex-col gap-y-4">
              {mockInsuranceModal.paragraphs.map((paragraph) => (
                <p key={paragraph.id} className="text-xs text-gray-600">
                  {paragraph.text}
                </p>
              ))}
            </div>
            <p className="text-sm text-green-700 font-medium">{mockInsuranceModal.attention}</p>
          </div>
          <DialogFooter>
            <div className="flex justify-between item-center h-full w-full">
              <Button variant="destructive" size="xl" className="mt-3">
                <p> حذف بیمه</p>
              </Button>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2">
                  <p className="text-sm text-gray-600 line-through">
                    {toRialMoney(mockInsuranceModal.previousPrice)}
                  </p>
                  <div className="bg-red-500 px-3 pb-1 pt-1.5 rounded-full shadow-discard">
                    <p className="text-sm text-white">{toRialMoney(20)}%</p>
                  </div>
                </div>
                <p className="text-base text-gray-900">
                  {toRialMoney(mockInsuranceModal.currentPrice)} تومان
                </p>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
