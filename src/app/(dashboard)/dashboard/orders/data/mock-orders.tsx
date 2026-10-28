import picture1 from "@public/pictures/dashboard/pic-1.png";
import picture2 from "@public/pictures/dashboard/pic-2.png";
import picture3 from "@public/pictures/dashboard/pic-3.png";
import picture4 from "@public/pictures/dashboard/pic-4.png";
import picture from "@public/pictures/dashboard/picture.png";

import { ShoppingCart } from "lucide-react";

export const mockOrdersTitle = [
  { id: 1, title: "تحویل شده", order: "۲ سفارش", picture: picture1 },
  { id: 2, title: "در حال ارسال", order: "۲ سفارش", picture: picture2 },
  { id: 3, title: "مرجوعی", order: "۲ سفارش", picture: picture3 },
  { id: 4, title: "لغو شده", order: "۲ سفارش", picture: picture4 },
];

export const mockOrdersHistory = {
  title: "تاریخچه سفارشات",
  icon: <ShoppingCart className="size-7 text-gray-500" />,
};

export const mockInvoices = [
  {
    row: "۱",
    orderNumber: "۱۱۲۳۴۵۶۷",
    date: "۱۴۰۴/۰۳/۴",
    amount: 100000,
    status: "در حال ارسال",
  },
  {
    row: "۲",
    orderNumber: "۱۱۲۳۴۵۶۷",
    date: "۱۴۰۴/۰۳/۴",
    amount: 100000,
    status: "لغو شده",
  },
  {
    row: "۳",
    orderNumber: "۱۱۲۳۴۵۶۷",
    date: "۱۴۰۴/۰۳/۴",
    amount: 100000,
    status: "تحویل شده",
  },
  {
    row: "۴",
    orderNumber: "۱۱۲۳۴۵۶۷",
    date: "۱۴۰۴/۰۳/۴",
    amount: 100000,
    status: "مرجوع شده",
  },
];

export const items = [
  { label: "همه موارد", value: null },
  { label: "تحویل شده", value: "apple" },
  { label: "در حال ارسال", value: "banana" },
  { label: "مرجوعی", value: "blueberry" },
  { label: "لغو شده", value: "grapes" },
];

export const statusStyles: Record<string, string> = {
  "در حال ارسال": "bg-cream-100 text-red-600",
  "لغو شده": "bg-red-100 text-red-600",
  "تحویل شده": "bg-green-100 text-green-600",
  "مرجوع شده": "bg-gray-50 text-gray-600",
};

export const historyNoOrders = {
  title: "هنوز سفارشی ثبت نکرده اید",
  picture,
};
