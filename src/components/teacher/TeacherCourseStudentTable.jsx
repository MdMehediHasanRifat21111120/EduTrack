export default function TeacherCourseStudentTable({ enrollments }) {
  if (!enrollments || enrollments.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">
          No students are enrolled in this course.
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
              <th className="px-4 py-3">#</th>

              <th className="px-4 py-3">Student ID</th>

              <th className="px-4 py-3">Student Name</th>

              <th className="px-4 py-3">Email</th>

              <th className="px-4 py-3">Enrolled At</th>
            </tr>
          </thead>

          <tbody>
            {enrollments.map((enrollment, index) => {
              const student = enrollment.student;

              return (
                <tr key={enrollment.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3 font-medium">
                    {student?.student_id || "N/A"}
                  </td>

                  <td className="px-4 py-3">
                    {student?.profile?.full_name || "N/A"}
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {student?.profile?.email || "N/A"}
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {enrollment.enrolled_at
                      ? new Date(enrollment.enrolled_at).toLocaleDateString()
                      : "N/A"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
