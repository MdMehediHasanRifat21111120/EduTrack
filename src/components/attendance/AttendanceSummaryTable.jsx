export default function AttendanceSummaryTable({ summary }) {
  if (!summary || summary.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">No students found.</p>
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

              <th className="px-4 py-3">Present</th>

              <th className="px-4 py-3">Absent</th>

              <th className="px-4 py-3">Late</th>

              <th className="px-4 py-3">Attendance</th>
            </tr>
          </thead>

          <tbody>
            {summary.map((item, index) => (
              <tr key={item.student_id} className="border-b last:border-b-0">
                <td className="px-4 py-3">{index + 1}</td>

                <td className="px-4 py-3 font-medium">
                  {item.student?.student_id}
                </td>

                <td className="px-4 py-3">
                  {item.student?.profile?.full_name}
                </td>

                <td className="px-4 py-3 text-green-600">{item.present}</td>

                <td className="px-4 py-3 text-red-600">{item.absent}</td>

                <td className="px-4 py-3 text-yellow-600">{item.late}</td>

                <td className="px-4 py-3">
                  <span
                    className={
                      item.percentage >= 75
                        ? "font-semibold text-green-600"
                        : "font-semibold text-red-600"
                    }
                  >
                    {item.percentage}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
