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

import { Minus } from "lucide-react";

import Image from "next/image";

import { authMe } from "@/app/(dashboard)/api/authMe";

import { modalWalletActivation } from "../../data/mock-wallet";

import { ModalTermsUseForWallet } from "./termsUseForWallet";
import { ModalVerificationCode } from "./verificationCode";

export function ModalWalletActivation() {
  const phone = authMe();

  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"fillDisable"} size={"xl"} className="w-[50%]">
              <div className="flex gap-x-2">
                <Minus />
                <p>برداشت موجودی</p>
              </div>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-xl h-[60%]">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{modalWalletActivation.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col items-center gap-y-5 px-15 py-3">
            <Image src={modalWalletActivation.picture} alt="logo" />
            <p className="text-sm text-gray-800">{phone}</p>
            <p className="text-sm text-gray-600 text-center">{modalWalletActivation.description}</p>
            <ModalTermsUseForWallet />
          </div>
          <DialogFooter>
            <div className="grid grid-cols-2 gap-x-3 w-full">
              <Button variant={"secondary"} size={"xl"} className="border border-gray-500 w-full">
                <p>انصراف</p>
              </Button>
              <ModalVerificationCode />
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
