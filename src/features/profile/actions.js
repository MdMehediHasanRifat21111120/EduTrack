"use server";

import { revalidatePath } from "next/cache";

import { INITIAL_PROFILE_STATE } from "./constants";
import { updateCurrentProfile } from "./services";
import { validateProfile } from "./validation";

export async function updateProfileAction(previousState, formData) {
  // 1. Extract form data
  const fullName = formData.get("fullName")?.trim() || "";
  const phone = formData.get("phone")?.trim() || "";

  // 2. Preserve values
  const values = {
    fullName,
    phone,
  };

  // 3. Validate
  const errors = validateProfile({
    fullName,
    phone,
  });

  if (Object.keys(errors).length > 0) {
    return {
      ...INITIAL_PROFILE_STATE,
      errors,
      values,
    };
  }

  // 4. Update profile
  const { error } = await updateCurrentProfile({
    fullName,
    phone,
  });

  if (error) {
    return {
      ...INITIAL_PROFILE_STATE,
      message: error.message,
      values,
    };
  }

  // 5. Refresh server components
  revalidatePath("/student/profile");

  return {
    success: true,
    message: "Profile updated successfully.",
    errors: {},
    values,
  };
}