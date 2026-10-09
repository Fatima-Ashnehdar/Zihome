/**@format */

import { mockContentList } from "../../data/mock-blog";

import { ContentCard } from "./card";
import { ContentTitle } from "./title";

export function ContentList() {
  return (
    <div className="grid grid-cols-3 gap-y-7 mt-20">
      <ContentTitle />
      {mockContentList.map((item) => (
        <ContentCard key={item.id} {...item} />
      ))}
    </div>
  );
}
