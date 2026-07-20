import {
  getCoursesForOffering,
  getTeachersForOffering,
} from "@/features/course-offering/services";

import CreateCourseOfferingForm from "@/components/course-offering/CreateCourseOfferingForm";

export default async function CreateCourseOfferingPage() {
  const [courses, teachers] = await Promise.all([
    getCoursesForOffering(),
    getTeachersForOffering(),
  ]);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Course Offering</h1>

        <p className="text-gray-500">
          Assign a teacher to a course for a specific academic year, semester,
          and section.
        </p>
      </div>

      <CreateCourseOfferingForm courses={courses} teachers={teachers} />
    </div>
  );
}
