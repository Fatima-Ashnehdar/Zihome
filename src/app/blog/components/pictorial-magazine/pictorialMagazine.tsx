/**@format */

import { Magazine } from "./magazine";
import { MagazineSidebar } from "./sidebar/sidebar";
import { MagazineTitle } from "./title";

export function PictorialMagazine() {
  return (
    <div className="flex gap-x-7">
      <MagazineSidebar />
      <div className="flex flex-col gap-y-5 mt-2">
        <MagazineTitle />
        <Magazine />
      </div>
    </div>
  );
}
