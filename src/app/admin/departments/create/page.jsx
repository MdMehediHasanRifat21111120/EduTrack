import CreateDepartmentForm from "@/components/department/CreateDepartmentForm";

export default function CreateDepartmentPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Department</h1>

        <p className="text-gray-500">Add a new department.</p>
      </div>

      <CreateDepartmentForm />
    </div>
  );
}
