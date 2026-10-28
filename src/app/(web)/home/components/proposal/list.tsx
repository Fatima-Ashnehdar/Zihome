/**@format */

import { mockProposal } from "../../data/mock-home";

import { ProposalCard } from "./card";

export function ProposalList() {
  return (
    <div className="flex gap-x-6">
      {mockProposal.map((product) => (
        <ProposalCard key={product.id} {...product} />
      ))}
    </div>
  );
}
