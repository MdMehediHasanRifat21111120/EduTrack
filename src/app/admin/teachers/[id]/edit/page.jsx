import { notFound } from "next/navigation";

import {
  getTeacherById,
  getAvailableProfiles,
} from "@/features/teacher/services";

import { getDepartments } from "@/features/department/services";

import EditTeacherForm from "@/components/teacher/EditTeacherForm";

export default async function EditTeacherPage({ params }) {
  const { id } = await params;

  let teacher;

  try {
    teacher = await getTeacherById(id);
  } catch {
    notFound();
  }

  const [profiles, departments] = await Promise.all([
    getAvailableProfiles(teacher.profile_id),
    getDepartments(),
  ]);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Teacher</h1>

        <p className="text-gray-500">Update teacher information.</p>
      </div>

      <EditTeacherForm
        teacher={teacher}
        profiles={profiles}
        departments={departments}
      />
    </div>
  );
}
