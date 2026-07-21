/** @format */

import { Descriptions } from "./components/descriptions/descriptions";
import { Warranty } from "./components/details/warranty";
import { Details } from "./components/details/details";
import { InsuranceDetails } from "./components/details/insurance";

export default function ProductDetails() {
  return (
    <div dir="rtl" className="flex flex-col gap-y-12 px-30 h-screen py-8 bg-nutral-50">
      <div className="flex gap-x-2">
        <p className="text-gray-500 text-base font-normal">
          زی هوم / خانه و آشپزخانه / ظروف پخت و پز /
        </p>
        <p className="text-gray-900 text-base font-normal">زودپز</p>
      </div>
      <div className="flex gap-x-6">
        <Details />
        <div className="flex flex-col gap-y-5 w-[40%]">
          <InsuranceDetails />
          <Warranty />
        </div>
      </div>
      <Descriptions />
    </div>
  );
}
