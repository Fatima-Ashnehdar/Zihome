/**@format */

import { BlogList } from "./list";
import { BlogTitle } from "./title";

export function Blog() {
  return (
    <div className="flex flex-col gap-y-1 md:gap-y-3 xl:gap-y-5">
      <BlogTitle />
      <BlogList />
    </div>
  );
}
