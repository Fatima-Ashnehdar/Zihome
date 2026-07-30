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

import { Plus } from "lucide-react";

import { SelectBox } from "./selectBox";
import { AddressMapModal } from "./addressMap";

const addNewAddressModal = {
  title: "افزودن آدرس شما",
};

export function AddNewAddressModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"outline"} size={"xl"}>
              <div className="flex items-center gap-x-2">
                <Plus />
                <p>افزودن آدرس جدید</p>
              </div>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-4xl h-[80%]">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{addNewAddressModal.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col gap-y-7 overflow-y-scroll">
            <AddressMapModal />
            <div>
              <SelectBox />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-base text-gray-800">خیابان و کوچه</p>
              <Input placeholder="خیابان ..." className="h-10" />
            </div>
            <div className="flex items-center gap-x-5">
              <div className="w-full flex flex-col gap-y-2">
                <p className="text-base text-gray-800">پلاک</p>
                <Input placeholder="مثلا 23" className="h-10" />
              </div>
              <div className="w-full flex flex-col gap-y-2">
                <p className="text-base text-gray-800">واحد</p>
                <Input placeholder="مثلا 2" className="h-10" />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-base text-gray-800">کدپستی</p>
              <Input placeholder="10 رقمی باشد" className="h-10" />
            </div>
          </div>
          <DialogFooter>
            <div className="flex justify-start w-full my-3">
              <Button variant={"shoppingCard"} size={"xl"}>
                <p>تایید و ادامه</p>
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
