/**@format */

import { ProposalList } from "./list";
import { Timer } from "./timer";

export function AmazingOfferCards() {
  return (
    <div className="flex gap-x-6 mt-[-7%] z-3">
      <Timer />
      <ProposalList />
    </div>
  );
}
