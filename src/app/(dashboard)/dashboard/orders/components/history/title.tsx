/**@format */

import { mockOrdersHistory } from "../../data/mock-orders";

export function HistoryTitle() {
  return (
    <div className="flex gap-x-4">
      {mockOrdersHistory.icon}
      <p className="text-base text-gray-900">{mockOrdersHistory.title}</p>
    </div>
  );
}
