export function toRialMoney(price: number) {
  return price.toLocaleString("fa-IR", {
    currency: "IRR",
  });
}
