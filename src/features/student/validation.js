export function validateStudent(formData) {
  const profile_id = formData.get("profile_id")?.trim() ?? "";

  const student_id = formData.get("student_id")?.trim() ?? "";

  const department_id = formData.get("department_id")?.trim() ?? "";

  const session = formData.get("session")?.trim() ?? "";

  const semester = formData.get("semester")?.trim() ?? "";

  const errors = {};

  if (!profile_id) {
    errors.profile_id = "Please select a student profile.";
  }

  if (!student_id) {
    errors.student_id = "Student ID is required.";
  }

  if (!department_id) {
    errors.department_id = "Please select a department.";
  }

  if (!session) {
    errors.session = "Session is required.";
  }

  if (!semester) {
    errors.semester = "Please select a semester.";
  }

  const data = {
    profile_id,
    student_id,
    department_id,
    session,
    semester: semester ? Number(semester) : "",
  };

  return {
    success: Object.keys(errors).length === 0,
    errors,
    data,
  };
}
