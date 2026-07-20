export default function AttendanceHistoryTable({ records }) {
  if (!records || records.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">No attendance records found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <div className="border-b p-4">
        <h2 className="font-semibold">Attendance History</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="border-b text-left text-sm text-gray-600">
              <th className="px-4 py-3">#</th>

              <th className="px-4 py-3">Date</th>

              <th className="px-4 py-3">Topic</th>

              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record, index) => {
              const session = record.attendance_session;

              const statusClass =
                record.status === "present"
                  ? "bg-green-100 text-green-700"
                  : record.status === "absent"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700";

              return (
                <tr key={record.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3">
                    {new Date(session.attendance_date).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-3">{session.topic || "No topic"}</td>

                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass}`}
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
