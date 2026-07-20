import Link from "next/link";

export default function TeacherCourseCard({ courseOffering }) {
  const course = courseOffering.course;

  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          {course?.course_code || "N/A"}
        </h2>

        <p className="text-gray-600">{course?.course_title || "N/A"}</p>

        <p className="text-sm text-gray-500">
          {courseOffering.academic_year} | Semester {courseOffering.semester} |
          Section {courseOffering.section}
        </p>
      </div>

      <div className="mt-4">
        <Link
          href={`/teacher/courses/${courseOffering.id}`}
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}
