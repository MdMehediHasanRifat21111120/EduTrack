"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  createStudent,
  updateStudent,
} from "./services";

import { validateStudent } from "./validation";

export async function createStudentAction(
  previousState,
  formData,
) {
  const validation =
    validateStudent(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: validation.data,
    };
  }

  try {
    await createStudent(validation.data);
  } catch (error) {
    return {
      success: false,
      message:
        error.message ||
        "Failed to create student.",
      errors: {},
      values: validation.data,
    };
  }

  revalidatePath("/admin/students");

  redirect("/admin/students");
}

export async function updateStudentAction(
  id,
  previousState,
  formData,
) {
  const validation =
    validateStudent(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: validation.data,
    };
  }

  try {
    await updateStudent(
      id,
      validation.data,
    );
  } catch (error) {
    return {
      success: false,
      message:
        error.message ||
        "Failed to update student.",
      errors: {},
      values: validation.data,
    };
  }

  revalidatePath("/admin/students");
  revalidatePath(`/admin/students/${id}/edit`);

  redirect("/admin/students");
}