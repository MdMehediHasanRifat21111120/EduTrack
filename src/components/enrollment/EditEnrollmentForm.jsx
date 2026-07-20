"use client";

import { useActionState } from "react";

import EnrollmentForm from "./EnrollmentForm";

import {
  updateEnrollmentAction,
} from "@/features/enrollment/actions";

import {
  INITIAL_ENROLLMENT_STATE,
} from "@/features/enrollment/constants";

export default function EditEnrollmentForm({
  enrollment,
  students,
  courseOfferings,
}) {
  const [state, formAction, pending] =
    useActionState(
      updateEnrollmentAction.bind(
        null,
        enrollment.id,
      ),
      INITIAL_ENROLLMENT_STATE,
    );

  return (
    <EnrollmentForm
      enrollment={enrollment}
      students={students}
      courseOfferings={
        courseOfferings
      }
      state={state}
      action={formAction}
      pending={pending}
      submitText="Update Enrollment"
    />
  );
}