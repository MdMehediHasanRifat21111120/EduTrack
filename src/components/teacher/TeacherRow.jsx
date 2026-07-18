import Link from "next/link";

export default function TeacherRow({ teacher }) {
  return (
    <tr className="border-b last:border-b-0">
      <td className="px-4 py-3 font-medium">{teacher.teacher_id}</td>

      <td className="px-4 py-3">{teacher.profile?.full_name || "N/A"}</td>

      <td className="px-4 py-3 text-gray-600">
        {teacher.profile?.email || "N/A"}
      </td>

      <td className="px-4 py-3">{teacher.department?.name || "N/A"}</td>

      <td className="px-4 py-3">{teacher.designation}</td>

      <td className="px-4 py-3">
        <Link
          href={`/admin/teachers/${teacher.id}/edit`}
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}
