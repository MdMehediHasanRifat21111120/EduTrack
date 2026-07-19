"use client";

import { useActionState } from "react";

import CourseForm from "./CourseForm";

import { updateCourseAction } from "@/features/course/actions";

import {
  INITIAL_COURSE_STATE,
} from "@/features/course/constants";

export default function EditCourseForm({
  course,
  departments,
}) {
  const [state, formAction, pending] =
    useActionState(
      updateCourseAction.bind(
        null,
        course.id,
      ),
      INITIAL_COURSE_STATE,
    );

  return (
    <CourseForm
      course={course}
      departments={departments}
      state={state}
      action={formAction}
      pending={pending}
      submitText="Update Course"
    />
  );
}