/**@format */

import { Phone } from "lucide-react";

import { mockInformationTitle } from "../../data/mock-contact";

export function InformationTitle() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <p className="text-lg text-gray-900 font-bold">{mockInformationTitle.title}</p>
      <p className="text-base text-gray-800">{mockInformationTitle.text}</p>
      <div className="flex gap-x-2">
        <p className="text-xs text-gray-600">{mockInformationTitle.phone}</p>
        <Phone className="size-3 text-gray-600" />
      </div>
    </div>
  );
}
