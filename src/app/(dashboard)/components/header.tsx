import { authMe } from "../api/authMe";

export const mockDashboardTitle = {
  title: "زی هوم / پروفایل کاربری /",
};

export default function Header() {
  const phone = authMe();

  return (
    <header className="fixed w-full top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-[8%]">
      <div className="">
        <p className="text-base text-gray-700">{mockDashboardTitle.title}</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50">🔔</button>

        <div className="flex px-4 py-2.5 items-center justify-center rounded-lg bg-black text-sm font-medium text-white">
          {phone}
        </div>
      </div>
    </header>
  );
}
