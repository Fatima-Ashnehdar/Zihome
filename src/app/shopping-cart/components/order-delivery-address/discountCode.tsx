/**@format */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const discountCode = {
  title: "کد تخفیف و هدایا",
};

export function DiscountCode() {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-base text-gray-950">{discountCode.title}</p>
      <div className="flex justify-between gap-x-6 border rounded-xl py-9 px-7 bg-white">
        <div className="flex flex-col gap-y-2 w-full">
          <p className="text-base text-gray-900">کد تخفیف</p>
          <div className="relative">
            <Input placeholder="کد مورد نظر خود را وارد کنید." className="h-12" />
            <Button variant={"outline"} size={"sm"} className="absolute top-2.5 left-2.5">
              <p>ثبت</p>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <p className="text-base text-gray-900">کارت هدیه</p>
          <div className="relative">
            <Input placeholder="کد مورد نظر خود را وارد کنید." className="h-12" />
            <Button variant={"outline"} size={"sm"} className="absolute top-2.5 left-2.5">
              <p>ثبت</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
