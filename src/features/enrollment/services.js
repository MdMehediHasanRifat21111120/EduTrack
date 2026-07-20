import { createClient } from "@/lib/supabase/server";

export async function getEnrollments() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("enrollments")
    .select(
      `
      id,
      student_id,
      course_offering_id,
      enrolled_at,
      created_at,

      student:students (
        id,
        student_id,
        profile:profiles (
          id,
          full_name,
          email
        )
      ),

      course_offering:course_offerings (
        id,
        academic_year,
        semester,
        section,

        course:courses (
          id,
          course_code,
          course_title,
          credit
        ),

        teacher:teachers (
          id,
          teacher_id,
          profile:profiles (
            id,
            full_name
          )
        )
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

export async function getEnrollmentById(id) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("enrollments")
    .select(
      `
      id,
      student_id,
      course_offering_id,
      enrolled_at,
      created_at,

      student:students (
        id,
        student_id,
        profile:profiles (
          id,
          full_name,
          email
        )
      ),

      course_offering:course_offerings (
        id,
        academic_year,
        semester,
        section,

        course:courses (
          id,
          course_code,
          course_title,
          credit
        ),

        teacher:teachers (
          id,
          teacher_id,
          profile:profiles (
            id,
            full_name
          )
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

export async function createEnrollment({ student_id, course_offering_id }) {
  const supabase = await createClient();

  const { error } = await supabase.from("enrollments").insert({
    student_id,
    course_offering_id,
  });

  if (error) {
    throw error;
  }
}

export async function updateEnrollment(id, { student_id, course_offering_id }) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("enrollments")
    .update({
      student_id,
      course_offering_id,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }
}
export async function getStudentsForEnrollment() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("students")
    .select(
      `
      id,
      student_id,
      profile:profiles (
        id,
        full_name,
        email
      )
    `,
    )
    .order("student_id");

  if (error) {
    throw error;
  }

  return data;
}

export async function getCourseOfferingsForEnrollment() {
  const supabase = await createClient();

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
        course_title
      ),

      teacher:teachers (
        id,
        teacher_id,
        profile:profiles (
          id,
          full_name
        )
      )
    `,
    )
    .order("academic_year", {
      ascending: false,
    })
    .order("semester");

  if (error) {
    throw error;
  }

  return data;
}
