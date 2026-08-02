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
import { Checkbox } from "@/components/ui/checkbox";

import { MapPin, Search } from "lucide-react";

import picture from "@public/pictures/shopping-cart/pic- loction.png";

import Image from "next/image";

import { EditAddressModal } from "./editAddress";

import { useModalStore } from "@/app/shopping-cart/store/useModalStore";

const confirmAddressInformation = {
  title: "تایید اطلاعات آدرس",
  address: "بلوار فردوس غرب ، بهارشمالی،کوی نگین ،پلاک۲ واحد۱",
};

export function ConfirmAddressInformationModal() {
  const setPage = useModalStore((state) => state.setPage);

  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"shoppingCard"} size={"xl"}>
              <p>تایید و ادامه</p>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-4xl h-[80%]">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">
                {confirmAddressInformation.title}
              </p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col gap-y-8 overflow-y-scroll pt-1">
            <div className="relative">
              <Input placeholder="جستجو آدرس" className="h-11 pr-10" />
              <Search className="absolute top-3 right-4 size-4 text-gray-600" />
            </div>
            <Image alt="picture-map" src={picture} />
            <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
              <div className="flex items-center gap-x-2">
                <MapPin className="size-5 text-gray-600" />
                <p className="text-base text-gray-900">{confirmAddressInformation.address}</p>
              </div>
              <EditAddressModal />
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-base text-gray-900">تحویل گیرنده چه کسی است؟</p>
              <div className="flex gap-x-18">
                <div className="flex gap-x-2">
                  <Checkbox id="terms-checkbox-desc" name="terms-checkbox-desc" defaultChecked />
                  <p className="text-sm text-gray-900">تحویل به خودم</p>
                </div>
                <div className="flex gap-x-2">
                  <Checkbox id="terms-checkbox-desc" name="terms-checkbox-desc" />
                  <p className="text-sm text-gray-900">تحویل به شخص دیگر</p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div>
                <p className="text-base text-gray-900">نام و نام خانوادگی تحویل گیرنده</p>
                <Input className="h-11 mt-2" placeholder="مثلا ساره حسینی" />
              </div>
              <div>
                <p className="text-base text-gray-900">شماره همراه</p>
                <Input className="h-11 mt-2" placeholder="09124981298" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant={"outline"} size={"xl"} className="w-[50%]">
              <p>انصراف</p>
            </Button>
            <Button
              variant={"shoppingCard"}
              size={"xl"}
              className="w-[50%]"
              onClick={() => setPage("show")}
            >
              <p>ذخیره آدرس</p>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
