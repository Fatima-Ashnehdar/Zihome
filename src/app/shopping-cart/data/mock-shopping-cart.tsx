import mainPicture from "../../../../public/pictures/shopping-cart/main-pic.png";

import { CircleAlert, MapPin, Truck } from "lucide-react";

export const mockTotalPrice = [
  { id: 1, name: "قیمت محصولات", price: 86000000, color: true },
  { id: 2, name: "هزینه بیمه", price: 7500000, color: true },
  { id: 3, name: "جمع کل", price: 93500000, color: true },
  { id: 4, name: "سود شما", price: 14000000, color: false },
];

export const mockProducts = [
  {
    id: 1,
    name: "پلوپز ۸ نفره پارس خزر مدل Tyan-181",
    color: "سفید",
    warranty: "گارانتی ۱۸ ماهه گلدیران",
    picture: mainPicture,
  },
];

export const mockShippingDetails = [
  {
    id: 1,
    name: "انتخاب روز ارسال",
    text: "با انتخاب آدرس، نوع ارسال مشخص میشود",
    icon: <CircleAlert className="text-pink-400 size-5" />,
  },
  {
    id: 2,
    name: "انتخاب ساعت ارسال",
    text: "با انتخاب آدرس، ساعت ارسال مشخص میشود",
    icon: <CircleAlert className="text-pink-400 size-5" />,
  },
  {
    id: 3,
    name: "مجموع هزینه ارسال",
    text: "با انتخاب آدرس، هزینه ارسال مشخص میشود",
    icon: <CircleAlert className="text-pink-400 size-5" />,
  },
];

export const mockDisabledTabs = [
  {
    id: 1,
    name: "ارسال اکسپرس و سریع",
    paragraph: "در کمترین زمان محصولات تحویل می شود",
    icon: <MapPin className="size-5 text-gray-300" />,
  },
  {
    id: 2,
    name: "ارسال عادی",
    paragraph: "در کمترین زمان محصولات تحویل می شود",
    icon: <Truck className="size-5 text-gray-300" />,
  },
];

export const mockYourAddress = [
  {
    id: 1,
    city: "استان تهران ،شهر تهران ",
    address: "بلوار فردوس غرب ، بهارشمالی،کوی نگین ،پلاک۲ واحد۱",
    postalCode: 176567890,
    contactNumber: 9891234567,
  },
  {
    id: 2,
    city: "استان تهران ،شهر تهران ",
    address: "خ پیروزی ،خ صد دستگاه ،کوچه قربانی ،پلاک ۳ واحد ۳",
    postalCode: 176567890,
    contactNumber: 9891234567,
  },
  {
    id: 3,
    city: "استان تهران ،شهر تهران ",
    address: "خ پیروزی ،خ صد دستگاه ،کوچه قربانی ،پلاک ۳ واحد ۳",
    postalCode: 176567890,
    contactNumber: 9891234567,
  },
];
