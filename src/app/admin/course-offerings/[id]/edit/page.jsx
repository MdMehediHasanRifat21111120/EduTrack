import { notFound } from "next/navigation";

import {
  getCourseOfferingById,
  getCoursesForOffering,
  getTeachersForOffering,
} from "@/features/course-offering/services";

import EditCourseOfferingForm from "@/components/course-offering/EditCourseOfferingForm";

export default async function EditCourseOfferingPage({ params }) {
  const { id } = await params;

  let courseOffering;

  try {
    courseOffering = await getCourseOfferingById(id);
  } catch {
    notFound();
  }

  const [courses, teachers] = await Promise.all([
    getCoursesForOffering(),
    getTeachersForOffering(),
  ]);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Course Offering</h1>

        <p className="text-gray-500">Update course offering information.</p>
      </div>

      <EditCourseOfferingForm
        courseOffering={courseOffering}
        courses={courses}
        teachers={teachers}
      />
    </div>
  );
}
