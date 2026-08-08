"use client";

/**@format */

import { ShoppingCartPag } from "./components/shopping-cart/ShoppingCartPag";
import { OrderDeliveryAddressPage } from "./components/order-delivery-address/orderDeliveryAddressPage";
import { Payment } from "./components/payment-result/payment";

import { useCartStore } from "./store/useCardStore";

export default function ShoppingCartPage() {
  const page = useCartStore((state) => state.page);

  return (
    <div dir="rtl" className="px-30 py-8 bg-nutral-50">
      {page === "shopping-cart" && <ShoppingCartPag />}
      {page === "order-delivery-address" && <OrderDeliveryAddressPage />}
      {page === "payment-result" && <Payment />}
    </div>
  );
}
