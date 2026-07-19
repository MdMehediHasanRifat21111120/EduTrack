import { getDepartments } from "@/features/department/services";

import CreateCourseForm from "@/components/course/CreateCourseForm";

export default async function CreateCoursePage() {
  const departments = await getDepartments();

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Course</h1>

        <p className="text-gray-500">Add a new course to the university.</p>
      </div>

      <CreateCourseForm departments={departments} />
    </div>
  );
}
