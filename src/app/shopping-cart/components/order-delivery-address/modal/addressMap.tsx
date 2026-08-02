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

import { Search } from "lucide-react";

import { ConfirmAddressInformationModal } from "./confirmAddressInformation";

import picture from "@public/pictures/shopping-cart/pic- loction.png";

import Image from "next/image";

const addressMapModal = {
  title: "آدرس جدید",
};

export function AddressMapModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"outline"} size={"xl"} className="w-full">
              <p>انتخاب آدرس با نقشه</p>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-4xl h-[80%]">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{addressMapModal.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col gap-y-4">
            <div className="relative">
              <Input placeholder="جستجو آدرس" className="h-11 pr-10" />
              <Search className="absolute top-3 right-4 size-4 text-gray-600" />
            </div>
            <Image alt="picture-map" src={picture} />
          </div>
          <DialogFooter>
            <Button variant={"outline"} size={"xl"} className="w-[50%]">
              <p>انصراف</p>
            </Button>
            <div className="w-[50%]">
              <ConfirmAddressInformationModal />
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
