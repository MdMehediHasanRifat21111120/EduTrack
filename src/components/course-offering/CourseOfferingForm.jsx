"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function CourseOfferingForm({
  state,
  action,
  pending,
  courses = [],
  teachers = [],
  courseOffering = null,
  submitText = "Create Course Offering",
}) {
  return (
    <form action={action} className="space-y-6 rounded-lg border bg-white p-6">
      {/* Course */}
      <Select
        label="Course"
        name="course_id"
        required
        error={state.errors?.course_id}
        defaultValue={
          state.values?.course_id || courseOffering?.course_id || ""
        }
      >
        <option value="">Select a course</option>

        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.course_code} - {course.course_title}
          </option>
        ))}
      </Select>

      {/* Teacher */}
      <Select
        label="Teacher"
        name="teacher_id"
        required
        error={state.errors?.teacher_id}
        defaultValue={
          state.values?.teacher_id || courseOffering?.teacher_id || ""
        }
      >
        <option value="">Select a teacher</option>

        {teachers.map((teacher) => (
          <option key={teacher.id} value={teacher.id}>
            {teacher.teacher_id} -{" "}
            {teacher.profile?.full_name || "Unknown Teacher"}
          </option>
        ))}
      </Select>

      {/* Academic Year */}
      <Input
        label="Academic Year"
        name="academic_year"
        type="number"
        required
        error={state.errors?.academic_year}
        defaultValue={
          state.values?.academic_year || courseOffering?.academic_year || ""
        }
        placeholder="Example: 2026"
      />

      {/* Semester */}
      <Select
        label="Semester"
        name="semester"
        required
        error={state.errors?.semester}
        defaultValue={state.values?.semester || courseOffering?.semester || ""}
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

      {/* Section */}
      <Input
        label="Section"
        name="section"
        required
        error={state.errors?.section}
        defaultValue={state.values?.section || courseOffering?.section || ""}
        placeholder="Example: A"
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
