import { Headset, Mail, MapPin } from "lucide-react";

import youtube from "@public/pictures/contact/youtube.png";
import insta from "@public/pictures/contact/insta.png";
import twitter from "@public/pictures/contact/twitter.png";
import linkedin from "@public/pictures/contact/linkedin.png";

export const mockContactZiHome = {
  name: "زی هوم",
  category: "/ تماس با  زی هوم",
  title: "با زی هوم در ارتباط باشید",
  text: "ما همیشه آماده پاسخگویی به سوالات شما هستیم . اگر درباره محصولات ، نحوه خرید ، ارسال سفارش یا هر موضوع دیگری سوالی دارید ، تیم پشتیبانی زی هوم در کنار شماست.با  ما از طریق فرم تماس زیر تماس بگیرید و همچنین میتوانید به آدرس ZIHOME@.com ایمیل بزنید یا از طریق واتس آپ ما در گوشه سمت راست پایین این صفحه با ما چت کنید.ما قصد داریم ظرف 1-2 روز کاری به شما پاسخ دهیم رضایت شما الویت ماست .",
};

export const mockFormTitle = {
  title: " فرم تماس زی هوم",
  description: "لطفا قبل از تماس یا ارسال ایمیل ، ابتدا سوالات متداول را مشاهده کنید.",
};

export const mockInputGroupe = [
  { id: 1, label: "موضوع", text: "موضوع خود را انتخاب کنید" },
  { id: 2, label: "شماره سفارش", text: "۱۲۳۲۳۴۵۶۷۸۹" },
  { id: 3, label: "نام و نام خانوادگی", text: "مهرآلا جلالی" },
  { id: 4, label: "ایمیل", text: "M.jalali@gamil.com" },
  { id: 5, label: "شماره تماس", text: "۰۹۱۲۳۴۵۶۷۸۹" },
];

export const mockContact = [
  { id: 1, title: "پشتیبانی ۲۴ ساعته", icon: <Headset />, text: "۰۲۱-۲۲۳۳۴۴۵۵" },
  { id: 2, title: "ایمیل", icon: <Mail />, text: "info@zihome.come" },
  {
    id: 3,
    title: "آدرس شعبه حضوری",
    icon: <MapPin />,
    text: "تهران، مجتمع تجاری تفریحی ایران مال، طبقه منفی ۳، واحد۳",
  },
];

export const mockSocialMedia = {
  title: "شبکه های اجتماعی",
  socialMedia: [
    { id: 1, icon: youtube },
    { id: 2, icon: insta },
    { id: 3, icon: twitter },
    { id: 4, icon: linkedin },
  ],
};

export const mockInformationTitle = {
  title: "زی هوم، همراه شما تا رسیدن به انتخابی ایده آل",
  text: "همین حالا با ما در تماس باشید",
  phone: "0214412356985",
};
