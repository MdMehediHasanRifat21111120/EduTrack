"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function CourseForm({
  state,
  action,
  pending,
  departments = [],
  course = null,
  submitText = "Create Course",
}) {
  return (
    <form action={action} className="space-y-6 rounded-lg border bg-white p-6">
      {/* Department */}
      <Select
        label="Department"
        name="department_id"
        required
        error={state.errors?.department_id}
        defaultValue={
          state.values?.department_id || course?.department_id || ""
        }
      >
        <option value="">Select a department</option>

        {departments.map((department) => (
          <option key={department.id} value={department.id}>
            {department.name} ({department.code})
          </option>
        ))}
      </Select>

      {/* Course Code */}
      <Input
        label="Course Code"
        name="course_code"
        required
        error={state.errors?.course_code}
        defaultValue={state.values?.course_code || course?.course_code || ""}
        placeholder="Example: CSE101"
      />

      {/* Course Title */}
      <Input
        label="Course Title"
        name="course_title"
        required
        error={state.errors?.course_title}
        defaultValue={state.values?.course_title || course?.course_title || ""}
        placeholder="Example: Structured Programming"
      />

      {/* Credit */}
      <Input
        label="Credit"
        name="credit"
        type="number"
        step="0.5"
        min="0.5"
        required
        error={state.errors?.credit}
        defaultValue={state.values?.credit || course?.credit || ""}
        placeholder="Example: 3.0"
      />

      {/* Semester */}
      <Select
        label="Semester"
        name="semester"
        required
        error={state.errors?.semester}
        defaultValue={state.values?.semester || course?.semester || ""}
      >
        <option value="">Select semester</option>

        {Array.from({ length: 8 }, (_, index) => {
          const semester = index + 1;

          return (
            <option key={semester} value={semester}>
              Semester {semester}
            </option>
          );
        })}
      </Select>

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
