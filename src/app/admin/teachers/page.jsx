import Link from "next/link";

import { getTeachers } from "@/features/teacher/services";

import TeacherTable from "@/components/teacher/TeacherTable";

export default async function TeachersPage() {
  const teachers = await getTeachers();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Teachers</h1>

          <p className="mt-1 text-gray-500">Manage university teachers.</p>
        </div>

        <Link
          href="/admin/teachers/create"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Add Teacher
        </Link>
      </div>

      {/* Teacher Table */}
      <TeacherTable teachers={teachers} />
    </div>
  );
}
