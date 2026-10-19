"use client";

import {
  Bell,
  Heart,
  Lock,
  MapPin,
  ShoppingCart,
  SquareArrowRightEnter,
  User,
  Wallet,
} from "lucide-react";

// import Link from "next/link";

// import { usePathname } from "next/navigation";
import { SidebarTitle } from "./title";

// const menu = [
//   { name: "کیف پول", href: "/dashboard/wallet", icon: <Wallet /> },
//   { name: "سفارش ها", href: "/dashboard/orders", icon: <ShoppingCart /> },
//   { name: "علاقه مندی ها", href: "/dashboard/favorites", icon: <Heart /> },
//   { name: "پیام ها", href: "/dashboard/notification", icon: <Bell /> },
//   { name: "آدرس ها", href: "/dashboard/addresses", icon: <MapPin /> },
//   { name: "تغییر رمز عبور", href: "/dashboard/change-password", icon: <Lock /> },
//   { name: "ویرایش پروفایل", href: "/dashboard/personal", icon: <User /> },
//   { name: "خروج", href: "/login", icon: <SquareArrowRightEnter /> },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <div className="sticky top-40 left-0 mt-[4%]">
//       <aside className=" hidden w-64 border bg-white lg:block  rounded-xl">
//         {/* <div className="flex h-16 items-center border-b px-6">
//         <h1 className="text-xl font-bold">MyDashboard</h1>
//       </div> */}
//         <SidebarTitle />
//         <nav className="flex flex-col gap-y-5 space-y-1 p-4">
//           {menu.map((item) => {
//             const active = pathname === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`flex items-center gap-x-3 rounded-lg px-6 py-3 text-sm font-medium ${
//                   active
//                     ? "bg-pink-50 text-gray-600 shadow-card-active"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//               >
//                 <span>{item.icon}</span>
//                 {item.name}
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>
//     </div>
//   );
// }

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "کیف پول", href: "/dashboard/wallet", icon: <Wallet className="size-5" /> },
  { name: "سفارش ها", href: "/dashboard/orders", icon: <ShoppingCart className="size-5" /> },
  { name: "علاقه مندی ها", href: "/dashboard/favorites", icon: <Heart className="size-5" /> },
  { name: "پیام ها", href: "/dashboard/notification", icon: <Bell className="size-5" /> },
  { name: "آدرس ها", href: "/dashboard/addresses", icon: <MapPin className="size-5" /> },
  { name: "تغییر رمز عبور", href: "/dashboard/change-password", icon: <Lock className="size-5" /> },
  { name: "ویرایش پروفایل", href: "/dashboard/personal", icon: <User className="size-5" /> },
  { name: "خروج", href: "/login", icon: <SquareArrowRightEnter className="size-5" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-22 right-[8%] hidden w-64 border rounded-xl bg-white lg:block">
      <SidebarTitle />
      <nav className="space-y-1 p-4">
        {menu.map((item) => {
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
