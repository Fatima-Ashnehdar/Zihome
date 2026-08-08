import mainPicture from "@public/pictures/cart/main-pic.png";

import { CircleAlert, MapPin, Truck, CalendarDays, CreditCard } from "lucide-react";

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

export const mockSelectTime = {
  title: "انتخاب ساعت ارسال",
  time: [
    { id: 1, clock: "امروز ۰۷ اردیبهشت - ۷  الی ۹" },
    { id: 2, clock: "امروز ۰۷ اردیبهشت - ۹  الی  ۱۲" },
    { id: 3, clock: "امروز ۰۷ اردیبهشت - ۱۲ الی ۱۵" },
    { id: 4, clock: "امروز ۰۷ اردیبهشت - ۱۵ الی ۱۸" },
  ],
};

export const mockSelectDay = {
  title: "انتخاب روز ارسال",
  days: [
    { id: 1, day: "چهارشنبه", date: 6, month: "فروردین" },
    { id: 2, day: "پنج شنبه", date: 7, month: "فروردین" },
    { id: 3, day: "جمعه", date: 8, month: "فروردین" },
    { id: 4, day: "شنبه", date: 9, month: "فروردین" },
    { id: 5, day: "یک شنبه", date: 10, month: "فروردین" },
    { id: 6, day: "دوشنبه", date: 11, month: "فروردین" },
    { id: 7, day: "سه شنبه", date: 12, month: "فروردین" },
  ],
};

export const mockSelectDeliveryTime = {
  title: "انتخاب ساعت ارسال",
  time: [
    { id: 1, clock: "۷ الی ۹" },
    { id: 2, clock: "۹ الی ۱۲" },
    { id: 3, clock: "۱۲ الی ۱۵" },
    { id: 4, clock: "۱۵ الی ۱۸" },
  ],
};

export const mockConclusion = {
  title: "سفارش در یک نگاه",
  description: [
    {
      id: 1,
      icon: <Truck className="size-5 text-gray-700" />,
      text: "ارسال عادی",
    },
    {
      id: 2,
      icon: <CalendarDays className="size-5 text-gray-700" />,
      text: "پنج شنبه ۰۷ فرودین  - بازه زمانی ۹ تا ۱۲",
    },
    {
      id: 3,
      icon: <CreditCard className="size-5 text-gray-700" />,
      text: "مبلغ قابل پرداخت: ۹۳.۵۷۵.۰۰۰ تومان",
    },
  ],
};

export const mockPaymentDetails = {
  title: "جزییات پرداخت",
  notice:
    "در صورتی که مبلغی از حساب شما کسر شده باشد نهایت تا ۷۲ ساعت آینده به حساب شما عودت داده خواهد شد. ",
  details: [
    { id: 1, name: "شماره پیگیری سفارش:", text: "۱۲۳۴۵۶۷۸۸۵۴" },
    { id: 2, name: "شیوه پرداخت:", text: "پرداخت آنلاین (بانک سامان)" },
    { id: 3, name: "وضعیت پرداخت:", text: "در انتظار واریز وجه" },
    { id: 4, name: "تاریخ:", text: " ۷ اردیبهشت ۱۴۰۴" },
  ],
};
