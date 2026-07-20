"use client";

import { useActionState } from "react";

import CourseOfferingForm from "./CourseOfferingForm";

import {
  updateCourseOfferingAction,
} from "@/features/course-offering/actions";

import {
  INITIAL_COURSE_OFFERING_STATE,
} from "@/features/course-offering/constants";

export default function EditCourseOfferingForm({
  courseOffering,
  courses,
  teachers,
}) {
  const [state, formAction, pending] =
    useActionState(
      updateCourseOfferingAction.bind(
        null,
        courseOffering.id,
      ),
      INITIAL_COURSE_OFFERING_STATE,
    );

  return (
    <CourseOfferingForm
      courseOffering={
        courseOffering
      }
      courses={courses}
      teachers={teachers}
      state={state}
      action={formAction}
      pending={pending}
      submitText="Update Course Offering"
    />
  );
}