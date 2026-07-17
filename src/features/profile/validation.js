export function validateProfile({ fullName, phone }) {
  const errors = {};

  if (!fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!phone.trim()) {
    errors.phone = "Phone number is required.";
  }

  return errors;
}