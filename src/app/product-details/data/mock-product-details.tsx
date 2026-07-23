/** @format */

import { ChevronDown, ChevronLeft } from "lucide-react";
import { Angry, Frown, Laugh, Smile, SmilePlus } from "lucide-react";

import photo1 from "../../../../public/pictures/details/pic-62.png";
import photo2 from "../../../../public/pictures/details/pic-63.png";
import photo3 from "../../../../public/pictures/details/pic-64.png";
import photo4 from "../../../../public/pictures/details/pic-65.png";
import mainPhoto from "../../../../public/pictures/details/main-pic.png";

import image1 from "../../../../public/pictures/details/pic-58.png";
import image2 from "../../../../public/pictures/details/pic-59.png";
import image3 from "../../../../public/pictures/details/pic-60.png";
import image4 from "../../../../public/pictures/details/pic-61.png";

export const mockViewPoints = [
  {
    id: 1,
    name: "سارا عیدی",
    date: "۲۸ مهر ۱۴۰۳",
    score: 3.4,
    opinion:
      "کوچولو و جمع و جوره، ته دیگ خفنی ازش نگرفتم توی مدت تعیین شده خودش، باید مدت را طولانی تر و پر روغن تر بذارین. تنها ایراد پارس خزر نداشتن آبشن پخت با تاخیر هست و اگه بعد ۵۰ سال میتونست یه کم به روز بشه عالی میشد. قیمتش هم زیادی گرونه مثل چهارنفره هاست و فرقی نداره",
    answer: "پاسخ به این نظر",
    question: "این نظر  برای شما  مفید است ؟",
  },
  {
    id: 2,
    name: "سارا عیدی",
    date: "۲۸ مهر ۱۴۰۳",
    score: 3.4,
    opinion:
      "پلوپز پارس خزر واقعا عالی . دقیقا ۲ پیمانه برنج داخلش جا و پخته میشه ، برای دو نفر ولی سه نفر کم خوراک هم جواب میده . کیفیت پلوپز عالی بود. فقط تعجبم از دیجی کالا که هزینه بسته بندی رو میگیره ولی با همان کارتن و بسته بندی شرکت پارس خزر بسته رو ارسال میکنه .",
    answer: "پاسخ به این نظر",
    question: "این نظر  برای شما  مفید است ؟",
  },
  {
    id: 3,
    name: "سارا عیدی",
    date: "۲۸ مهر ۱۴۰۳",
    score: 3.4,
    opinion:
      "من حدود دوسال هست این پلو پز دارم برای افراد محرد و خانواده دو نفره بسیار کاربردی و خوبه👍",
    answer: "پاسخ به این نظر",
    question: "این نظر  برای شما  مفید است ؟",
  },
  {
    id: 4,
    name: "سارا عیدی",
    date: "۲۸ مهر ۱۴۰۳",
    score: 3.4,
    opinion:
      "خیلی ناز و کوچولو و نمکه ، خیلی وقته که پارس خزر امتحانشرو پس داده نیاز به گفتن نداره من پنکه ش رو سه ساله دارم عالی بوده این پلوپز رو هم دوست داشتم داشته باشم و خیلی ممنونم از دیجی کالا عزیزم که تخفیف عاالی گذاشت که تونستم منم یه دونه ازین پلوپزا بخرم ، خیلی با نمکه ، برای دو نفر پر خوراک و سه نفر کم خوراک اندازه میشه ، ممنونم از دیجی",
    answer: "پاسخ به این نظر",
    question: "این نظر  برای شما  مفید است ؟",
  },
];

export const mockQuestions = [
  {
    id: 1,
    question:
      "با سلام من فقط قابلمه داخل و دربش را میخوام موجود دارید خود دستگاهش را دادم ولی قابلمه اش و درش خرابه!",
    answer: "ثبت پاسخ جدید",
    icon: <ChevronLeft className="text-gray-600 size-3" />,
  },
  {
    id: 2,
    question: "سلام امکانش هست پرداخت اقساطی رو براش فعال کنید؟؟",
    answer: "مشاهده پاسخ های دیگر",
    icon: <ChevronDown className="text-gray-600 size-3" />,
  },
  {
    id: 3,
    question: "سلام میشه کیک داخلش درست کرد؟؟",
    answer: "مشاهده پاسخ های دیگر",
    icon: <ChevronDown className="text-gray-600 size-3" />,
  },
];

export const mockProductsSimilar = [
  {
    id: 1,
    photo: photo3,
    name: "اجاق گاز تکنو",
    score: 4.3,
    previousPrice: 2400000,
    currentPrice: 1640000,
    model: "N-LITL 203 aIRIINKS",
  },
  {
    id: 2,
    photo: photo1,
    name: "قهوه ساز نسپرسو",
    score: 4.3,
    previousPrice: 2400000,
    currentPrice: 1640000,
    model: "N-LITL 203 aIRIINKS",
  },
  {
    id: 3,
    photo: photo4,
    name: "ست بشقاب سرامیکی سرو",
    score: 4.3,
    previousPrice: 2400000,
    currentPrice: 1640000,
    model: "N-LITL 203 aIRIINKS",
  },
  {
    id: 4,
    photo: photo2,
    name: "سرخ کن بدون روغن",
    score: 4.3,
    previousPrice: 2400000,
    currentPrice: 1640000,
    model: "N-LITL 203 aIRIINKS",
  },
];

export const mockInsuranceModal = {
  title: "بیمه نامه",
  insuranceDetails: "جزئیات بیمه",
  description: "بیمه سامان بخش زیادی از خسارت حوادث زیر را جبران میکند:",
  attention: "توجه : این بیمه بلافاصله پس از نصب توسط تکنسین‌های گلدیران فعال می‌شود.",
  previousPrice: 95000,
  currentPrice: 75000,
  paragraphs: [
    {
      id: 1,
      text: "۱.آسیب‌های فیزیکی: مانند شکستگی صفحه‌نمایش تلویزیون، آسیب به لولای درب ماشین لباسشویی، یا خرابی قطعات داخلی.",
    },
    {
      id: 2,
      text: " ۲.آب‌دیدگی و نفوذ مایعات: شامل آسیب‌های ناشی از نفوذ آب یا رطوبت به دستگاه‌ها.​",
    },
    {
      id: 3,
      text: "۳.نوسانات برق شهری: خسارات ناشی از نوسانات برق که ممکن است به بردهای الکترونیکی یا سایر قطعات آسیب برساند.​",
    },
    { id: 4, text: "۴.حوادث طبیعی: مانند آتش‌سوزی، صاعقه، زلزله، طوفان و سیل." },
    { id: 5, text: "۵.سرقت با شکست حرز: در صورت سرقت دستگاه با وجود موانع ایمنی مناسب." },
  ],
};

export const mockShoppingCardModal = {
  title: "کالا به سبد خرید شما اضافه شد",
  name: "پلوپز ۸ نفره پارس خزر مدل Tyan-181",
  price: 86000000,
  color: "سفید",
  description:
    "باتوجه به بالا بودن ارزش کالا خریداری شده ،بیمه گلدیران برای شما۷۵.۰۰۰ تومان فعال شد.",
  addInsurance: "بیمه به کالا اضافه شده",
  image: mainPhoto,
};

export const mockViewPointModal = {
  title: "دیدگاه شما",
  scoreText: "لطفا به این کالا امتیاز دهید",
  Text: "متن دیدگاه",
  hideName: "عدم نمایش نام شما در دیدگاه",
};

export const mockProductScore = [
  { id: 1, icon: <Laugh className="text-gray-600 size-6" />, score: "عالی" },
  { id: 2, icon: <SmilePlus className="text-gray-600 size-6" />, score: "خوب" },
  { id: 3, icon: <Smile className="text-gray-600 size-6" />, score: "معمولی" },
  { id: 4, icon: <Angry className="text-gray-600 size-6" />, score: "ضعیف" },
  { id: 5, icon: <Frown className="text-gray-600 size-6" />, score: "بد" },
];

export const mockImagesGalleryModal = [
  { id: 1, src: mainPhoto },
  { id: 2, src: image1 },
  { id: 3, src: image2 },
  { id: 4, src: mainPhoto },
  { id: 5, src: image3 },
];

export const mockPicturesDetails = {
  mainPicture: mainPhoto,
  littlePictures: [
    {
      id: 1,
      picture: image1,
    },
    {
      id: 2,
      picture: image2,
    },
    {
      id: 3,
      picture: image3,
    },
    {
      id: 4,
      picture: image4,
    },
  ],
};
