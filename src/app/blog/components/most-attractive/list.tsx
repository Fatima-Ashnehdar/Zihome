/**@format */

import { mockAttractiveList } from "../../data/mock-blog";

import { AttractiveCard } from "./card";

export function AttractiveList() {
  return (
    <div className="flex flex-col gap-y-5.5">
      {mockAttractiveList.map((item) => (
        <AttractiveCard key={item.id} {...item} />
      ))}
    </div>
  );
}
