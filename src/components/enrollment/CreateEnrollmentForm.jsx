"use client";

import { useActionState } from "react";

import EnrollmentForm from "./EnrollmentForm";

import { createEnrollmentAction } from "@/features/enrollment/actions";

import { INITIAL_ENROLLMENT_STATE } from "@/features/enrollment/constants";

export default function CreateEnrollmentForm({ students, courseOfferings }) {
  const [state, formAction, pending] = useActionState(
    createEnrollmentAction,
    INITIAL_ENROLLMENT_STATE,
  );

  return (
    <EnrollmentForm
      state={state}
      action={formAction}
      pending={pending}
      students={students}
      courseOfferings={courseOfferings}
      submitText="Enroll Student"
    />
  );
}
