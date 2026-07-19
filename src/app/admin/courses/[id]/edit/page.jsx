import { notFound } from "next/navigation";

import {
  getCourseById,
} from "@/features/course/services";

import {
  getDepartments,
} from "@/features/department/services";

import EditCourseForm from "@/components/course/EditCourseForm";

export default async function EditCoursePage({
  params,
}) {
  const { id } = await params;

  let course;

  try {
    course =
      await getCourseById(id);
  } catch {
    notFound();
  }

  const departments =
    await getDepartments();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Course
        </h1>

        <p className="text-gray-500">
          Update course information.
        </p>
      </div>

      <EditCourseForm
        course={course}
        departments={departments}
      />
    </div>
  );
}