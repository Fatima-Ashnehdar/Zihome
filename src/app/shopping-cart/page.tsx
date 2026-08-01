"use client";

/**@format */

import { ShoppingCartPage } from "./components/shopping-cart-page/ShoppingCartPage";
import { OrderDeliveryAddressPage } from "./components/order-delivery-address/orderDeliveryAddressPage";
import { Payment } from "./components/payment-result/payment";

import { useCartStore } from "./store/useCardStore";

export default function ShoppingCartHome() {
  const page = useCartStore((state) => state.page);

  return (
    <div dir="rtl" className="px-30 py-8 bg-nutral-50">
      {page === "shopping-cart" && <ShoppingCartPage />}
      {page === "order-delivery-address" && <OrderDeliveryAddressPage />}
      {page === "payment-result" && <Payment />}
    </div>
  );
}
