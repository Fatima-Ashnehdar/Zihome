/** @format */

import { ProductCardProps } from "../types";
import { toRialMoney } from "../utils";

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-2 max-w-sm ">
      <div className="size-64">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={name}
          width={100}
          height={100}
        />
      </div>
      <h3>{name}</h3>
      <p>{toRialMoney(price)}</p>
    </div>
  );
}
