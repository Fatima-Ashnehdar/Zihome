"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: "⌂" },
  { name: "Users", href: "/dashboard/users", icon: "♙" },
  { name: "Orders", href: "/dashboard/orders", icon: "▣" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r bg-white lg:block">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-bold">MyDashboard</h1>
      </div>

      <nav className="space-y-1 p-4">
        {menu.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                active ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
