import { notFound } from "next/navigation";

import EditDepartmentForm from "@/components/department/EditDepartmentForm";
import { getDepartmentById } from "@/features/department/services";

export default async function EditDepartmentPage({ params }) {
  const { id } = await params;

  let department;

  try {
    department = await getDepartmentById(id);
  } catch {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Department</h1>

        <p className="text-gray-500">Update department information.</p>
      </div>

      <EditDepartmentForm department={department} />
    </div>
  );
}
