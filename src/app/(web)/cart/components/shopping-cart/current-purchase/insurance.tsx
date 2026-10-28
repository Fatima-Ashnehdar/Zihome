/**@format */

import { InsuranceModal } from "@/app/products/[id]/components/modal/InsuranceModal";

import { Button } from "@/components/ui/button";

import { Trash2 } from "lucide-react";

export function Insurance() {
  return (
    <div className="flex flex-col gap-y-6 border border-gray-200 rounded-2xl px-5 pt-5 pb-3 bg-white">
      <div className="flex items-center justify-between">
        <p className="text-base text-gray-900">بیمه به کالا اضافه شد</p>
        <InsuranceModal />
      </div>
      <div className="flex justify-end">
        <Button variant={"outline"} size={"xl"}>
          <div className="flex items-center gap-x-2">
            <Trash2 />
            <p>حذف بیمه</p>
          </div>
        </Button>
      </div>
    </div>
  );
}
