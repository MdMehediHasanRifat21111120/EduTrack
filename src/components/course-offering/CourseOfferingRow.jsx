import Link from "next/link";

export default function CourseOfferingRow({ courseOffering }) {
  return (
    <tr className="border-b last:border-b-0">
      {/* Course */}
      <td className="px-4 py-3">
        <div className="font-medium">
          {courseOffering.course?.course_code || "N/A"}
        </div>

        <div className="text-sm text-gray-500">
          {courseOffering.course?.course_title || "N/A"}
        </div>
      </td>

      {/* Teacher */}
      <td className="px-4 py-3">
        <div className="font-medium">
          {courseOffering.teacher?.profile?.full_name || "N/A"}
        </div>

        <div className="text-sm text-gray-500">
          {courseOffering.teacher?.teacher_id || "N/A"}
        </div>
      </td>

      {/* Academic Year */}
      <td className="px-4 py-3">{courseOffering.academic_year}</td>

      {/* Semester */}
      <td className="px-4 py-3">Semester {courseOffering.semester}</td>

      {/* Section */}
      <td className="px-4 py-3">{courseOffering.section}</td>

      {/* Action */}
      <td className="px-4 py-3">
        <Link
          href={`/admin/course-offerings/${courseOffering.id}/edit`}
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
}
