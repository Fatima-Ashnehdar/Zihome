/**@format */

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import { ImageGalleryProps } from "../../types";

import { ImageGallerySwiper } from "./imageGallerySwiper";

const imageGalleryModal = {
  title: "گالری تصاویر",
};

export function ImageGallery({ picture }: ImageGalleryProps) {
  return (
    <Dialog>
      <DialogTrigger
        nativeButton={false}
        render={<Image alt="main-pic" src={picture} className="cursor-pointer w-[40%]" />}
      />
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>
            <p className="text-base text-gray-950 font-normal">{imageGalleryModal.title}</p>
          </DialogTitle>
          <Separator className="my-2" />
        </DialogHeader>
        <div className="flex justify-center">
          <ImageGallerySwiper />
        </div>
      </DialogContent>
    </Dialog>
  );
}
