"use client";

import { useActionState } from "react";

import TeacherForm from "./TeacherForm";

import { createTeacherAction } from "@/features/teacher/actions";

import { INITIAL_TEACHER_STATE } from "@/features/teacher/constants";

export default function CreateTeacherForm({ profiles, departments }) {
  const [state, formAction, pending] = useActionState(
    createTeacherAction,
    INITIAL_TEACHER_STATE,
  );

  return (
    <TeacherForm
      state={state}
      action={formAction}
      pending={pending}
      profiles={profiles}
      departments={departments}
      submitText="Create Teacher"
    />
  );
}
