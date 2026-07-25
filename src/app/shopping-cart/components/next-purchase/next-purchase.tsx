/**@format */

import { ShoppingCart } from "lucide-react";

const nextPurchase = {
  title: "لیست خرید بعدی شما خالی است!",
  paragraph:
    " محصولاتی که به سبد خرید اضافه کرده اید، اگر در حال حاضر به آن ها نیازی ندارید، می توانید به   لیست خرید بعدی منتقل کنید . هر زمان که بخواهید ، امکان بازگرداندن آن ها به سبد خرید و تکمیل   سفارش وجود دارد.",
};

export function NextPurchase() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-7 py-20">
      <ShoppingCart className="size-20 text-gray-200" />
      <p className="text-base text-gray-900">{nextPurchase.title}</p>
      <p className="text-sm text-gray-600">{nextPurchase.paragraph}</p>
    </div>
  );
}
