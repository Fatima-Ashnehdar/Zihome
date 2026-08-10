/**@format */

import { HeaderDiscount } from "./discount";
import { HeaderLinks } from "./links";
import { HeaderMain } from "./main/main";

export function Header() {
  return (
    <div dir="rtl" className="fixed z-10 w-full">
      <HeaderDiscount />
      <HeaderMain />
      <HeaderLinks />
    </div>
  );
}
