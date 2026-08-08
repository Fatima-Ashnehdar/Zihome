/**@format */

import { Truck } from "lucide-react";

import { ProductDetails } from "../productDetails";

const productSpecifications = {
  title: "ارسال عادی محصولات",
  text: "تحویل با امکان تعیین روز و زمان دلخواه شما",
};

export function ProductSpecifications() {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-3">
          <Truck className="text-gray-500" />
          <p className="text-base text-gray-800">{productSpecifications.title}</p>
        </div>
        <p className="text-sm text-gray-500 pr-9">{productSpecifications.text}</p>
      </div>
      <ProductDetails />
    </div>
  );
}
