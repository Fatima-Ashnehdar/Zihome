"use client";

/**@format */

// StateManagement

import { useState } from "react";

import { ShoppingCartPage } from "./components/shopping-cart-page/ShoppingCartPage";
import { OrderDeliveryAddressPage } from "./components/order-delivery-address/orderDeliveryAddressPage";

export default function ShoppingCartHome() {
  const [page, setPage] = useState<string>("order-delivery-address");

  return (
    <div dir="rtl" className="px-30 h-screen py-8 bg-nutral-50">
      {page === "shopping-cart" && <ShoppingCartPage />}
      {page === "order-delivery-address" && <OrderDeliveryAddressPage />}
    </div>
  );
}
