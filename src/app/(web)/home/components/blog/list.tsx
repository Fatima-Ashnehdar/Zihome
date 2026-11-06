/**@format */

import { mockBlog } from "../../data/mock-home";

import { BlogCard } from "./card";

export function BlogList() {
  return (
    <div
      className="flex gap-x-3 xl:gap-x-6 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0
        scrollbar [&::-webkit-scrollbar]:hidden md:overflow-visible"
    >
      {mockBlog.blog.map((product) => (
        <div
          key={product.id}
          className="snap-start shrink-0 w-38 xs:w-[35%] md:w-[30%] md:contents"
        >
          <BlogCard {...product} />
        </div>
      ))}
    </div>
  );
}
