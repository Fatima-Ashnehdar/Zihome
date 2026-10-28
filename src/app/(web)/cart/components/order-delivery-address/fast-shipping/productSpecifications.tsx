/**@format */

import { Plane } from "lucide-react";

import { ProductDetails } from "../productDetails";

const productSpecifications = {
  title: "ارسال سریع محصولات",
  text: "تحویل سریع در کمتر از چند ساعت در روز جاری",
};

export function ProductSpecifications() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-3">
          <Plane className="text-gray-500" />
          <p className="text-base text-gray-800">{productSpecifications.title}</p>
        </div>
        <p className="text-sm text-gray-500 pr-9">{productSpecifications.text}</p>
      </div>
      <ProductDetails />
    </div>
  );
}
