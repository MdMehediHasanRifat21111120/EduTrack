import { PASSWORD_MIN_LENGTH } from "./constants";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSignUp({ fullName, email, password, confirmPassword }) {
  const errors = {};

  if (!fullName) {
    errors.fullName = "Full name is required.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < PASSWORD_MIN_LENGTH) {
    errors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`;
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}

export function validateSignIn({ email, password }) {
  const errors = {};

  if (!email) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  }

  return errors;
}
