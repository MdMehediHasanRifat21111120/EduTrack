"use client";

import { useActionState } from "react";

import AttendanceForm from "./AttendanceForm";

import { createAttendanceAction } from "@/features/attendance/actions";

import { INITIAL_ATTENDANCE_STATE } from "@/features/attendance/constants";

export default function CreateAttendanceForm({ offeringId, students }) {
  const [state, formAction, pending] = useActionState(
    createAttendanceAction.bind(null, offeringId),
    INITIAL_ATTENDANCE_STATE,
  );

  return (
    <AttendanceForm
      action={formAction}
      pending={pending}
      students={students}
      state={state}
    />
  );
}
