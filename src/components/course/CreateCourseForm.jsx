"use client";

import { useActionState } from "react";

import CourseForm from "./CourseForm";

import { createCourseAction } from "@/features/course/actions";

import {
  INITIAL_COURSE_STATE,
} from "@/features/course/constants";

export default function CreateCourseForm({
  departments,
}) {
  const [state, formAction, pending] =
    useActionState(
      createCourseAction,
      INITIAL_COURSE_STATE,
    );

  return (
    <CourseForm
      state={state}
      action={formAction}
      pending={pending}
      departments={departments}
      submitText="Create Course"
    />
  );
}