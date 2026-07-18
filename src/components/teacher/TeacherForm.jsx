"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function TeacherForm({
  state,
  action,
  pending,
  profiles = [],
  departments = [],
  teacher = null,
  submitText = "Create Teacher",
}) {
  return (
    <form action={action} className="space-y-6 rounded-lg border bg-white p-6">
      {/* Teacher Profile */}
      <Select
        label="Teacher Profile"
        name="profile_id"
        required
        error={state.errors?.profile_id}
        defaultValue={state.values?.profile_id || teacher?.profile_id || ""}
      >
        <option value="">Select a profile</option>

        {profiles.map((profile) => (
          <option key={profile.id} value={profile.id}>
            {profile.full_name} ({profile.email})
          </option>
        ))}
      </Select>

      {/* Teacher ID */}
      <Input
        label="Teacher ID"
        name="teacher_id"
        required
        error={state.errors?.teacher_id}
        defaultValue={state.values?.teacher_id || teacher?.teacher_id || ""}
        placeholder="Enter teacher ID"
      />

      {/* Department */}
      <Select
        label="Department"
        name="department_id"
        required
        error={state.errors?.department_id}
        defaultValue={
          state.values?.department_id || teacher?.department_id || ""
        }
      >
        <option value="">Select a department</option>

        {departments.map((department) => (
          <option key={department.id} value={department.id}>
            {department.name} ({department.code})
          </option>
        ))}
      </Select>

      {/* Designation */}
      <Input
        label="Designation"
        name="designation"
        required
        error={state.errors?.designation}
        defaultValue={state.values?.designation || teacher?.designation || ""}
        placeholder="Example: Lecturer"
      />

      {/* Server Error */}
      {state.message && <p className="text-sm text-red-500">{state.message}</p>}

      {/* Submit */}
      <div className="flex justify-end">
        <Button type="submit" disabled={pending}>
          {pending ? "Saving..." : submitText}
        </Button>
      </div>
    </form>
  );
}
