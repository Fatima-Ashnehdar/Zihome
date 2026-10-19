/**@format */

import { OrdersHistory } from "./components/history/history";
import { OrdersTitle } from "./components/title";

export default function DashboardOrders() {
  return (
    <div className="flex flex-col gap-y-5">
      <OrdersTitle />
      <OrdersHistory />
    </div>
  );
}
