export function validateDepartment(formData) {
  const data = {
    name: formData.get("name")?.trim() ?? "",
    code: formData.get("code")?.trim().toUpperCase() ?? "",
    description: formData.get("description")?.trim() ?? "",
  };

  const errors = {};

  if (!data.name) {
    errors.name = "Department name is required.";
  }

  if (!data.code) {
    errors.code = "Department code is required.";
  }

  return {
    success: Object.keys(errors).length === 0,
    data,
    errors,
  };
}
