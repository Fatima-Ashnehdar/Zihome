// /** @format */

// import { Descriptions } from "./components/descriptions/descriptions";
// import { Warranty } from "./components/details/warranty";
// import Details from "./components/details/details";
// import { InsuranceDetails } from "./components/details/insurance";
// import { ProductsSimilar } from "./components/products-similar/productsSimilar";

// export default function ProductDetails() {
//   return (
//     <div dir="rtl" className="flex flex-col gap-y-12 px-30 py-8 mt-[13%] bg-nutral-50">
//       <div className="flex gap-x-2">
//         <p className="text-gray-500 text-base font-normal">
//           زی هوم / خانه و آشپزخانه / ظروف پخت و پز /
//         </p>
//         <p className="text-gray-900 text-base font-normal">زودپز</p>
//       </div>
//       <div className="flex gap-x-6">
//         <Details />
//         <div className="flex flex-col gap-y-5 w-[40%]">
//           <InsuranceDetails />
//           <Warranty />
//         </div>
//       </div>
//       <ProductsSimilar />
//       <Descriptions />
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import { Descriptions } from "./components/descriptions/descriptions";
import { Warranty } from "./components/details/warranty";
import Details from "./components/details/details";
import { InsuranceDetails } from "./components/details/insurance";
import { ProductsSimilar } from "./components/products-similar/productsSimilar";
// import { ProductId } from "./api/data";
import { useParams } from "next/navigation";
import { useProductIdStore } from "@/store/useProductStore";

export default function ProductDetails() {
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
  const params = useParams<{ id: string }>();

  const fetchProduct = useProductIdStore((state) => state.fetchProduct);
  const product = useProductIdStore((state) => state.product);
  const loading = useProductIdStore((state) => state.loading);
  const error = useProductIdStore((state) => state.error);
  useEffect(() => {
    if (params.id) {
      fetchProduct(params.id);
    }
  }, [params.id, fetchProduct]);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div dir="rtl" className="flex flex-col gap-y-12 px-30 py-8 mt-[13%] bg-nutral-50">
      <div className="flex gap-x-2">
        <p className="text-gray-500 text-base font-normal">
          زی هوم / خانه و آشپزخانه / ظروف پخت و پز /
        </p>
        <p className="text-gray-500 text-base font-normal">{product?.category} /</p>
        <p className="text-gray-900 text-base font-normal">{product?.name}</p>
      </div>

      <div className="flex gap-x-6">
        <Details />
        <div className="flex flex-col gap-y-5 w-[40%]">
          <InsuranceDetails />
          <Warranty />
        </div>
      </div>
      <ProductsSimilar />
      <Descriptions />
    </div>
  );
}
