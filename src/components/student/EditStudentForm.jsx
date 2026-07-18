"use client";

import { useActionState } from "react";

import StudentForm from "./StudentForm";

import { updateStudentAction } from "@/features/student/actions";

import {
  INITIAL_STUDENT_STATE,
} from "@/features/student/constants";

export default function EditStudentForm({
  student,
  profiles,
  departments,
}) {
  const [state, formAction, pending] =
    useActionState(
      updateStudentAction.bind(
        null,
        student.id,
      ),
      INITIAL_STUDENT_STATE,
    );

  return (
    <StudentForm
      student={student}
      state={state}
      action={formAction}
      pending={pending}
      profiles={profiles}
      departments={departments}
      submitText="Update Student"
    />
  );
}