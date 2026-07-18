import { createClient } from "@/lib/supabase/server";

export async function getTeachers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("teachers")
    .select(
      `
      id,
      teacher_id,
      designation,
      created_at,
      updated_at,
      profile_id,
      department_id,
      profile:profiles (
        id,
        full_name,
        email,
        avatar_url
      ),
      department:departments (
        id,
        name,
        code
      )
    `,
    )
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}

export async function getTeacherById(id) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("teachers")
    .select(
      `
      id,
      profile_id,
      department_id,
      teacher_id,
      designation,
      created_at,
      updated_at,
      profile:profiles (
        id,
        full_name,
        email,
        avatar_url
      ),
      department:departments (
        id,
        name,
        code
      )
    `,
    )
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getAvailableProfiles(currentProfileId = null) {
  const supabase = await createClient();

  // Get profiles whose role is teacher
  const { data: profiles, error: profilesError } = await supabase
    .from("profiles")
    .select(
      `
      id,
      full_name,
      email
    `,
    )
    .eq("role", "teacher")
    .order("full_name");

  if (profilesError) {
    throw profilesError;
  }

  // Get profiles already registered as teachers
  const { data: teachers, error: teachersError } = await supabase
    .from("teachers")
    .select("profile_id");

  if (teachersError) {
    throw teachersError;
  }

  const registeredProfileIds = new Set(
    teachers.map((teacher) => teacher.profile_id),
  );

  // For create:
  // return profiles not registered as teachers.
  //
  // For edit:
  // also include the current teacher's profile.
  return profiles.filter(
    (profile) =>
      !registeredProfileIds.has(profile.id) || profile.id === currentProfileId,
  );
}

export async function createTeacher({
  profile_id,
  teacher_id,
  department_id,
  designation,
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("teachers").insert({
    profile_id,
    teacher_id,
    department_id,
    designation,
  });

  if (error) {
    throw error;
  }
}

export async function updateTeacher(
  id,
  { profile_id, teacher_id, department_id, designation },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("teachers")
    .update({
      profile_id,
      teacher_id,
      department_id,
      designation,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }
}
