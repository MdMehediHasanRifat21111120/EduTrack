export function validateCourseOffering(formData) {
  const course_id = formData.get("course_id")?.trim() ?? "";

  const teacher_id = formData.get("teacher_id")?.trim() ?? "";

  const academicYearValue = formData.get("academic_year")?.trim() ?? "";

  const semesterValue = formData.get("semester")?.trim() ?? "";

  const section = formData.get("section")?.trim() ?? "";

  const errors = {};

  if (!course_id) {
    errors.course_id = "Please select a course.";
  }

  if (!teacher_id) {
    errors.teacher_id = "Please select a teacher.";
  }

  const academic_year = Number(academicYearValue);

  if (!academicYearValue) {
    errors.academic_year = "Academic year is required.";
  } else if (!Number.isInteger(academic_year) || academic_year < 2000) {
    errors.academic_year = "Please enter a valid academic year.";
  }

  const semester = Number(semesterValue);

  if (!semesterValue) {
    errors.semester = "Please select a semester.";
  } else if (!Number.isInteger(semester) || semester < 1 || semester > 8) {
    errors.semester = "Semester must be between 1 and 8.";
  }

  if (!section) {
    errors.section = "Section is required.";
  }

  const data = {
    course_id,
    teacher_id,
    academic_year,
    semester,
    section,
  };

  return {
    success: Object.keys(errors).length === 0,
    errors,
    data,
  };
}
