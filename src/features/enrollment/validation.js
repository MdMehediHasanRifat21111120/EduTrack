export function validateEnrollment(
  formData,
) {
  const student_id =
    formData.get("student_id")?.trim() ?? "";

  const course_offering_id =
    formData
      .get("course_offering_id")
      ?.trim() ?? "";

  const errors = {};

  if (!student_id) {
    errors.student_id =
      "Please select a student.";
  }

  if (!course_offering_id) {
    errors.course_offering_id =
      "Please select a course offering.";
  }

  const data = {
    student_id,
    course_offering_id,
  };

  return {
    success:
      Object.keys(errors).length === 0,
    errors,
    data,
  };
}