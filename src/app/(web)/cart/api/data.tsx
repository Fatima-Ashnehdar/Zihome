import axios from "axios";

export async function addItem(data: {
  productId: string;
  color: string;
  quantity: number;
  hasInsurance: boolean;
}) {
  const response = await axios.post("http://localhost:3000/api/v1/cart/items", data, {
    withCredentials: true,
  });

  return response.data;
}
