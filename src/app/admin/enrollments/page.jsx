import Link from "next/link";

import {
  getEnrollments,
} from "@/features/enrollment/services";

import EnrollmentTable from "@/components/enrollment/EnrollmentTable";

export default async function EnrollmentsPage() {
  const enrollments =
    await getEnrollments();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Student Enrollments
          </h1>

          <p className="mt-1 text-gray-500">
            Manage student course enrollments.
          </p>
        </div>

        <Link
          href="/admin/enrollments/create"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Enroll Student
        </Link>
      </div>

      {/* Enrollment Table */}
      <EnrollmentTable
        enrollments={enrollments}
      />
    </div>
  );
}