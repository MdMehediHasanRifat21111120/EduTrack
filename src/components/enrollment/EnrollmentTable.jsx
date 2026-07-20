import EnrollmentRow from "./EnrollmentRow";

export default function EnrollmentTable({
  enrollments,
}) {
  if (
    !enrollments ||
    enrollments.length === 0
  ) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">
          No enrollments found.
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
                Student
              </th>

              <th className="px-4 py-3">
                Course
              </th>

              <th className="px-4 py-3">
                Teacher
              </th>

              <th className="px-4 py-3">
                Academic Year
              </th>

              <th className="px-4 py-3">
                Semester
              </th>

              <th className="px-4 py-3">
                Section
              </th>

              <th className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {enrollments.map(
              (enrollment) => (
                <EnrollmentRow
                  key={enrollment.id}
                  enrollment={
                    enrollment
                  }
                />
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}