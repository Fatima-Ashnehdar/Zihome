/**@format */

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

const insuranceModal = {
  title: "بیمه نامه",
  insuranceDetails: "جزئیات بیمه",
  description: "بیمه سامان بخش زیادی از خسارت حوادث زیر را جبران میکند:",
  attention: "توجه : این بیمه بلافاصله پس از نصب توسط تکنسین‌های گلدیران فعال می‌شود.",
  previousPrice: 95000,
  currentPrice: 75000,
  paragraphs: [
    {
      id: 1,
      text: "۱.آسیب‌های فیزیکی: مانند شکستگی صفحه‌نمایش تلویزیون، آسیب به لولای درب ماشین لباسشویی، یا خرابی قطعات داخلی.",
    },
    {
      id: 2,
      text: " ۲.آب‌دیدگی و نفوذ مایعات: شامل آسیب‌های ناشی از نفوذ آب یا رطوبت به دستگاه‌ها.​",
    },
    {
      id: 3,
      text: "۳.نوسانات برق شهری: خسارات ناشی از نوسانات برق که ممکن است به بردهای الکترونیکی یا سایر قطعات آسیب برساند.​",
    },
    { id: 4, text: "۴.حوادث طبیعی: مانند آتش‌سوزی، صاعقه، زلزله، طوفان و سیل." },
    { id: 5, text: "۵.سرقت با شکست حرز: در صورت سرقت دستگاه با وجود موانع ایمنی مناسب." },
  ],
};

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
              <p className="text-base text-gray-950 font-normal">{insuranceModal.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-3">
              <p className="text-sm text-gray-900">{insuranceModal.insuranceDetails}</p>
              <p className="text-sm text-gray-900">{insuranceModal.description}</p>
            </div>
            <div className="flex flex-col gap-y-4">
              {insuranceModal.paragraphs.map((paragraph) => (
                <p key={paragraph.id} className="text-xs text-gray-600">
                  {paragraph.text}
                </p>
              ))}
            </div>
            <p className="text-sm text-green-700 font-medium">{insuranceModal.attention}</p>
          </div>
          <DialogFooter>
            <div className="flex justify-between item-center h-full w-full">
              <Button variant="destructive" size="xl" className="mt-3">
                <p> حذف بیمه</p>
              </Button>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2">
                  <p className="text-sm text-gray-600 line-through">
                    {toRialMoney(insuranceModal.previousPrice)}
                  </p>
                  <div className="bg-red-500 px-3 pb-1 pt-1.5 rounded-full shadow-discard">
                    <p className="text-sm text-white">{toRialMoney(20)}%</p>
                  </div>
                </div>
                <p className="text-base text-gray-900">
                  {toRialMoney(insuranceModal.currentPrice)} تومان
                </p>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
