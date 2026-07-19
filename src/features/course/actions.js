"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createCourse, updateCourse } from "./services";

import { validateCourse } from "./validation";

export async function createCourseAction(previousState, formData) {
  const validation = validateCourse(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: {
        ...validation.data,
        credit: formData.get("credit")?.trim() ?? "",
        semester: formData.get("semester")?.trim() ?? "",
      },
    };
  }

  try {
    await createCourse(validation.data);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to create course.",
      errors: {},
      values: {
        ...validation.data,
        credit: String(validation.data.credit),
        semester: String(validation.data.semester),
      },
    };
  }

  revalidatePath("/admin/courses");

  redirect("/admin/courses");
}

export async function updateCourseAction(id, previousState, formData) {
  const validation = validateCourse(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: {
        ...validation.data,
        credit: formData.get("credit")?.trim() ?? "",
        semester: formData.get("semester")?.trim() ?? "",
      },
    };
  }

  try {
    await updateCourse(id, validation.data);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to update course.",
      errors: {},
      values: {
        ...validation.data,
        credit: String(validation.data.credit),
        semester: String(validation.data.semester),
      },
    };
  }

  revalidatePath("/admin/courses");
  revalidatePath(`/admin/courses/${id}/edit`);

  redirect("/admin/courses");
}
