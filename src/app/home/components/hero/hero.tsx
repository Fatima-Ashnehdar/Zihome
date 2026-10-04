"use client";

/**@format */

import * as React from "react";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { mockHeroBanner } from "../../data/mock-home";

export function Hero() {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
    }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {mockHeroBanner.map((item) => (
          <CarouselItem key={item.id}>
            <CarouselItem key={item.id}>
              <div>
                <Image src={item.picture} alt="banner" className="w-full" />
              </div>
            </CarouselItem>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
