/**@format */

import { mockCopyRight } from "../data/mockLayout";

export function FooterCopyRight() {
  return (
    <div className="flex justify-between items-center bg-gray-900 px-30 py-4">
      <p className="text-sm text-gray-300">{mockCopyRight.title}</p>
      <p className="text-sm text-gray-300">{mockCopyRight.text}</p>
    </div>
  );
}
