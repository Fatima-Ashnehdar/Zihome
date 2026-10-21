/**@format */

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

import { authMe } from "@/app/(dashboard)/api/authMe";

import { modalVerificationCode } from "../../data/mock-wallet";

import { ModalResult } from "./result";

export function ModalVerificationCode() {
  const phone = authMe();
  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"default"} size={"xl"} className="w-full">
              <p>قبول شرایط و ادامه</p>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-xl h-[60%]">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{modalVerificationCode.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col items-center gap-y-8 px-5 py-8">
            <Image src={modalVerificationCode.logo} alt="logo" />
            <div className="flex flex-col gap-y-4 px-15">
              <p className="text-sm text-gray-800 text-center">
                کد تایید به شماره {phone} ارسال شده است
              </p>
              <div className="flex flex-row-reverse gap-x-4">
                {modalVerificationCode.inputs.map((item) => (
                  <Input key={item.id} placeholder={item.text} className="text-center h-11" />
                ))}
              </div>
            </div>
          </div>
          <DialogFooter className="grid grid-cols-2 gap-x-4">
            <Button variant={"secondary"} size={"xl"} className="border border-gray-500 w-full">
              <p>انصراف</p>
            </Button>
            <ModalResult />
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
