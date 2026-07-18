import Link from "next/link";

export default function DepartmentRow({ department }) {
  return (
    <tr className="border-b">
      <td className="px-4 py-3">{department.name}</td>
      <td className="px-4 py-3">{department.code}</td>
      <td className="px-4 py-3">{department.description}</td>

      <td className="px-4 py-3">
        <Link
          href={`/admin/departments/${department.id}/edit`}
          className="text-blue-600 hover:underline"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}