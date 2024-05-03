import { redirect } from "next/navigation";
import LoginForm from "./_components/login-form";
import { createClient } from "@/utils/supabase/server";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div>
      <LoginForm searchParams={searchParams} />
    </div>
  );
}
