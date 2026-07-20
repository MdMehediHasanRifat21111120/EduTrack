"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  createAttendanceSession,
  createAttendanceRecords,
  updateAttendanceRecords,
} from "./services";

import { validateAttendance, validateAttendanceUpdate } from "./validation";

export async function createAttendanceAction(
  offeringId,
  previousState,
  formData,
) {
  const validation = validateAttendance(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: validation.data,
    };
  }

  try {
    // Create attendance session
    const session = await createAttendanceSession(offeringId, {
      attendance_date: validation.data.attendance_date,

      topic: validation.data.topic,
    });

    // Create attendance records
    await createAttendanceRecords(
      offeringId,
      session.id,
      validation.data.records,
    );
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to save attendance.",

      errors: {},

      values: validation.data,
    };
  }

  revalidatePath(`/teacher/courses/${offeringId}/attendance`);

  redirect(`/teacher/courses/${offeringId}/attendance`);
}
export async function updateAttendanceAction(
  offeringId,
  sessionId,
  previousState,
  formData,
) {
  const validation = validateAttendanceUpdate(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: validation.data,
    };
  }

  try {
    await updateAttendanceRecords(
      offeringId,
      sessionId,
      validation.data.records,
    );
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to update attendance.",

      errors: {},

      values: validation.data,
    };
  }

  revalidatePath(`/teacher/courses/${offeringId}/attendance`);

  revalidatePath(`/teacher/courses/${offeringId}/attendance/${sessionId}`);

  redirect(`/teacher/courses/${offeringId}/attendance/${sessionId}`);
}
