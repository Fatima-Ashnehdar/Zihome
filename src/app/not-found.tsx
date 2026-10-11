import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <p className="text-6xl font-bold text-gray-900">۴۰۴</p>
      <h1 className="text-xl font-medium text-gray-800">صفحه مورد نظر پیدا نشد</h1>
      <p className="text-sm text-gray-500">ممکن است آدرس اشتباه باشد یا صفحه حذف شده باشد.</p>
      <Link
        href="/"
        className="mt-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm text-white hover:bg-gray-800"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
