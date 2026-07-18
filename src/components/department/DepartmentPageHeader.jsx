import Link from "next/link";

import Button from "@/components/ui/Button";

export default function DepartmentPageHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Departments</h1>

        <p className="mt-1 text-gray-500">Manage university departments.</p>
      </div>

      <Link href="/admin/departments/create">
        <Button>Create Department</Button>
      </Link>
    </div>
  );
}
