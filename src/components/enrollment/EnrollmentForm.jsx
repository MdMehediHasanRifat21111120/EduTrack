"use client";

import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function EnrollmentForm({
  state,
  action,
  pending,
  students = [],
  courseOfferings = [],
  enrollment = null,
  submitText = "Enroll Student",
}) {
  return (
    <form
      action={action}
      className="space-y-6 rounded-lg border bg-white p-6"
    >
      {/* Student */}
      <Select
        label="Student"
        name="student_id"
        required
        error={state.errors?.student_id}
        defaultValue={
          state.values?.student_id ||
          enrollment?.student_id ||
          ""
        }
      >
        <option value="">
          Select a student
        </option>

        {students.map((student) => (
          <option
            key={student.id}
            value={student.id}
          >
            {student.student_id} -{" "}
            {student.profile?.full_name ||
              "Unknown Student"}
          </option>
        ))}
      </Select>

      {/* Course Offering */}
      <Select
        label="Course Offering"
        name="course_offering_id"
        required
        error={
          state.errors
            ?.course_offering_id
        }
        defaultValue={
          state.values
            ?.course_offering_id ||
          enrollment?.course_offering_id ||
          ""
        }
      >
        <option value="">
          Select a course offering
        </option>

        {courseOfferings.map(
          (offering) => (
            <option
              key={offering.id}
              value={offering.id}
            >
              {offering.course
                ?.course_code ||
                "N/A"}{" "}
              -{" "}
              {offering.course
                ?.course_title ||
                "N/A"}{" "}
              |{" "}
              {offering.academic_year}{" "}
              | Semester{" "}
              {offering.semester}{" "}
              | Section{" "}
              {offering.section}{" "}
              | Teacher:{" "}
              {offering.teacher
                ?.profile?.full_name ||
                "N/A"}
            </option>
          ),
        )}
      </Select>

      {/* Server Error */}
      {state.message && (
        <p className="text-sm text-red-500">
          {state.message}
        </p>
      )}

      {/* Submit */}
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={pending}
        >
          {pending
            ? "Saving..."
            : submitText}
        </Button>
      </div>
    </form>
  );
}