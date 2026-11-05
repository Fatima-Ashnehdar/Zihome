import { ArrowLeft, Landmark, Sparkles, Sun } from "lucide-react";

import littlePicture from "@public/pictures/blog/little-picture.png";

import picture1 from "@public/pictures/blog/Frame.png";
import picture2 from "@public/pictures/blog/Frame-1.png";
import picture3 from "@public/pictures/blog/Frame-2.png";
import picture4 from "@public/pictures/blog/Frame-3.png";
import picture5 from "@public/pictures/blog/Frame-4.png";
import picture6 from "@public/pictures/blog/Frame-5.png";
import picture7 from "@public/pictures/blog/Frame-6.png";
import picture8 from "@public/pictures/blog/Frame-7.png";
import picture9 from "@public/pictures/blog/Frame-8.png";
import picture10 from "@public/pictures/blog/Frame-9.png";

import banner1 from "@public/pictures/blog/amazing-banner-1.png";
import banner2 from "@public/pictures/blog/amazing-banner-2.png";

import background from "@public/pictures/blog/layout-banner.png";

export const mockBlogTitle = {
  title: "زی هوم /",
  category: "خواندنی ها",
};

export const mockAttractiveTitle = {
  title: "جذاب ترین خواندنی ها",
  icon: <Sparkles className="size-4 text-gray-600" />,
};

export const mockMagazineSidebarTitle = {
  title: "مجله تصویری",
  icon: <Sun className="size-4 text-gray-600" />,
};

export const mockAttractiveList = [
  {
    id: 1,
    picture: littlePicture,
    title: "بررسی آخرین مدل ها...",
    time: "14 دقیقه قبل",
    visit: "122 بازدید",
  },
  {
    id: 2,
    picture: littlePicture,
    title: "بررسی آخرین مدل ها...",
    time: "14 دقیقه قبل",
    visit: "122 بازدید",
  },
  {
    id: 3,
    picture: littlePicture,
    title: "بررسی آخرین مدل ها...",
    time: "14 دقیقه قبل",
    visit: "122 بازدید",
  },
  {
    id: 4,
    picture: littlePicture,
    title: "بررسی آخرین مدل ها...",
    time: "14 دقیقه قبل",
    visit: "122 بازدید",
  },
];

export const mockContentList = [
  {
    id: 1,
    picture: picture1,
    title: "بررسی آخرین مدل های تلوزیون های هوشمند",
    paragraph: "تلویزیون هوشمند به تلویزیون‌هایی گفته می‌شود که ",
    data: "۹ آذر ۱۴۰۳",
    icon: <ArrowLeft className="text-gray-600 size-5" />,
  },
  {
    id: 2,
    picture: picture2,
    title: "مقایسه برند های خاص  ماشین ظرفشویی ",
    paragraph: "ماشین ظرفشویی یکی از وسایل کاربردی در آشپزخانه ا",
    data: "۹ آذر ۱۴۰۳",
    icon: <ArrowLeft className="text-gray-600 size-5" />,
  },
  {
    id: 3,
    picture: picture3,
    title: "بررسی آخرین مدل های تلوزیون های هوشمند",
    paragraph: "تلویزیون هوشمند به تلویزیون‌هایی گفته می‌شود که",
    data: "۹ آذر ۱۴۰۳",
    icon: <ArrowLeft className="text-gray-600 size-5" />,
  },
  {
    id: 4,
    picture: picture4,
    title: "بررسی آخرین مدل های تلوزیون های هوشمند",
    paragraph: "تلویزیون هوشمند به تلویزیون‌هایی گفته می‌شود که ",
    data: "۹ آذر ۱۴۰۳",
    icon: <ArrowLeft className="text-gray-600 size-5" />,
  },
  {
    id: 5,
    picture: picture5,
    title: "بررسی آخرین مدل های تلوزیون های هوشمند",
    paragraph: "لویزیون هوشمند به تلویزیون‌هایی گفته می‌شود که ",
    data: "۹ آذر ۱۴۰۳",
    icon: <ArrowLeft className="text-gray-600 size-5" />,
  },
  {
    id: 6,
    picture: picture6,
    title: "فرش ایرانی در خانه مدرن",
    paragraph: "فرش ایرانی یکی از ارزشمندترین و معروف‌ترین صنایع ",
    data: "۹ آذر ۱۴۰۳",
    icon: <ArrowLeft className="text-gray-600 size-5" />,
  },
  {
    id: 7,
    picture: picture7,
    title: "بررسی آخرین مدل های تلوزیون های هوشمند",
    paragraph: "لویزیون هوشمند به تلویزیون‌هایی گفته می‌شود که ",
    data: "۹ آذر ۱۴۰۳",
    icon: <ArrowLeft className="text-gray-600 size-5" />,
  },
  {
    id: 8,
    picture: picture8,
    title: "چه رنگهایی در اتاق خواب کاربرد دارد؟",
    paragraph: "نتخاب رنگ برای اتاق خواب بستگی به سلیقه‌ی شخص",
    data: "۹ آذر ۱۴۰۳",
    icon: <ArrowLeft className="text-gray-600 size-5" />,
  },
  {
    id: 9,
    picture: picture9,
    title: "چه رنگهایی در اتاق خواب کاربرد دارد؟",
    paragraph: "انتخاب رنگ برای اتاق خواب بستگی به سلیقه‌ی شخص",
    data: "۹ آذر ۱۴۰۳",
    icon: <ArrowLeft className="text-gray-600 size-5" />,
  },
];

export const mockAmazingBanner = [
  {
    id: 1,
    picture: banner1,
    title: "شگفت انگیـــــــــــــــــــــــزها",
    text: "دکوراسیون منزل",
    paragraph: "محصولات چوبینه زی هوم",
    description: "فرصت باقی مانده خرید شگفت انگیزت",
    icon: <Landmark className="text-white" />,
  },
  {
    id: 2,
    picture: banner2,
    title: "شگفت انگیـــــــــــــــــــــــزها",
    text: "خانه و آشپزخانه",
    paragraph: "لوازم برقی خانگی از بهترین برندها",
    icon: <Landmark className="text-white" />,
    description: "فرصت باقی مانده خرید شگفت انگیزت",
  },
];

export const mockMagazineBlog = {
  title: "فرش ایرانی در خانه مدرن",
  description:
    "فرش ایرانی یکی از هنرهای دستی و اصیل ایران است که به دلیل طراحی‌های پیچیده و استفاده از مواد باکیفیت، شهرت جهانی دارد. این فرش‌ها نمادی از فرهنگ، تاریخ و مهارت‌های بافندگان ایرانی هستند و در طرح‌ها، رنگ‌ها و ابعاد مختلف برای استفاده در منازل و دکوراسیون‌های مختلف تولید می‌شوند.",
  data: "۹ آذر ۱۴۰۳",
  picture: picture10,
};

export const mockLayoutBanner = {
  title: "آشپزخونه ، قلب خونه",
  text: "چیدمان به سبک زی هوم",
  picture: background,
};
