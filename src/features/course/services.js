import { createClient } from "@/lib/supabase/server";

export async function getCourses() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("courses")
    .select(
      `
      id,
      department_id,
      course_code,
      course_title,
      credit,
      semester,
      created_at,
      updated_at,
      department:departments (
        id,
        name,
        code
      )
    `,
    )
    .order("course_code");

  if (error) {
    throw error;
  }

  return data;
}

export async function getCourseById(id) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("courses")
    .select(
      `
      id,
      department_id,
      course_code,
      course_title,
      credit,
      semester,
      created_at,
      updated_at,
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

export async function createCourse({
  department_id,
  course_code,
  course_title,
  credit,
  semester,
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("courses").insert({
    department_id,
    course_code,
    course_title,
    credit,
    semester,
  });

  if (error) {
    throw error;
  }
}

export async function updateCourse(
  id,
  { department_id, course_code, course_title, credit, semester },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("courses")
    .update({
      department_id,
      course_code,
      course_title,
      credit,
      semester,
    })
    .eq("id", id);

  if (error) {
    throw error;
  }
}
