import axios from "axios";

export async function ProductId(id: string) {
  const { data } = await axios.get(`http://localhost:3000/api/v1/products/${id}`);
  return data.data;
}
