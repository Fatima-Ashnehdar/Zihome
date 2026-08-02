/**@format */

import { MapPin } from "lucide-react";
import { EditAddressModal } from "./modal/editAddress";

const address = {
  city: "استان تهران، شهر تهران",
  street: "خ پیروزی ،خ صد دستگاه ،کوچه قربانی ،پلاک ۳ واحد ۳",
  postalCode: 176567890,
  contactNumber: 9891234567,
};

export function Address() {
  return (
    <div className="flex justify-between border rounded-xl py-5 px-5 bg-white">
      <div className="flex gap-x-2">
        <MapPin className="size-5 text-gray-600" />
        <div className="flex flex-col gap-y-1">
          <p className="text-base text-gray-950">{address.city}</p>
          <p className="text-base text-gray-500 pt-1">{address.street}</p>
          <p className="text-base text-gray-500"> کد پستی {address.postalCode}</p>
          <p className="text-base text-gray-500">شماره تماس {address.contactNumber}</p>
        </div>
      </div>
      <div>
        <EditAddressModal />
      </div>
    </div>
  );
}
