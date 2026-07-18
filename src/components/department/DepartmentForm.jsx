"use client";

import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function DepartmentForm({
  state,
  action,
  pending,
  department = null,
  submitText = "Create Department",
}) {
  return (
    <form action={action} className="space-y-6 rounded-lg border bg-white p-6">
      <Input
        label="Department Name"
        name="name"
        required
        error={state.errors?.name}
        defaultValue={state.values?.name ?? department?.name ?? ""}
      />

      <Input
        label="Department Code"
        name="code"
        required
        error={state.errors?.code}
        defaultValue={state.values?.code ?? department?.code ?? ""}
      />

      <Textarea
        label="Description"
        name="description"
        error={state.errors?.description}
        defaultValue={
          state.values?.description ?? department?.description ?? ""
        }
      />

      {state.message && <p className="text-sm text-red-500">{state.message}</p>}

      <div className="flex justify-end">
        <Button type="submit" disabled={pending}>
          {pending ? "Saving..." : submitText}
        </Button>
      </div>
    </form>
  );
}
