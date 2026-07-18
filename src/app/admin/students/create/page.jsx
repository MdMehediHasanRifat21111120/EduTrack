import { getDepartments } from "@/features/department/services";
import {
  getAvailableProfiles,
} from "@/features/student/services";

import CreateStudentForm from "@/components/student/CreateStudentForm";

export default async function CreateStudentPage() {
  const [profiles, departments] = await Promise.all([
    getAvailableProfiles(),
    getDepartments(),
  ]);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Create Student
        </h1>

        <p className="text-gray-500">
          Register an existing user as a student.
        </p>
      </div>

      <CreateStudentForm
        profiles={profiles}
        departments={departments}
      />
    </div>
  );
}