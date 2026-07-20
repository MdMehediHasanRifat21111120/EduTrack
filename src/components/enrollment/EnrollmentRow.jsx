import Link from "next/link";

export default function EnrollmentRow({
  enrollment,
}) {
  const student =
    enrollment.student;

  const offering =
    enrollment.course_offering;

  return (
    <tr className="border-b last:border-b-0">
      {/* Student */}
      <td className="px-4 py-3">
        <div className="font-medium">
          {student?.profile
            ?.full_name ||
            "N/A"}
        </div>

        <div className="text-sm text-gray-500">
          {student?.student_id ||
            "N/A"}
        </div>
      </td>

      {/* Course */}
      <td className="px-4 py-3">
        <div className="font-medium">
          {offering?.course
            ?.course_code ||
            "N/A"}
        </div>

        <div className="text-sm text-gray-500">
          {offering?.course
            ?.course_title ||
            "N/A"}
        </div>
      </td>

      {/* Teacher */}
      <td className="px-4 py-3">
        {offering?.teacher
          ?.profile?.full_name ||
          "N/A"}
      </td>

      {/* Academic Year */}
      <td className="px-4 py-3">
        {offering?.academic_year ||
          "N/A"}
      </td>

      {/* Semester */}
      <td className="px-4 py-3">
        Semester{" "}
        {offering?.semester ||
          "N/A"}
      </td>

      {/* Section */}
      <td className="px-4 py-3">
        {offering?.section ||
          "N/A"}
      </td>

      {/* Action */}
      <td className="px-4 py-3">
        <Link
          href={`/admin/enrollments/${enrollment.id}/edit`}
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}