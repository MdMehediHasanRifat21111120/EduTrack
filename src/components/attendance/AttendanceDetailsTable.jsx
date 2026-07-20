export default function AttendanceDetailsTable({ records }) {
  if (!records || records.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">No attendance records found.</p>
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

              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record, index) => {
              const student = record.student;

              return (
                <tr key={record.id} className="border-b last:border-b-0">
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

                  <td className="px-4 py-3">
                    <span
                      className={
                        record.status === "present"
                          ? "font-medium text-green-600"
                          : record.status === "absent"
                            ? "font-medium text-red-600"
                            : "font-medium text-yellow-600"
                      }
                    >
                      {record.status.charAt(0).toUpperCase() +
                        record.status.slice(1)}
                    </span>
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
