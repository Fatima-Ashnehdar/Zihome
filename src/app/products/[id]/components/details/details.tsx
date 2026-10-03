// "use client";

// import { useParams } from "next/navigation";
// /**@format */

// import { FeaturesDetails } from "./featureDetails";
// import { PicturesDetails } from "./picturesDetails";

// export function Details() {
//   const params = useParams();
//   const productId = params.id as string;

//   console.log("PRODUCT ID:", productId);
//   return (
//     <div className="flex border border-gray-200 rounded-2xl px-8 py-6 w-full bg-white">
//       <PicturesDetails />
//       <FeaturesDetails />
//     </div>
//   );
// }
"use client";

/** @format */

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { useProductIdStore } from "@/store/useProductStore";

import { ProductId } from "../../api/data";
import { FeaturesDetails } from "./featureDetails";
import { PicturesDetails } from "./picturesDetails";

export default function Details() {
  const product = useProductIdStore((state) => state.product);

  // const params = useParams();
  // const productId = params.id as string;

  // const [product, setProduct] = useState<any>(null);

  // useEffect(() => {
  //   if (!productId) return;

  //   ProductId(productId).then((data) => {
  //     setProduct(data);
  //   });
  // }, [productId]);

  // if (!product) {
  //   return <div>در حال بارگذاری...</div>;
  // }

  return (
    <div className="flex border border-gray-200 rounded-2xl px-8 py-6 w-full bg-white">
      <PicturesDetails />
      <FeaturesDetails />
    </div>
  );
}
