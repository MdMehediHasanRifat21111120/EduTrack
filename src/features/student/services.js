import { createClient } from "@/lib/supabase/server";

export async function getStudents() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("students")
    .select(
      `
      id,
      student_id,
      session,
      semester,
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
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}

export async function getStudentById(id) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("students")
    .select(
      `
      id,
      profile_id,
      department_id,
      student_id,
      session,
      semester,
      profile:profiles (
        id,
        full_name,
        email
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

  const { data: profiles, error: profilesError } = await supabase
    .from("profiles")
    .select(
      `
        id,
        full_name,
        email
      `,
    )
    .eq("role", "student")
    .order("full_name");

  if (profilesError) {
    throw profilesError;
  }

  const { data: students, error: studentsError } = await supabase
    .from("students")
    .select("profile_id");

  if (studentsError) {
    throw studentsError;
  }

  const registeredProfileIds = new Set(
    students.map((student) => student.profile_id),
  );

  return profiles.filter(
    (profile) =>
      !registeredProfileIds.has(profile.id) || profile.id === currentProfileId,
  );
}

export async function createStudent({
  profile_id,
  student_id,
  department_id,
  session,
  semester,
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("students").insert({
    profile_id,
    student_id,
    department_id,
    session,
    semester,
  });

  if (error) {
    throw error;
  }
}

export async function updateStudent(
  id,
  { profile_id, student_id, department_id, session, semester },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("students")
    .update({
      profile_id,
      student_id,
      department_id,
      session,
      semester,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }
}
