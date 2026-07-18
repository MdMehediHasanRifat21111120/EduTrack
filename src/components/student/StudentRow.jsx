import Link from "next/link";

export default function StudentRow({ student }) {
  return (
    <tr className="border-b last:border-b-0">
      <td className="px-4 py-3 font-medium">
        {student.student_id}
      </td>

      <td className="px-4 py-3">
        {student.profile?.full_name || "N/A"}
      </td>

      <td className="px-4 py-3 text-gray-600">
        {student.profile?.email || "N/A"}
      </td>

      <td className="px-4 py-3">
        {student.department?.name || "N/A"}
      </td>

      <td className="px-4 py-3">
        {student.session}
      </td>

      <td className="px-4 py-3">
        {student.semester}
      </td>

      <td className="px-4 py-3">
        <Link
          href={`/admin/students/${student.id}/edit`}
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}