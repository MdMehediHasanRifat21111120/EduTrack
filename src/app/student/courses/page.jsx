import Link from "next/link";

import { getMyCourseOfferings } from "@/features/student-attendance/services";

export default async function StudentCoursesPage() {
  const courses = await getMyCourseOfferings();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>

        <p className="mt-1 text-sm text-gray-500">
          View and access your enrolled courses.
        </p>
      </div>

      {/* Empty State */}
      {courses.length === 0 ? (
        <div className="rounded-lg border bg-white p-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            No Courses Found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            You are not enrolled in any courses yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((courseOffering) => {
            const course = courseOffering.course;

            return (
              <Link
                key={courseOffering.id}
                href={`/student/courses/${courseOffering.id}`}
                className="group rounded-lg border bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Course Code */}
                  <p className="text-sm font-semibold text-blue-600">
                    {course?.course_code}
                  </p>

                  {/* Course Title */}
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                    {course?.course_title}
                  </h2>

                  {/* Course Credit */}
                  <p className="text-sm text-gray-500">
                    Credit: {course?.credit}
                  </p>

                  {/* Course Offering Information */}
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      Academic Year: {courseOffering.academic_year}
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      Semester: {courseOffering.semester}
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      Section: {courseOffering.section}
                    </span>
                  </div>

                  {/* View Course */}
                  <div className="pt-2 text-sm font-medium text-blue-600">
                    View Course →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
