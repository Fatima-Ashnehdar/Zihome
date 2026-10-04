import picture1 from "@public/pictures/home/pic.png";
import picture2 from "@public/pictures/home/pic-1.png";
import picture3 from "@public/pictures/home/pic-2.png";
import picture4 from "@public/pictures/home/picture-1.png";
import picture5 from "@public/pictures/home/picture-2.png";
import picture6 from "@public/pictures/home/picture-3.png";
import picture7 from "@public/pictures/home/picture-4.png";

import image1 from "@public/pictures/home/image-1.png";
import image2 from "@public/pictures/home/image-2.png";
import image3 from "@public/pictures/home/image-3.png";
import image4 from "@public/pictures/home/image-4.png";

import banner1 from "@public/pictures/home/banner-1.png";
import banner2 from "@public/pictures/home/banner-2.png";
import banner3 from "@public/pictures/home/banner-3.png";

import frame1 from "@public/pictures/home/frame-1.png";
import frame2 from "@public/pictures/home/frame-2.png";
import frame3 from "@public/pictures/home/frame-3.png";
import frame4 from "@public/pictures/home/frame-4.png";

import { ArrowLeft } from "lucide-react";

export const mockProposal = [
  {
    id: 1,
    score: "۴.۳",
    title: "قهوه ساز دلونگی",
    model: "N-lITE 203 aIRlINKS",
    discount: "۳۰٪",
    picture: picture1,
    previousPrice: 2400000,
    currentPrice: 1640000,
  },
  {
    id: 2,
    score: "۴.۳",
    title: "استند چوبی آشپزخانه",
    model: "N-lITE 203 aIRlINKS",
    discount: "۳۰٪",
    picture: picture2,
    previousPrice: 2400000,
    currentPrice: 1640000,
  },
  {
    id: 3,
    score: "۴.۳",
    title: "مبل دونفره سپنتا",
    model: "Sepanta-01-NDF",
    discount: "۳۰٪",
    picture: picture3,
    previousPrice: 2400000,
    currentPrice: 1640000,
  },
];

export const mockCategory = {
  title: "دسته بندی محصولات",
  category: [
    { id: 1, title: "دکوراسیون", picture: image1 },
    { id: 2, title: "لوازم آشپزخانه", picture: image2 },
    { id: 3, title: "نور و روشنایی", picture: image3 },
    { id: 4, title: "لوازم برقی", picture: image4 },
  ],
};

export const mockHeroBanner = [
  { id: 1, picture: banner1 },
  { id: 2, picture: banner2 },
  { id: 3, picture: banner3 },
];

export const mockBanner = {
  title: "کاملترین کالکشن ابزار آشپزخانه",
  paragraph: "آشپزخانه ات را با سبک زی هوم تکمیل کن",
};

export const mockBestSelling = {
  title: "پرفروش ترین محصولات",
  products: [
    {
      id: 1,
      title: "یخچال فریزر امرسان",
      score: "۴.۳",
      model: "N-lITE 203 aIRlINKS",
      discount: "۳۰٪",
      previousPrice: 2400000,
      currentPrice: 1640000,
      picture: picture4,
    },
    {
      id: 2,
      title: "قهوه ساز نسپرسو",
      score: "۴.۳",
      model: "N-lITE 203 aIRlINKS",
      discount: "۳۰٪",
      previousPrice: 2400000,
      currentPrice: 1640000,
      picture: picture5,
    },
    {
      id: 3,
      title: "ست بشقاب سرامیکی سرو",
      score: "۴.۳",
      model: "Plate-Ceramic-0048",
      discount: "۳۰٪",
      previousPrice: 2400000,
      currentPrice: 1640000,
      picture: picture6,
    },
    {
      id: 4,
      title: "سرخ کن بدون روغن",
      score: "۴.۳",
      model: "N-lITE 203 aIRlINKS",
      discount: "۳۰٪",
      previousPrice: 2400000,
      currentPrice: 1640000,
      picture: picture7,
    },
  ],
};

export const mockBlog = {
  title: "خواندنی ها",
  blog: [
    {
      id: 1,
      question: "چه رنگهایی در اتاق خواب کاربرد دارد؟",
      description: "انتخاب رنگ برای اتاق خواب بستگی به سلیقه‌ی شخص...",
      date: "۹ آذر ۱۴۰۳",
      icon: <ArrowLeft className="size-5 text-gray-600" />,
      picture: frame1,
    },
    {
      id: 2,
      question: "چه رنگهایی در اتاق خواب کاربرد دارد؟",
      description: "انتخاب رنگ برای اتاق خواب بستگی به سلیقه‌ی شخص...",
      date: "۹ آذر ۱۴۰۳",
      icon: <ArrowLeft className="size-5 text-gray-600" />,
      picture: frame2,
    },
    {
      id: 3,
      question: "فرش ایرانی در خانه مدرن",
      description: "فرش ایرانی یکی از ارزشمندترین و معروف‌ترین صنایع ",
      date: "۹ آذر ۱۴۰۳",
      icon: <ArrowLeft className="size-5 text-gray-600" />,
      picture: frame3,
    },
    {
      id: 4,
      question: "مقایسه برند های خاص  ماشین ظرفشویی ",
      description: "ماشین ظرفشویی یکی از وسایل کاربردی در آشپزخانه ا",
      date: "۹ آذر ۱۴۰۳",
      icon: <ArrowLeft className="size-5 text-gray-600" />,
      picture: frame4,
    },
  ],
};
