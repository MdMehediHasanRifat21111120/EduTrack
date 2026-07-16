"use server";
import { redirect } from "next/navigation";
import { INITIAL_AUTH_STATE } from "./constants";
import { signUpUser, signInUser,signOutUser } from "./services";
import { validateSignUp, validateSignIn } from "./validation";

export async function signUpAction(previousState, formData) {
  // 1. Extract form values
  const fullName = formData.get("fullName")?.trim() || "";
  const email = formData.get("email")?.trim() || "";
  const password = formData.get("password") || "";
  const confirmPassword = formData.get("confirmPassword") || "";

  // Values we want to preserve if validation fails
  const values = {
    fullName,
    email,
  };

  // 2. Validate input
  const errors = validateSignUp({
    fullName,
    email,
    password,
    confirmPassword,
  });

  // 3. Return validation errors
  if (Object.keys(errors).length > 0) {
    return {
      ...INITIAL_AUTH_STATE,
      errors,
      values,
    };
  }

  // 4. Create user
  const { error } = await signUpUser({
    fullName,
    email,
    password,
  });

  // 5. Handle Supabase error
  if (error) {
    return {
      ...INITIAL_AUTH_STATE,
      message: error.message,
      values,
    };
  }

  // 6. Success
  return {
    success: true,
    message: "Account created successfully. Please verify your email.",
    errors: {},
    values: {
      fullName: "",
      email: "",
    },
  };
}

export async function signInAction(previousState, formData) {
  // 1. Extract form data
  const email = formData.get("email")?.trim() || "";
  const password = formData.get("password") || "";

  // 2. Preserve non-sensitive values
  const values = {
    email,
  };

  // 3. Validate
  const errors = validateSignIn({
    email,
    password,
  });

  if (Object.keys(errors).length > 0) {
    return {
      ...INITIAL_AUTH_STATE,
      errors,
      values,
    };
  }

  // 4. Authenticate user
  const { data, error } = await signInUser({
    email,
    password,
  });

  // 5. Authentication failed
  if (error) {
    return {
      ...INITIAL_AUTH_STATE,
      message: "Invalid email or password.",
      values,
    };
  }
  console.log(data.session);
  console.log(error);
  // 6. Authentication succeeded
  redirect("/dashboard");
}
export async function signOutAction() {
  const { error } = await signOutUser();

  if (error) {
    throw new Error(error.message);
  }

  redirect("/signin");
}
