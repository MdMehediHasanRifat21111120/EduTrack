import { notFound } from "next/navigation";

import { getMyCourseOfferingById } from "@/features/student-attendance/services";

export default async function StudentCourseOverviewPage({ params }) {
  const { offeringId } = await params;

  let courseOffering;

  try {
    courseOffering = await getMyCourseOfferingById(offeringId);
  } catch {
    notFound();
  }

  const course = courseOffering?.course;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">Course Overview</h2>

        <p className="mt-1 text-sm text-gray-500">
          View information about your enrolled course.
        </p>
      </div>

      {/* Course Information */}
      <div className="rounded-lg border bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Course Information
        </h3>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Course Code */}
          <div>
            <p className="text-sm text-gray-500">Course Code</p>

            <p className="mt-1 font-semibold text-gray-900">
              {course?.course_code}
            </p>
          </div>

          {/* Course Title */}
          <div>
            <p className="text-sm text-gray-500">Course Title</p>

            <p className="mt-1 font-semibold text-gray-900">
              {course?.course_title}
            </p>
          </div>

          {/* Credit */}
          <div>
            <p className="text-sm text-gray-500">Credit</p>

            <p className="mt-1 font-semibold text-gray-900">{course?.credit}</p>
          </div>

          {/* Academic Year */}
          <div>
            <p className="text-sm text-gray-500">Academic Year</p>

            <p className="mt-1 font-semibold text-gray-900">
              {courseOffering?.academic_year}
            </p>
          </div>

          {/* Semester */}
          <div>
            <p className="text-sm text-gray-500">Semester</p>

            <p className="mt-1 font-semibold text-gray-900">
              {courseOffering?.semester}
            </p>
          </div>

          {/* Section */}
          <div>
            <p className="text-sm text-gray-500">Section</p>

            <p className="mt-1 font-semibold text-gray-900">
              {courseOffering?.section}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="rounded-lg border bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-900">Quick Access</h3>

        <p className="mt-1 text-sm text-gray-500">
          Access your course activities using the navigation above.
        </p>
      </div>
    </div>
  );
}
