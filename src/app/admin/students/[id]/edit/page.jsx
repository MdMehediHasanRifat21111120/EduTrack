import { notFound } from "next/navigation";

import {
  getStudentById,
  getAvailableProfiles,
} from "@/features/student/services";

import { getDepartments } from "@/features/department/services";

import EditStudentForm from "@/components/student/EditStudentForm";

export default async function EditStudentPage({
  params,
}) {
  const { id } = await params;

  let student;

  try {
    student = await getStudentById(id);
  } catch {
    notFound();
  }

  const [profiles, departments] =
    await Promise.all([
      getAvailableProfiles(
        student.profile_id,
      ),
      getDepartments(),
    ]);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Student
        </h1>

        <p className="text-gray-500">
          Update student information.
        </p>
      </div>

      <EditStudentForm
        student={student}
        profiles={profiles}
        departments={departments}
      />
    </div>
  );
}