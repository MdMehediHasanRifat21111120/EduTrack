"use client";

import { useActionState, useEffect } from "react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { updateProfileAction } from "@/features/profile/actions";
import { INITIAL_PROFILE_STATE } from "@/features/profile/constants";

export default function ProfileForm({ profile, onCancel }) {
  const [state, formAction, isPending] = useActionState(
    updateProfileAction,
    INITIAL_PROFILE_STATE,
  );

  // Close form after successful update
  useEffect(() => {
    if (state.success) {
      onCancel();
    }
  }, [state.success, onCancel]);

  return (
    <form action={formAction} className="space-y-5">
      <Input
        id="fullName"
        name="fullName"
        label="Full Name"
        defaultValue={state.values.fullName || profile.full_name}
        error={state.errors.fullName}
      />

      <Input
        id="phone"
        name="phone"
        label="Phone"
        defaultValue={state.values.phone || profile.phone}
        error={state.errors.phone}
      />

      {state.message && (
        <p
          className={`text-sm ${
            state.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}

      <div className="flex justify-end gap-3">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>

        <Button type="submit" loading={isPending}>
          Save Changes
        </Button>
      </div>
    </form>
  );
}
