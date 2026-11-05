/**@format */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { mockInputGroupe } from "../../data/mock-contact";

import { Download } from "lucide-react";

export function FormInputGroupe() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="grid grid-cols-2 gap-x-5 gap-y-6">
        {mockInputGroupe.map((item) => (
          <div key={item.id} className="flex flex-col gap-y-2">
            <p className="text-base text-gray-900">{item.label}</p>
            <Input placeholder={item.text} className="h-12 px-4" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-base text-gray-900">متن پیام</p>
        <Input placeholder="پیام خود را وارد کنید." className="pb-20 pt-6 px-4" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5 border-3 border-dashed rounded-lg py-15">
        <p className="text-base text-gray-600">
          حداکثر ۵ تصویر حداکثر یک مگابایت،یک ویدیو MP4حداکثر ۵۰ مگابایت
        </p>
        <Button variant={"outline"} size={"xl"}>
          <div className="flex gap-x-2">
            <Download className="size-5" />
            <p>افزودن فایل</p>
          </div>
        </Button>
      </div>
    </div>
  );
}
