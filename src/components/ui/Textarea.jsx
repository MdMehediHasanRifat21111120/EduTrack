"use client";

import { forwardRef, useId } from "react";

import { cn } from "@/lib/utils";

const Textarea = forwardRef(function Textarea(
  { id, label, error, required = false, className, rows = 4, ...props },
  ref,
) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}

          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <textarea
        id={textareaId}
        ref={ref}
        rows={rows}
        className={cn(
          "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900",
          "placeholder:text-gray-400",
          "outline-none transition",
          "focus:border-blue-600 focus:ring-2 focus:ring-blue-200",
          "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70",
          error && "border-red-500 focus:border-red-500 focus:ring-red-200",
          className,
        )}
        {...props}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
