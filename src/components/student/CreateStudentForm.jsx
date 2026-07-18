"use client";

import { useActionState } from "react";

import StudentForm from "./StudentForm";

import { createStudentAction } from "@/features/student/actions";
import {
  INITIAL_STUDENT_STATE,
} from "@/features/student/constants";

export default function CreateStudentForm({
  profiles,
  departments,
}) {
  const [state, formAction, pending] =
    useActionState(
      createStudentAction,
      INITIAL_STUDENT_STATE,
    );

  return (
    <StudentForm
      state={state}
      action={formAction}
      pending={pending}
      profiles={profiles}
      departments={departments}
      submitText="Create Student"
    />
  );
}