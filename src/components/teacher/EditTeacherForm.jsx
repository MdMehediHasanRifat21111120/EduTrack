"use client";

import { useActionState } from "react";

import TeacherForm from "./TeacherForm";

import { updateTeacherAction } from "@/features/teacher/actions";

import { INITIAL_TEACHER_STATE } from "@/features/teacher/constants";

export default function EditTeacherForm({ teacher, profiles, departments }) {
  const [state, formAction, pending] = useActionState(
    updateTeacherAction.bind(null, teacher.id),
    INITIAL_TEACHER_STATE,
  );

  return (
    <TeacherForm
      teacher={teacher}
      profiles={profiles}
      departments={departments}
      state={state}
      action={formAction}
      pending={pending}
      submitText="Update Teacher"
    />
  );
}
