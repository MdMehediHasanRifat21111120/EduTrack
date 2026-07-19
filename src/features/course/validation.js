export function validateCourse(formData) {
  const department_id = formData.get("department_id")?.trim() ?? "";

  const course_code = formData.get("course_code")?.trim() ?? "";

  const course_title = formData.get("course_title")?.trim() ?? "";

  const creditValue = formData.get("credit")?.trim() ?? "";

  const semesterValue = formData.get("semester")?.trim() ?? "";

  const errors = {};

  if (!department_id) {
    errors.department_id = "Please select a department.";
  }

  if (!course_code) {
    errors.course_code = "Course code is required.";
  }

  if (!course_title) {
    errors.course_title = "Course title is required.";
  }

  let credit = Number(creditValue);

  if (!creditValue) {
    errors.credit = "Credit is required.";
  } else if (Number.isNaN(credit) || credit <= 0) {
    errors.credit = "Credit must be greater than 0.";
  }

  let semester = Number(semesterValue);

  if (!semesterValue) {
    errors.semester = "Please select a semester.";
  } else if (!Number.isInteger(semester) || semester < 1 || semester > 8) {
    errors.semester = "Semester must be between 1 and 8.";
  }

  const data = {
    department_id,
    course_code,
    course_title,
    credit,
    semester,
  };

  return {
    success: Object.keys(errors).length === 0,
    errors,
    data,
  };
}
