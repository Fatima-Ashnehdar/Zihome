/**@format */

import { mockContact } from "../../data/mock-contact";

export function InformationContactZiHome() {
  return (
    <div className="flex flex-col gap-y-5">
      {mockContact.map((item) => (
        <div key={item.id} className="flex gap-x-3">
          {item.icon}
          <div className="flex flex-col gap-y-2">
            <p className="text-base text-gray-900">{item.title}</p>
            <p className="text-sm text-gray-800">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
