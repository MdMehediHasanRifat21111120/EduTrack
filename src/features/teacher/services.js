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
export async function getCurrentTeacher() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    throw new Error("User is not authenticated.");
  }

  const { data, error } = await supabase
    .from("teachers")
    .select(
      `
        id,
        teacher_id,
        designation,
        profile_id,
        profile:profiles (
          id,
          full_name,
          email
        )
      `,
    )
    .eq("profile_id", user.id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
export async function getMyCourseOfferings() {
  const supabase = await createClient();

  const teacher = await getCurrentTeacher();

  const { data, error } = await supabase
    .from("course_offerings")
    .select(
      `
        id,
        academic_year,
        semester,
        section,

        course:courses (
          id,
          course_code,
          course_title,
          credit
        )
      `,
    )
    .eq("teacher_id", teacher.id)
    .order("academic_year", {
      ascending: false,
    })
    .order("semester");

  if (error) {
    throw error;
  }

  return data;
}
export async function getMyCourseOfferingById(offeringId) {
  const supabase = await createClient();

  const teacher = await getCurrentTeacher();

  const { data, error } = await supabase
    .from("course_offerings")
    .select(
      `
        id,
        academic_year,
        semester,
        section,

        course:courses (
          id,
          course_code,
          course_title,
          credit
        )
      `,
    )
    .eq("id", offeringId)
    .eq("teacher_id", teacher.id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
export async function getMyCourseOfferingStudents(
  offeringId,
) {
  const supabase = await createClient();

  const teacher =
    await getCurrentTeacher();

  // First verify that this course
  // offering belongs to the teacher
  const {
    data: courseOffering,
    error: offeringError,
  } = await supabase
    .from("course_offerings")
    .select("id")
    .eq("id", offeringId)
    .eq("teacher_id", teacher.id)
    .single();

  if (offeringError) {
    throw offeringError;
  }

  // Get students enrolled in
  // this course offering
  const { data, error } =
    await supabase
      .from("enrollments")
      .select(`
        id,
        enrolled_at,

        student:students (
          id,
          student_id,

          profile:profiles (
            id,
            full_name,
            email
          )
        )
      `)
      .eq(
        "course_offering_id",
        courseOffering.id,
      )
      .order("enrolled_at", {
        ascending: true,
      });

  if (error) {
    throw error;
  }

  return data;
}