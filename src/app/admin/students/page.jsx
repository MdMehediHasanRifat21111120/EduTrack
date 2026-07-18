import Link from "next/link";

import { getStudents } from "@/features/student/services";
import StudentTable from "@/components/student/StudentTable";

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Students
          </h1>

          <p className="mt-1 text-gray-500">
            Manage university students.
          </p>
        </div>

        <Link
          href="/admin/students/create"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Add Student
        </Link>
      </div>

      {/* Student Table */}
      <StudentTable students={students} />
    </div>
  );
}