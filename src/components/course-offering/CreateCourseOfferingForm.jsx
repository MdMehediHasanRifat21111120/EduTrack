"use client";

import { useActionState } from "react";

import CourseOfferingForm from "./CourseOfferingForm";

import {
  createCourseOfferingAction,
} from "@/features/course-offering/actions";

import {
  INITIAL_COURSE_OFFERING_STATE,
} from "@/features/course-offering/constants";

export default function CreateCourseOfferingForm({
  courses,
  teachers,
}) {
  const [state, formAction, pending] =
    useActionState(
      createCourseOfferingAction,
      INITIAL_COURSE_OFFERING_STATE,
    );

  return (
    <CourseOfferingForm
      state={state}
      action={formAction}
      pending={pending}
      courses={courses}
      teachers={teachers}
      submitText="Create Course Offering"
    />
  );
}