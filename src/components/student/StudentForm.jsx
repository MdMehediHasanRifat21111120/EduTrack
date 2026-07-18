"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function StudentForm({
  state,
  action,
  pending,
  profiles = [],
  departments = [],
  student = null,
  submitText = "Create Student",
}) {
  return (
    <form action={action} className="space-y-6 rounded-lg border bg-white p-6">
      <Select
        label="Student Profile"
        name="profile_id"
        required
        error={state.errors?.profile_id}
        defaultValue={state.values?.profile_id || student?.profile_id || ""}
      >
        <option value="">Select a profile</option>

        {profiles.map((profile) => (
          <option key={profile.id} value={profile.id}>
            {profile.full_name} ({profile.email})
          </option>
        ))}
      </Select>

      <Input
        label="Student ID"
        name="student_id"
        required
        error={state.errors?.student_id}
        defaultValue={state.values?.student_id || student?.student_id || ""}
        placeholder="Enter student ID"
      />

      <Select
        label="Department"
        name="department_id"
        required
        error={state.errors?.department_id}
        defaultValue={
          state.values?.department_id || student?.department_id || ""
        }
      >
        <option value="">Select a department</option>

        {departments.map((department) => (
          <option key={department.id} value={department.id}>
            {department.name} ({department.code})
          </option>
        ))}
      </Select>

      <Input
        label="Session"
        name="session"
        required
        error={state.errors?.session}
        defaultValue={state.values?.session || student?.session || ""}
        placeholder="Example: 2024-2025"
      />

      <Select
        label="Semester"
        name="semester"
        required
        error={state.errors?.semester}
        defaultValue={state.values?.semester || String(student?.semester ?? "")}
      >
        <option value="">Select semester</option>

        {Array.from({ length: 8 }, (_, index) => index + 1).map((semester) => (
          <option key={semester} value={semester}>
            Semester {semester}
          </option>
        ))}
      </Select>

      {state.message && <p className="text-sm text-red-500">{state.message}</p>}

      <div className="flex justify-end">
        <Button type="submit" disabled={pending}>
          {pending ? "Saving..." : submitText}
        </Button>
      </div>
    </form>
  );
}
