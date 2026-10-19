/**@format */

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { modalTermsUseForWallet } from "../../data/mock-wallet";

export function ModalTermsUseForWallet() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          className="w-full"
          render={
            <Button variant={"ghost"}>
              <p className="text-blue-600">شرایط استفاده از کیف پول</p>
            </Button>
          }
        />
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>
              <p className="text-base text-gray-950 font-normal">{modalTermsUseForWallet.title}</p>
            </DialogTitle>
            <Separator className="my-2" />
          </DialogHeader>
          <div className="flex flex-col gap-y-3 px-5">
            <p className="text-base text-gray-900">{modalTermsUseForWallet.paragraphs.title}</p>
            {modalTermsUseForWallet.paragraphs.paragraph.map((item) => (
              <p key={item.id} className="text-sm text-gray-700 ">
                {item.text}
              </p>
            ))}
          </div>
          <Separator />
        </DialogContent>
      </form>
    </Dialog>
  );
}
