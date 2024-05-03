"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { formSchema } from "../../schemas";

type IDataProps = {
  email: string;
  password: string;
};

export async function login(formData: IDataProps) {
  const supabase = createClient();

  const isValidData = formSchema.parse(formData);

  if (!isValidData) {
    redirect("/error");
  }

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: isValidData.email,
    password: isValidData.password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error(error);
    redirect("/login?message=Nop, something went wrong. Try again.");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signup(formData: IDataProps) {
  const supabase = createClient();

  const isValidData = formSchema.parse(formData);

  if (!isValidData) {
    redirect("/error");
  }

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: isValidData.email,
    password: isValidData.password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error(error);

    redirect("/login?message=Nop, something went wrong. Try again.");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
