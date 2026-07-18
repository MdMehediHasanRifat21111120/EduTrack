import { createClient } from "@/lib/supabase/server";

export async function getDepartments() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("departments")
    .select("*")
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}

export async function getDepartmentById(id) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("departments")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function createDepartment({ name, code, description }) {
  const supabase = await createClient();

  const { error } = await supabase.from("departments").insert({
    name,
    code,
    description,
  });

  if (error) {
    throw error;
  }
}

export async function updateDepartment(id, { name, code, description }) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("departments")
    .update({
      name,
      code,
      description,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function deleteDepartment(id) {
  const supabase = await createClient();

  const { error } = await supabase.from("departments").delete().eq("id", id);

  if (error) {
    throw error;
  }
}
