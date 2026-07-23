/**@format */

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { mockImagesGalleryModal } from "../../data/mock-product-details";
import Image from "next/image";

export function ImageGallerySwiper() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        direction: "rtl",
      }}
      className="w-full max-w-48 sm:max-w-xs md:max-w-xl py-6"
    >
      <CarouselContent>
        {mockImagesGalleryModal.map((image) => (
          <CarouselItem key={image.id} className="basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden border-gray-200">
                <CardContent className="flex aspect-square items-center justify-center p-2 relative w-full h-32 sm:h-60">
                  <Image src={image.src} alt="image-slider" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
