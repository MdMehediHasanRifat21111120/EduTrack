"use client";

import { forwardRef, useId, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const Input = forwardRef(function Input(
  {
    id,
    label,
    error,
    required = false,
    className,
    type = "text",
    ...props
  },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" && showPassword ? "text" : type;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          ref={ref}
          type={inputType}
          className={cn(
            "h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-gray-900",
            "placeholder:text-gray-400",
            "outline-none transition",
            "focus:border-blue-600 focus:ring-2 focus:ring-blue-200",
            "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-200",
            type === "password" && "pr-10",
            className
          )}
          {...props}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;