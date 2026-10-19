import { MapPin } from "lucide-react";

import picture from "@public/pictures/dashboard/map-pin.png";

export const addressInformation = {
  title: "آدرس ها",
  address: [
    {
      id: 1,
      icon: <MapPin className="size-5 text-gray-600" />,
      title: "استان تهران ،شهر تهران ",
      description: "خ پیروزی ،خ صد دستگاه ،کوچه قربانی ،پلاک ۳ واحد ۳",
      postalCode: "۱۷۶۵۶۷۸۹۰",
      contactNumber: "۰۹۱۲۳۴۵۶۷",
    },
    {
      id: 2,
      icon: <MapPin className="size-5 text-gray-600" />,
      title: "استان تهران ،شهر تهران ",
      description: "خ پیروزی ،خ صد دستگاه ،کوچه قربانی ،پلاک ۳ واحد ۳",
      postalCode: "۱۷۶۵۶۷۸۹۰",
      contactNumber: "۰۹۱۲۳۴۵۶۷",
    },
  ],
};

export const addressRegistration = {
  title: "آدرس ها",
  description: "هنوز آدرسی ثبت نکرده اید",
  picture: picture,
};
