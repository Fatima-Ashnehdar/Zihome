/**@format */

import { ProposalList } from "./list";
import { Timer } from "./timer";

export function AmazingOfferCards() {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-4 md:flex md:flex-row gap-x-3 xl:gap-x-6 mt-[-15%] xs:mt-[-10%] xl:mt-[-7%] z-3">
      <Timer />
      <ProposalList />
    </div>
  );
}
