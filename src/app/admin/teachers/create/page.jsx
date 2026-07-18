import { getAvailableProfiles } from "@/features/teacher/services";

import { getDepartments } from "@/features/department/services";

import CreateTeacherForm from "@/components/teacher/CreateTeacherForm";

export default async function CreateTeacherPage() {
  const [profiles, departments] = await Promise.all([
    getAvailableProfiles(),
    getDepartments(),
  ]);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Teacher</h1>

        <p className="text-gray-500">Add a new teacher to the university.</p>
      </div>

      <CreateTeacherForm profiles={profiles} departments={departments} />
    </div>
  );
}
