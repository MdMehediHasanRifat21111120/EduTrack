"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createTeacher, updateTeacher } from "./services";

import { validateTeacher } from "./validation";

export async function createTeacherAction(previousState, formData) {
  const validation = validateTeacher(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: validation.data,
    };
  }

  try {
    await createTeacher(validation.data);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to create teacher.",
      errors: {},
      values: validation.data,
    };
  }

  revalidatePath("/admin/teachers");

  redirect("/admin/teachers");
}

export async function updateTeacherAction(id, previousState, formData) {
  const validation = validateTeacher(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: validation.data,
    };
  }

  try {
    await updateTeacher(id, validation.data);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to update teacher.",
      errors: {},
      values: validation.data,
    };
  }

  revalidatePath("/admin/teachers");
  revalidatePath(`/admin/teachers/${id}/edit`);

  redirect("/admin/teachers");
}
