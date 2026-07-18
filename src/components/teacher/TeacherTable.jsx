import TeacherRow from "./TeacherRow";

export default function TeacherTable({
  teachers,
}) {
  if (
    !teachers ||
    teachers.length === 0
  ) {
    return (
      <div className="rounded-lg border bg-white p-8 text-center">
        <p className="text-gray-500">
          No teachers found.
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
                Teacher ID
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
                Designation
              </th>

              <th className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((teacher) => (
              <TeacherRow
                key={teacher.id}
                teacher={teacher}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}