"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "./services";

import { validateDepartment } from "./validation";

export async function createDepartmentAction(previousState, formData) {
  const validation = validateDepartment(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: validation.data,
    };
  }

  try {
    await createDepartment(validation.data);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to create department.",
      errors: {},
      values: validation.data,
    };
  }

  revalidatePath("/admin/departments");
  redirect("/admin/departments");
}

export async function updateDepartmentAction(
  id,
  previousState,
  formData,
) {
  const validation = validateDepartment(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: validation.data,
    };
  }

  try {
    await updateDepartment(id, validation.data);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to update department.",
      errors: {},
      values: validation.data,
    };
  }

  revalidatePath("/admin/departments");
  redirect("/admin/departments");
}

export async function deleteDepartmentAction(id) {
  try {
    await deleteDepartment(id);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to delete department.",
    };
  }

  revalidatePath("/admin/departments");
  redirect("/admin/departments");
}