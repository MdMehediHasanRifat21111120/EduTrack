export function validateTeacher(formData) {
  const profile_id = formData.get("profile_id")?.trim() ?? "";

  const teacher_id = formData.get("teacher_id")?.trim() ?? "";

  const department_id = formData.get("department_id")?.trim() ?? "";

  const designation = formData.get("designation")?.trim() ?? "";

  const errors = {};

  if (!profile_id) {
    errors.profile_id = "Please select a teacher profile.";
  }

  if (!teacher_id) {
    errors.teacher_id = "Teacher ID is required.";
  }

  if (!department_id) {
    errors.department_id = "Please select a department.";
  }

  if (!designation) {
    errors.designation = "Designation is required.";
  }

  const data = {
    profile_id,
    teacher_id,
    department_id,
    designation,
  };

  return {
    success: Object.keys(errors).length === 0,
    errors,
    data,
  };
}
