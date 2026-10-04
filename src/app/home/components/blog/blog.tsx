/**@format */

import { BlogList } from "./list";
import { BlogTitle } from "./title";

export function Blog() {
  return (
    <div className="flex flex-col gap-y-8">
      <BlogTitle />
      <BlogList />
    </div>
  );
}
