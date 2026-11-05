/**@format */

import { mockAttractiveTitle } from "../../data/mock-blog";

export function MostAttractiveTitle() {
  return (
    <div className="flex justify-center gap-x-2 py-4 border-b">
      {mockAttractiveTitle.icon}
      <p className="text-sm text-gray-800">{mockAttractiveTitle.title}</p>
    </div>
  );
}
