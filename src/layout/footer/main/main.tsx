/**@format */

import { Separator } from "@/components/ui/separator";

import { FooterAbout } from "./about";
import { FooterLink } from "./link";
import { FooterSymbols } from "./symbols";
import ScrollToTop from "./scrollToTop";

export function FooterMain() {
  return (
    <div className="flex flex-col gap-y-8 bg-[url('/pictures/layout/Subtract.png')] px-30 py-20 relative">
      <div className="flex items-center gap-x-[12%]">
        <ScrollToTop />
        <FooterAbout />
        <FooterLink />
      </div>
      <Separator />
      <FooterSymbols />
    </div>
  );
}
