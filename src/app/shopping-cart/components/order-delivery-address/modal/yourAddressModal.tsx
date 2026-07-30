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

import { mockYourAddress } from "@/app/shopping-cart/data/mock-shopping-cart";

import { MapPin, Plus } from "lucide-react";

import { AddNewAddressModal } from "./addNewAddress";
import { EditAddressModal } from "./editAddress";

import Image from "next/image";

import logo from "../../../../../../public/pictures/shopping-cart/map.png";

const yourAddressModal = {
  title: "آدرس های شما",
};

export function YourAddressModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"outline"} size={"xl"} className="w-full">
              <div className="flex items-center gap-x-3">
                <Plus className="size-5" />
                <p>برای تحویل سفارش، آدرس خود را ثبت کنید</p>
              </div>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-4xl h-[80%]">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{yourAddressModal.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>

          <div className="flex flex-col gap-y-5 overflow-y-scroll">
            {mockYourAddress.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border hover:border-primary rounded-xl px-5 py-5 cursor-pointer"
              >
                <div key={item.id} className="flex gap-x-2">
                  <MapPin className="size-5 text-gray-500" />
                  <div className="flex flex-col gap-y-3">
                    <p className="text-base text-gray-900 Pb-3">{item.city}</p>
                    <p className="text-sm text-gray-600">{item.address}</p>
                    <p className="text-sm text-gray-600">کد پستی {item.postalCode} </p>
                    <p className="text-sm text-gray-600">شماره تلفن {item.contactNumber}</p>
                  </div>
                </div>
                <EditAddressModal />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-y-5">
            <Image alt="picture-map" src={logo} className="w-[15%]" />
            <p className="text-base text-gray-800">هنوز آدرسی ثبت نکردید</p>
          </div>
          <DialogFooter>
            <div className="flex justify-start w-full my-3">
              <AddNewAddressModal />
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
