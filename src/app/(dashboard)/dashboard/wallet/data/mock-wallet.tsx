import picture from "@public/pictures/dashboard/transaction.png";
import successful from "@public/pictures/dashboard/successful.png";
import unsuccessful from "@public/pictures/dashboard/unsuccessful.png";
import resend from "@public/pictures/dashboard/resendcode.png";
import logo from "@public/pictures/dashboard/logo.png";

export const accountBalance = {
  title: "موجودی حساب",
  balance: 200000,
};
export const items = [
  { label: "همه موارد", value: null },
  { label: "نامشخص", value: "apple" },
  { label: "ناموفق", value: "banana" },
  { label: "موفق", value: "blueberry" },
  { label: "عودت وجه", value: "grapes" },
];

export const noTransaction = {
  title: "هیچ تراکنشی یافت نشد",
  picture: picture,
};

export const modalWalletActivation = {
  title: "فعال سازی کیف پول",
  picture: logo,
  description:
    "به منظور احراز هویت و فعال‌سازی کیف پول، کد تأیید به شماره همراه شما ارسال خواهد شد.",
};

export const modalTermsUseForWallet = {
  title: "شرایط استفاده از کیف پول",
  paragraphs: {
    title: "پرداخت سریع، ساده و امن در اپلیکیشن زی‌هوم",
    paragraph: [
      {
        id: 1,
        text: "در زی‌هوم، فرایند پرداخت طوری طراحی شده که بدون نیاز به خروج از اپلیکیشن، بتوانید خرید خود را به‌راحتی و با حداکثر امنیت انجام دهید. دیگر نیازی به وارد شدن به درگاه‌های بانکی جداگانه یا پر کردن اطلاعات تکراری نیست؛ همه‌چیز داخل خود اپلیکیشن انجام می‌شود، سریع، روان و بی‌دردسر.",
      },
      {
        id: 2,
        text: "با وارد کردن اطلاعات کارت بانکی‌تان، می‌توانید پرداخت را انجام دهید و این اطلاعات، تنها به‌صورت رمزنگاری‌شده و ایمن در اختیار بانک قرار می‌گیرند. در دفعات بعد، کارت‌هایی که قبلاً استفاده کرده‌اید به‌صورت خودکار نمایش داده می‌شوند تا فقط با یک انتخاب ساده، پرداخت را نهایی کنید. این فرایند باعث صرفه‌جویی در زمان و افزایش سرعت خریدهای شما می‌شود.",
      },
      {
        id: 3,
        text: "همچنین در کنار کارت‌های بانکی، می‌توانید از کیف پول اختصاصی خود در اپلیکیشن نیز استفاده کنید. کافی‌ست آن را یک‌بار شارژ کنید و از آن به‌عنوان روش پرداخت سریع و بدون نیاز به وارد کردن اطلاعات کارت بهره ببرید.",
      },
      {
        id: 4,
        text: "در صورتی که اطلاعات کارت شما تغییر کرده، به‌سادگی می‌توانید کارت جدید خود را اضافه کرده و جایگزین قبلی کنید",
      },
    ],
  },
};

export const modalVerificationCode = {
  title: "فعال سازی کیف پول",
  logo: logo,
  inputs: [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" },
    { id: 6, text: "6" },
  ],
};

export const modalSuccessful = {
  title: "فعال سازی کیف پول",
  logo: successful,
  text: "کیف پول شما فعال شد.",
  description:
    "حالا میتوانید به راحتی از موجودی کیف پول خود برای پرداخت های سریع و آسان در زی هوم استفاده کنید.",
};

export const modalUnSuccessful = {
  title: "فعال سازی کیف پول",
  logo: unsuccessful,
  text: "کیف پول شما فعال نشد.",
  description: "کد وارد شده صحیح نمی باشد ،برای تایید مجدد، درخواست کد جدید بدهید.",
};

export const modalResendCode = {
  title: "فعال سازی کیف پول",
  logo: resend,
  text: "کیف پول شما فعال نشد.",
  description: "مدت اعتبار این کد به پایان رسیده است ، لطفا کد جدید دریافت کنید.",
};

export const invoices = [
  {
    row: "۱",
    bank: "ملت",
    date: "۱۴۰۴/۰۳/۴",
    amount: 100000,
    status: "نامشخص",
  },
  {
    row: "۲",
    bank: "پارسیان",
    date: "۱۴۰۴/۰۳/۴",
    amount: 100000,
    status: "ناموفق",
  },
  {
    row: "۳",
    bank: "سامان",
    date: "۱۴۰۴/۰۳/۴",
    amount: 100000,
    status: "موفق",
  },
  {
    row: "۴",
    bank: "ملت",
    date: "۱۴۰۴/۰۳/۴",
    amount: 100000,
    status: "عودت وجه",
  },
];

export const statusStyles: Record<string, string> = {
  نامشخص: "bg-cream-100 text-red-600",
  ناموفق: "bg-red-100 text-red-600",
  موفق: "bg-green-100 text-green-600",
  "عودت وجه": "bg-gray-50 text-gray-600",
};

export const transactionTitle = {
  title: "تاریخچه تراکنش ها و درخواست ها",
};

export const modalIncreaseBalance = {
  title: "افزایش موجودی",
  description: "مبلغ موردنظر جهت افزایش موجودی را وارد کنید.",
  note: "مبلغ وارد شده باید ۱۰۰.۰۰۰ تا ۲۰۰.۰۰۰.۰۰۰ ریال باشد.",
  price: [
    { id: 1, number: 5000000 },
    { id: 2, number: 1000000 },
    { id: 3, number: 200000 },
  ],
};
