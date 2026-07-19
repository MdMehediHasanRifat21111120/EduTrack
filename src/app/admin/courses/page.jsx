import Link from "next/link";

import {
  getCourses,
} from "@/features/course/services";

import CourseTable from "@/components/course/CourseTable";

export default async function CoursesPage() {
  const courses =
    await getCourses();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Courses
          </h1>

          <p className="mt-1 text-gray-500">
            Manage university courses.
          </p>
        </div>

        <Link
          href="/admin/courses/create"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Add Course
        </Link>
      </div>

      {/* Course Table */}
      <CourseTable
        courses={courses}
      />
    </div>
  );
}