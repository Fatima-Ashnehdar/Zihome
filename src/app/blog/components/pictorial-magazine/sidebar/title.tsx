/**@format */

import { mockMagazineSidebarTitle } from "@/app/blog/data/mock-blog";

export function SidebarTitle() {
  return (
    <div className="flex justify-center gap-x-2 py-4 border-b">
      {mockMagazineSidebarTitle.icon}
      <p className="text-sm text-gray-800">{mockMagazineSidebarTitle.title}</p>
    </div>
  );
}
