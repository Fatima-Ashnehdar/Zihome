/**@format */

import { Separator } from "@/components/ui/separator";

import { FooterAbout } from "./about";
import { FooterLink } from "./link";
import { FooterSymbols } from "./symbols";
import ScrollToTop from "./scrollToTop";

export function FooterMain() {
  return (
    <div className="flex flex-col gap-y-6 xs:gap-y-8 bg-gray-50 lg:bg-transparent lg:bg-[url('/pictures/layout/Subtract.png')] px-[8%] py-[6%] lg:py-20 relative">
      <div className="flex flex-col gap-y-8 xs:gap-y-10 lg:flex-row lg:items-center gap-x-[7%] 2xl:gap-x-[12%]">
        <ScrollToTop />
        <FooterAbout />
        <FooterLink />
      </div>
      <Separator />
      <FooterSymbols />
    </div>
  );
}
