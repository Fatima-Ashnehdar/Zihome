/** @format */

export function ProductReview() {
  const review = {
    title: "بررسی تخصصی",
    paragraph:
      "پلوپز ۸ نفره پارس خزر مدل Tyan-181 با ظرفیت ۱.۸ لیتر و توان ۶۲۰ وات، انتخابی عالی برای خانواده‌های متوسط تا پرجمعیت است که امکان پخت برنج با ته‌دیگ طلایی و یکنواخت را فراهم می‌کند. این دستگاه دارای ترموستات دقیق، ظرف تفلون نچسب و درب شیشه‌ای مقاوم به حرارت است که شست‌وشو و استفاده راحت را تضمین می‌کند. همچنین با وجود سبد بخارپز، به عنوان یک پلوپز چندمنظوره برای پخت مواد غذایی سالم و متنوع عمل می‌کند.",
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="bg-gray-50 rounded-2xl px-6 py-4">
        <p className="text-base text-gray-950">{review.title}</p>
      </div>
      <div className="border rounded-2xl px-6 py-4">
        <p className="text-base text-gray-800 leading-7">{review.paragraph}</p>
      </div>
    </div>
  );
}
