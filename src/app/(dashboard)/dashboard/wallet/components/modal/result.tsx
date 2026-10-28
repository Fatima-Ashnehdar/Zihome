/**@format */

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

import { modalResendCode } from "../../data/mock-wallet";

export function ModalResult() {
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
              <p className="text-base text-gray-950 font-normal">{modalResendCode.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col items-center gap-y-6 px-8 py-6">
            <Image src={modalResendCode.logo} alt="logo-successful" />
            <div className="flex flex-col items-center gap-y-3">
              <p className="text-base text-yellow-600">{modalResendCode.text}</p>
              <p className="text-base text-gray-600 text-center">{modalResendCode.description}</p>
            </div>
          </div>
          <DialogFooter className="flex justify-center px-[25%]">
            <Button variant={"default"} size={"xl"} className="w-full">
              <div className="flex justify-center">
                <p>ارسال دوباره کد</p>
              </div>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
