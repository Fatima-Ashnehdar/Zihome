/**@format */

import { PopularTabs } from "./tabs";
import { PopularTitle } from "./title";

export function Popular() {
  return (
    <div className="flex flex-col gap-y-5">
      <PopularTitle />
      <PopularTabs />
    </div>
  );
}
