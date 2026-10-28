/**@format */

import { mockBlog } from "../../data/mock-home";

import { BlogCard } from "./card";

export function BlogList() {
  return (
    <div className="flex gap-x-6">
      {mockBlog.blog.map((product) => (
        <BlogCard key={product.id} {...product} />
      ))}
    </div>
  );
}
