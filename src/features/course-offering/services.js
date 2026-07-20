import { createClient } from "@/lib/supabase/server";

export async function getCourseOfferings() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("course_offerings")
    .select(
      `
      id,
      course_id,
      teacher_id,
      academic_year,
      semester,
      section,
      created_at,
      updated_at,

      course:courses (
        id,
        course_code,
        course_title,
        credit
      ),

      teacher:teachers (
        id,
        teacher_id,
        designation,

        profile:profiles (
          id,
          full_name,
          email
        )
      )
    `,
    )
    .order("academic_year", {
      ascending: false,
    })
    .order("semester")
    .order("section");

  if (error) {
    throw error;
  }

  return data;
}

export async function getCourseOfferingById(id) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("course_offerings")
    .select(
      `
      id,
      course_id,
      teacher_id,
      academic_year,
      semester,
      section,
      created_at,
      updated_at,

      course:courses (
        id,
        course_code,
        course_title,
        credit
      ),

      teacher:teachers (
        id,
        teacher_id,
        designation,

        profile:profiles (
          id,
          full_name,
          email
        )
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

export async function createCourseOffering({
  course_id,
  teacher_id,
  academic_year,
  semester,
  section,
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("course_offerings").insert({
    course_id,
    teacher_id,
    academic_year,
    semester,
    section,
  });

  if (error) {
    throw error;
  }
}

export async function updateCourseOffering(
  id,
  { course_id, teacher_id, academic_year, semester, section },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("course_offerings")
    .update({
      course_id,
      teacher_id,
      academic_year,
      semester,
      section,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }
}
export async function getCoursesForOffering() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("courses")
    .select(
      `
      id,
      course_code,
      course_title,
      credit
    `,
    )
    .order("course_code");

  if (error) {
    throw error;
  }

  return data;
}

export async function getTeachersForOffering() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("teachers")
    .select(
      `
      id,
      teacher_id,
      designation,

      profile:profiles (
        id,
        full_name,
        email
      )
    `,
    )
    .order("teacher_id");

  if (error) {
    throw error;
  }

  return data;
}
