import CourseRow from "./CourseRow";

export default function CourseTable({
  courses,
}) {
  if (
    !courses ||
    courses.length === 0
  ) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">
          No courses found.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="border-b text-left text-sm text-gray-600">
              <th className="px-4 py-3">
                Course Code
              </th>

              <th className="px-4 py-3">
                Course Title
              </th>

              <th className="px-4 py-3">
                Department
              </th>

              <th className="px-4 py-3">
                Credit
              </th>

              <th className="px-4 py-3">
                Semester
              </th>

              <th className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <CourseRow
                key={course.id}
                course={course}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}