"use client";

import { useActionState } from "react";

import EditAttendanceForm from "./EditAttendanceForm";

import {
  updateAttendanceAction,
} from "@/features/attendance/actions";

export default function EditAttendanceFormWrapper({
  offeringId,
  sessionId,
  records,
}) {
  const initialState = {
    success: false,
    message: "",
    errors: {},
    values: {
      records: [],
    },
  };

  const [
    state,
    formAction,
    pending,
  ] = useActionState(
    updateAttendanceAction.bind(
      null,
      offeringId,
      sessionId,
    ),
    initialState,
  );

  return (
    <EditAttendanceForm
      action={formAction}
      pending={pending}
      records={records}
      state={state}
    />
  );
}