import StudentRow from "./StudentRow";

export default function StudentTable({ students }) {
  if (!students || students.length === 0) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">
          No students found.
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
                Student ID
              </th>

              <th className="px-4 py-3">
                Name
              </th>

              <th className="px-4 py-3">
                Email
              </th>

              <th className="px-4 py-3">
                Department
              </th>

              <th className="px-4 py-3">
                Session
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
            {students.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}