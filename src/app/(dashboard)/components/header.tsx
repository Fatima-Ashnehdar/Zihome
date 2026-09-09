import { authMe } from "../api/authMe";

export default function Header() {
  const phone = authMe();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <p className="hidden text-sm text-gray-500 sm:block">Welcome back 👋</p>
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
