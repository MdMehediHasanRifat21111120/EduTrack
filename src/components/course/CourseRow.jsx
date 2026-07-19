import Link from "next/link";

export default function CourseRow({
  course,
}) {
  return (
    <tr className="border-b last:border-b-0">
      <td className="px-4 py-3 font-medium">
        {course.course_code}
      </td>

      <td className="px-4 py-3">
        {course.course_title}
      </td>

      <td className="px-4 py-3">
        {course.department?.name ||
          "N/A"}
      </td>

      <td className="px-4 py-3">
        {course.credit}
      </td>

      <td className="px-4 py-3">
        Semester {course.semester}
      </td>

      <td className="px-4 py-3">
        <Link
          href={`/admin/courses/${course.id}/edit`}
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}