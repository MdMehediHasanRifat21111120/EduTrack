"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createCourseOffering, updateCourseOffering } from "./services";

import { validateCourseOffering } from "./validation";

export async function createCourseOfferingAction(previousState, formData) {
  const validation = validateCourseOffering(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: {
        ...validation.data,
        academic_year: formData.get("academic_year")?.trim() ?? "",
        semester: formData.get("semester")?.trim() ?? "",
      },
    };
  }

  try {
    await createCourseOffering(validation.data);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to create course offering.",
      errors: {},
      values: {
        ...validation.data,
        academic_year: String(validation.data.academic_year),
        semester: String(validation.data.semester),
      },
    };
  }

  revalidatePath("/admin/course-offerings");

  redirect("/admin/course-offerings");
}

export async function updateCourseOfferingAction(id, previousState, formData) {
  const validation = validateCourseOffering(formData);

  if (!validation.success) {
    return {
      success: false,
      message: "",
      errors: validation.errors,
      values: {
        ...validation.data,
        academic_year: formData.get("academic_year")?.trim() ?? "",
        semester: formData.get("semester")?.trim() ?? "",
      },
    };
  }

  try {
    await updateCourseOffering(id, validation.data);
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to update course offering.",
      errors: {},
      values: {
        ...validation.data,
        academic_year: String(validation.data.academic_year),
        semester: String(validation.data.semester),
      },
    };
  }

  revalidatePath("/admin/course-offerings");

  revalidatePath(`/admin/course-offerings/${id}/edit`);

  redirect("/admin/course-offerings");
}
