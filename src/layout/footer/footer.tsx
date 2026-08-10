/**@format */

import { FooterCopyRight } from "./copyRight";
import { FooterMain } from "./main/main";

export function Footer() {
  return (
    <div dir="rtl" className="pt-[6%] bg-nutral-50">
      <FooterMain />
      <FooterCopyRight />
    </div>
  );
}
