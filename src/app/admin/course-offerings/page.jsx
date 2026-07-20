import Link from "next/link";

import { getCourseOfferings } from "@/features/course-offering/services";

import CourseOfferingTable from "@/components/course-offering/CourseOfferingTable";

export default async function CourseOfferingsPage() {
  const courseOfferings = await getCourseOfferings();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Course Offerings</h1>

          <p className="mt-1 text-gray-500">
            Manage course assignments for teachers and academic semesters.
          </p>
        </div>

        <Link
          href="/admin/course-offerings/create"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Add Course Offering
        </Link>
      </div>

      {/* Course Offering Table */}
      <CourseOfferingTable courseOfferings={courseOfferings} />
    </div>
  );
}
