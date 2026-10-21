"use client";

/**@format */

import { usePathname } from "next/navigation";

import { pageTitles } from "../data/mock-dashboardLayout";

export function PageTitle() {
  const pathname = usePathname();
  const pageTitle = pageTitles[pathname] ?? "حساب کاربری";

  return (
    <div>
      <p className="text-base text-gray-700">{pageTitle}</p>
    </div>
  );
}
