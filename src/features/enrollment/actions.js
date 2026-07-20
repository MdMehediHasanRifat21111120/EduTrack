"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createEnrollment, updateEnrollment } from "./services";

import { validateEnrollment } from "./validation";

export async function createEnrollmentAction(previousState, formData) {
  const validation = validateEnrollment(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: validation.data,
    };
  }

  try {
    await createEnrollment(validation.data);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to enroll student.",
      errors: {},
      values: validation.data,
    };
  }

  revalidatePath("/admin/enrollments");

  redirect("/admin/enrollments");
}

export async function updateEnrollmentAction(id, previousState, formData) {
  const validation = validateEnrollment(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: validation.data,
    };
  }

  try {
    await updateEnrollment(id, validation.data);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to update enrollment.",
      errors: {},
      values: validation.data,
    };
  }

  revalidatePath("/admin/enrollments");

  revalidatePath(`/admin/enrollments/${id}/edit`);

  redirect("/admin/enrollments");
}
