import {
  Heart,
  Menu,
  Sparkles,
  Star,
  Trophy,
  CircleCheck,
  Truck,
  Armchair,
  Bath,
  Box,
  BrickWall,
  Lamp,
  Microwave,
  Tag,
  Trees,
  Wallpaper,
  Wrench,
  ChevronLeft,
} from "lucide-react";

import linkedin from "@public/pictures/layout/linkedin.png";
import twitter from "@public/pictures/layout/twitter.png";
import youtube from "@public/pictures/layout/youtube.png";
import instagram from "@public/pictures/layout/insta.png";
import logo from "@public/pictures/layout/logo.png";
import symbol1 from "@public/pictures/layout/symbol-1.png";
import symbol2 from "@public/pictures/layout/symbol-2.png";
import symbol3 from "@public/pictures/layout/symbol-3.png";
import line from "@public/pictures/layout/Line.png";

export const mockFooterLinks = [
  {
    title: "محصولات",
    link: [
      { id: 1, text: "مبلمان" },
      { id: 2, text: "دکوراسیون" },
      { id: 3, text: "لوازم آشپزخانه" },
      { id: 4, text: "ابزار خانه" },
      { id: 5, text: "سرویس خواب" },
    ],
  },
  {
    title: "خدمات مشتریان",
    link: [
      { id: 1, text: "پیگیری سفارش" },
      { id: 2, text: "شرایط و قوانین" },
      { id: 3, text: "روش های ارسال" },
      { id: 4, text: "سوالات متداول" },
    ],
  },
  {
    title: "درباره ما",
    link: [
      { id: 1, text: "معرفی فروشگاه" },
      { id: 2, text: "تماس با ما" },
      { id: 3, text: "همکاری با ما" },
      { id: 4, text: "وبلاگ" },
    ],
  },
];

export const mockFooterSymbols = [
  { id: 1, logo: symbol1 },
  { id: 2, logo: symbol2 },
  { id: 3, logo: symbol3 },
];

export const mockFooterFeature = [
  {
    id: 1,
    title: "ارسال سریع",
    text: "در کمترین زمان ممکن",
    icon: <Truck className="size-7 text-gray-500" />,
    border: line,
  },
  {
    id: 2,
    title: "ضمانت بازگشت کالا",
    text: "حداکثر ۱۰ روز کاری",
    icon: <CircleCheck className="size-7 text-gray-500" />,
    border: line,
  },
  {
    id: 3,
    title: "اصالت کالا",
    text: "از بهترین برندها",
    icon: <Box className="size-7 text-gray-500" />,
  },
];

export const mockAbout = {
  title: "درباره زی هوم",
  paragraphLines: [
    {
      id: 1,
      text: "فروشگاه ما با ارایه مجموعه ای متنوع از محصولات خانه، تجربه ای آسان و مطمئن برای",
      color: "text-gray-900 text-sm",
    },
    {
      id: 2,
      text: "خرید آنلاین فراهم کرده است. با ضمانت کیفیت، ارسال سریع و پشتیبانی حرفه ای، همراه",
      color: "text-gray-600 text-sm",
    },
    {
      id: 3,
      text: "شما هستیم.برای کسب اطلاعات بیشتر درباره خدمات و شرایط فروش،کلیک کنید.",
      color: "text-gray-300 text-sm",
    },
  ],
  picture: logo,
  text: "همراه ما باشید",
  phoneNumber: 44349867,
};

export const mockLogoApp = [
  { id: 1, logo: youtube },
  { id: 2, logo: instagram },
  { id: 3, logo: twitter },
  { id: 4, logo: linkedin },
];

export const mockCopyRight = {
  title: " کلیه حقوق این سایت متعلق به شرکت آریا گستر ( فروشگاه زی هوم) می باشد.",
  text: "Zihome.com.2025 @ copyright",
};

export const mockHeaderDiscount = {
  title: "خرید بیش از یک میلیون تومان ارسال رایگان",
  sell: "فروش بهاره",
  discount: "50٪ تخفیف",
  free: "خدمات رایگان",
};

export const mockHeaderLinks = [
  {
    id: 1,
    title: "دسته بندی کالاها",
    icon: <Menu className="size-5 text-primary" />,
    color: true,
    hover: true,
  },
  {
    id: 2,
    title: "شگفت انگیزها",
    icon: <Sparkles className="size-5 text-gray-600" />,
    color: false,
    hover: false,
  },
  {
    id: 3,
    title: "ترند ترین",
    icon: <Star className="size-5 text-gray-600" />,
    color: false,
    hover: false,
  },
  {
    id: 4,
    title: "پرفروش ترین",
    icon: <Trophy className="size-5 text-gray-600" />,
    color: false,
    hover: false,
  },
  {
    id: 5,
    title: "محبوب ترین",
    icon: <Heart className="size-5 text-gray-600" />,
    color: false,
    hover: false,
  },
  { id: 6, title: "سوالات شما", color: false, hover: false },
];

export const mockTabsListMenu = [
  { id: 1, title: "مبلمان", value: "furniture", icon: <Armchair className="size-5" /> },
  { id: 2, title: "دکوراسیون داخلی", value: "decoration", icon: <Wallpaper className="size-5" /> },
  {
    id: 3,
    title: "لوازم آشپزخانه",
    value: "kitchenAppliances",
    icon: <Microwave className="size-5" />,
  },
  {
    id: 4,
    title: "سرویس خواب و حمام",
    value: "bathroomService",
    icon: <Bath className="size-5" />,
  },
  { id: 5, title: "نور پردازی و روشنایی", value: "lighting", icon: <Lamp className="size-5" /> },
  {
    id: 6,
    title: "لوازم سازماندهی",
    value: "organizingSupplies",
    icon: <Box className="size-5" />,
  },
  { id: 7, title: "ابزار و تجهیزات خانه", value: "tools", icon: <Wrench className="size-5" /> },
  { id: 8, title: "فضای باز و باغچه", value: "garden", icon: <Trees className="size-5" /> },
  { id: 9, title: "خدمات", value: "services", icon: <BrickWall className="size-5" /> },
  {
    id: 10,
    title: "محصولات ویژه",
    value: "specialProducts",
    icon: <Tag className="size-5" />,
  },
];

export const mockKitchenAppliances = {
  title: "همه لوازم آشپزخانه",
  icon: <ChevronLeft className="text-primary" />,
  category: [
    {
      id: 1,
      title: "سازماندهی آشپزخانه",
      icon: <ChevronLeft className="text-gray-600" />,
      links: [
        { id: 1, link: "نظم دهنده کابینت" },
        { id: 2, link: "شلف و کشو" },
      ],
    },
    {
      id: 2,
      title: "لوازم برقی آشپزخانه",
      icon: <ChevronLeft className="text-gray-600" />,
      links: [
        { id: 1, link: "پلوپز" },
        { id: 2, link: "ماکروویو" },
        { id: 3, link: "همزن و مخلوط کن" },
        { id: 4, link: "یخچال فریزر" },
      ],
    },
    {
      id: 3,
      title: "ظروف پخت و پز",
      icon: <ChevronLeft className="text-gray-600" />,
      links: [
        { id: 1, link: "سرویس قابلمه" },
        { id: 2, link: "زودپز" },
      ],
    },
    {
      id: 4,
      title: "ظروف پذیرایی",
      icon: <ChevronLeft className="text-gray-600" />,
      links: [
        { id: 1, link: "بشقاب و لیوان" },
        { id: 2, link: "سرویس چایخوری" },
        { id: 3, link: "سرویس چینی" },
      ],
    },
  ],
};
