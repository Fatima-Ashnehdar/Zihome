/** @format */

const introduction = {
  title: "معرفی",
  paragraph:
    "پلوپز ۸ نفره پارس خزر مدل Tyan-181 با توان مصرفی ۶۲۰ وات، دارای ظرف تفلون نچسب با ظرفیت ۱.۸ لیتر، درب شیشه‌ای پیرکس با سوپاپ خروج بخار، تایمر و ترموستات دقیق برای تنظیم حالت‌های مختلف پخت، بدنه فلزی با پوشش رنگ اپوکسی مقاوم در برابر حرارت، و قابلیت بخارپز کردن مواد غذایی است",
};

export function ProductIntroduction() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="bg-gray-50 rounded-2xl px-6 py-4">
        <p className="text-base text-gray-950">{introduction.title}</p>
      </div>
      <div className="border rounded-2xl px-6 py-4">
        <p className="text-base text-gray-800 leading-7">{introduction.paragraph}</p>
      </div>
    </div>
  );
}
