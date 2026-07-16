import { createClient } from "@/lib/supabase/server";
export async function signUpUser({ fullName, email, password }) {
  const supabase = await createClient();
  return await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });
}

export async function signInUser({ email, password }) {
  const supabase = await createClient();

  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}
export async function signOutUser() {
  const supabase = await createClient();

  return await supabase.auth.signOut();
}
