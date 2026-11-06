/**@format */

import { mockProposal } from "../../data/mock-home";

import { ProposalCard } from "./card";

export function ProposalList() {
  return (
    <div
      className="flex gap-x-3 gap-y-4 xl:gap-x-6 overflow-x-auto snap-x snap-mandatory pb-2
      scrollbar [&::-webkit-scrollbar]:hidden
      xs:grid xs:grid-cols-3 xs:overflow-visible xs:snap-none xs:pb-0 md:grid grid-cols-3"
    >
      {mockProposal.map((product) => (
        <div key={product.id} className="shrink-0 w-38 xs:w-full [&>a]:h-full">
          <ProposalCard {...product} />
        </div>
      ))}
    </div>
  );
}
