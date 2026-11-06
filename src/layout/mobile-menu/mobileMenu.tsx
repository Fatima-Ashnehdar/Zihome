"use client";

/**@format */

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mobileMenu } from "../data/mockLayout";

type Props = {
  isLoggedIn: boolean;
};

export function MobileMenu({ isLoggedIn }: Props) {
  const pathname = usePathname();

  return (
    <div className="fixed z-10 bottom-0 left-0 w-full bg-white border-t border-gray-100 flex justify-between lg:hidden px-[8%] py-1.5">
      {mobileMenu.map((item) => {
        const active = pathname === item.href;
        const href = item.id === 4 ? (isLoggedIn ? "/dashboard/wallet" : "/login") : item.href;
        return (
          <Link
            href={href}
            key={item.id}
            className={`flex flex-col items-center gap-y-1 ${active ? "text-[10px] sm:text-xs text-primary" : "text-[10px] sm:text-xs text-gray-400"}`}
          >
            {item.icon}
            <p>{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
