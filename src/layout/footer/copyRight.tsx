/**@format */

import { mockCopyRight } from "../data/mockLayout";

export function FooterCopyRight() {
  return (
    <div className="flex flex-col gap-y-1 sm:flex-row justify-between items-center bg-gray-900 px-[8%] py-3 sm:py-4">
      <p className="text-[8px] xs:text-[10px] md:text-xs lg:text-sm text-gray-300">
        {mockCopyRight.title}
      </p>
      <p className="text-[8px] xs:text-[10px] md:text-xs lg:text-sm text-gray-300 text-end">
        {mockCopyRight.text}
      </p>
    </div>
  );
}
