import EmptyDepartment from "./EmptyDepartment";
import DepartmentRow from "./DepartmentRow";

export default function DepartmentTable({ departments }) {
  if (departments.length === 0) {
    return <EmptyDepartment />;
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Code</th>
            <th className="px-4 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((department) => (
            <DepartmentRow key={department.id} department={department} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
