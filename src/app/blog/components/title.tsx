/**@format */

import { mockBlogTitle } from "../data/mock-blog";

export function BlogTitle() {
  return (
    <div className="flex gap-x-1">
      <p className="text-base text-gray-600">{mockBlogTitle.title}</p>
      <p className="text-base text-gray-900">{mockBlogTitle.category}</p>
    </div>
  );
}
