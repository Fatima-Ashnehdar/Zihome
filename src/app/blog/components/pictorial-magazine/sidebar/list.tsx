/**@format */

import { mockAttractiveList } from "../../../data/mock-blog";

import { SidebarCard } from "./card";

export function SidebarList() {
  return (
    <div className="flex flex-col gap-y-5.5">
      {mockAttractiveList.map((item) => (
        <SidebarCard key={item.id} {...item} />
      ))}
    </div>
  );
}
