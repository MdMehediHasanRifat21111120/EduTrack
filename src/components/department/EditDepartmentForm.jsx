"use client";

import { useActionState } from "react";

import DepartmentForm from "./DepartmentForm";

import { updateDepartmentAction } from "@/features/department/actions";
import { initialState } from "@/features/department/constants";

export default function EditDepartmentForm({ department }) {
  const [state, formAction, pending] = useActionState(
    updateDepartmentAction.bind(null, department.id),
    initialState,
  );

  return (
    <DepartmentForm
      department={department}
      state={state}
      action={formAction}
      pending={pending}
      submitText="Update Department"
    />
  );
}
