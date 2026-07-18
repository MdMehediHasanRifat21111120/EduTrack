"use client";

import { useActionState } from "react";

import { createDepartmentAction } from "@/features/department/actions";
import { initialState } from "@/features/department/constants";

import DepartmentForm from "./DepartmentForm";

export default function CreateDepartmentForm() {
  const [state, formAction, pending] = useActionState(
    createDepartmentAction,
    initialState,
  );

  return (
    <DepartmentForm
      state={state}
      action={formAction}
      pending={pending}
    />
  );
}