import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token"); // or session cookie

  if (token) {
    redirect("/dashboard");
  }

  redirect("/auth/login");
}
