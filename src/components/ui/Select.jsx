"use client";

import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

const Select = forwardRef(function Select(
  { id, label, error, required = false, className, children, ...props },
  ref,
) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}

          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <select
        id={selectId}
        ref={ref}
        className={cn(
          "h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-gray-900",
          "outline-none transition",
          "focus:border-blue-600 focus:ring-2 focus:ring-blue-200",
          "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70",
          error && "border-red-500 focus:border-red-500 focus:ring-red-200",
          className,
        )}
        {...props}
      >
        {children}
      </select>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
