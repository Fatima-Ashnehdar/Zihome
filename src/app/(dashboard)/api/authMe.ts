import axios from "axios";
import { cookies } from "next/headers";

export async function authMe() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const { data } = await axios.get("http://localhost:3000/api/v1/auth/me", {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  return data.data.phone;
}
