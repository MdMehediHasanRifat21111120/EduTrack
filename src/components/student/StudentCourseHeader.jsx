export default function StudentCourseHeader({ courseOffering }) {
  const course = courseOffering?.course;

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Course Information */}
        <div>
          <p className="text-sm font-semibold text-blue-600">
            {course?.course_code}
          </p>

          <h1 className="mt-1 text-2xl font-bold text-gray-900">
            {course?.course_title}
          </h1>

          <p className="mt-2 text-sm text-gray-500">{course?.credit} Credit</p>
        </div>

        {/* Offering Information */}
        <div className="flex flex-wrap gap-3">
          <div className="rounded-lg bg-gray-50 px-4 py-3">
            <p className="text-xs text-gray-500">Academic Year</p>

            <p className="mt-1 font-semibold text-gray-900">
              {courseOffering?.academic_year}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 px-4 py-3">
            <p className="text-xs text-gray-500">Semester</p>

            <p className="mt-1 font-semibold text-gray-900">
              {courseOffering?.semester}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 px-4 py-3">
            <p className="text-xs text-gray-500">Section</p>

            <p className="mt-1 font-semibold text-gray-900">
              {courseOffering?.section}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
