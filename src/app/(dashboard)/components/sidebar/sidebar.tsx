"use client";

import { SidebarTitle } from "./title";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { sidebarMenu } from "../../data/mock-dashboardLayout";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-22 right-[8%] hidden w-64 border rounded-xl bg-white lg:block">
      <SidebarTitle />
      <nav className="space-y-1 p-4">
        {sidebarMenu.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                active
                  ? "bg-pink-50 text-gray-600 shadow-card-active"
                  : "text-gray-600 hover:text-primary"
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
