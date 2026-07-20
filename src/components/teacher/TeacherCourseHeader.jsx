export default function TeacherCourseHeader({ courseOffering }) {
  const course = courseOffering.course;

  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="space-y-2">
        <p className="text-sm font-medium text-blue-600">
          {course?.course_code || "N/A"}
        </p>

        <h1 className="text-3xl font-bold">{course?.course_title || "N/A"}</h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>Academic Year: {courseOffering.academic_year}</span>

          <span>Semester: {courseOffering.semester}</span>

          <span>Section: {courseOffering.section}</span>

          <span>Credit: {course?.credit || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}
