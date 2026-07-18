import DepartmentPageHeader from "@/components/department/DepartmentPageHeader";
import DepartmentTable from "@/components/department/DepartmentTable";
import EmptyDepartment from "@/components/department/EmptyDepartment";

import { getDepartments } from "@/features/department/services";

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <section className="space-y-6">
      <DepartmentPageHeader />

      {departments.length === 0 ? (
        <EmptyDepartment />
      ) : (
        <DepartmentTable departments={departments} />
      )}
    </section>
  );
}
