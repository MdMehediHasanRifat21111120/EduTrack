"use client";

import Link from "next/link";
import { useActionState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { signInAction } from "@/features/auth/actions";
import { INITIAL_AUTH_STATE } from "@/features/auth/constants";

export default function SignInForm() {
  const [state, formAction, isPending] = useActionState(
    signInAction,
    INITIAL_AUTH_STATE,
  );

  return (
    <form action={formAction} className="space-y-5">
      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        defaultValue={state.values.email}
        error={state.errors.email}
      />

      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        error={state.errors.password}
      />

      {state.message && (
        <div
          role="status"
          className={`rounded-lg border px-4 py-3 text-sm font-medium ${
            state.success
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {state.message}
        </div>
      )}

      <Button type="submit" className="w-full" loading={isPending}>
        Sign In
      </Button>

      <p className="text-center text-sm text-slate-600">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-slate-900 underline-offset-4 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
