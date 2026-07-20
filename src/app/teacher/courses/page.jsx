import {
  getMyCourseOfferings,
} from "@/features/teacher/services";

import TeacherCourseCard from "@/components/teacher/TeacherCourseCard";

export default async function TeacherCoursesPage() {
  const courseOfferings =
    await getMyCourseOfferings();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          My Courses
        </h1>

        <p className="mt-1 text-gray-500">
          View the courses assigned to you.
        </p>
      </div>

      {courseOfferings.length ===
      0 ? (
        <div className="rounded-lg border bg-white p-8 text-center">
          <p className="text-gray-500">
            No courses assigned to you.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {courseOfferings.map(
            (courseOffering) => (
              <TeacherCourseCard
                key={
                  courseOffering.id
                }
                courseOffering={
                  courseOffering
                }
              />
            ),
          )}
        </div>
      )}
    </div>
  );
}