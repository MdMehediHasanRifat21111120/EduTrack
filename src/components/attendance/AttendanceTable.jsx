import Link from "next/link";

export default function AttendanceTable({
  sessions,
  offeringId,
}) {
  if (
    !sessions ||
    sessions.length === 0
  ) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">
          No attendance sessions found.
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
                Date
              </th>

              <th className="px-4 py-3">
                Topic
              </th>

              <th className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {sessions.map(
              (session) => (
                <tr
                  key={session.id}
                  className="border-b last:border-b-0"
                >
                  <td className="px-4 py-3">
                    {new Date(
                      session.attendance_date,
                    ).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-3">
                    {session.topic ||
                      "No topic"}
                  </td>

                  <td className="px-4 py-3">
                    <Link
                      href={`/teacher/courses/${offeringId}/attendance/${session.id}`}
                      className="font-medium text-blue-600 hover:text-blue-800"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}