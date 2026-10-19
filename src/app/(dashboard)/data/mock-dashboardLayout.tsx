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

export const dashboardTitle = {
  title: "زی هوم / پروفایل کاربری /",
};

export const sidebarMenu = [
  { name: "کیف پول", href: "/dashboard/wallet", icon: <Wallet className="size-5" /> },
  { name: "سفارش ها", href: "/dashboard/orders", icon: <ShoppingCart className="size-5" /> },
  { name: "علاقه مندی ها", href: "/dashboard/favorites", icon: <Heart className="size-5" /> },
  { name: "پیام ها", href: "/dashboard/notification", icon: <Bell className="size-5" /> },
  { name: "آدرس ها", href: "/dashboard/address", icon: <MapPin className="size-5" /> },
  { name: "تغییر رمز عبور", href: "/dashboard/change-password", icon: <Lock className="size-5" /> },
  { name: "ویرایش پروفایل", href: "/dashboard/edit-profile", icon: <User className="size-5" /> },
  { name: "خروج", href: "/login", icon: <SquareArrowRightEnter className="size-5" /> },
];

export const pageTitles: Record<string, string> = {
  "/dashboard/wallet": "کیف پول",
  "/dashboard/orders": "سفارش‌ ها",
  "/dashboard/favorites": "علاقه‌مندی‌ ها",
  "/dashboard/notification": "پیام‌ ها",
  "/dashboard/address": "آدرس‌ ها",
  "/dashboard/change-password": "تغییر رمز عبور",
  "/dashboard/edit-profile": "ویرایش پروفایل",
};
