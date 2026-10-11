/**@format */

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { ProductImageProps } from "../../types";

interface ImageGallerySwiperProps {
  images: ProductImageProps[];
}

export function ImageGallerySwiper({ images }: ImageGallerySwiperProps) {
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
        {images.map((image) => (
          <CarouselItem key={image.id} className="basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden border-gray-200">
                <CardContent className="flex aspect-square items-center justify-center p-2 relative w-full h-32 sm:h-60">
                  <Image width={300} height={100} src={image.url} alt="image-slider" />
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
