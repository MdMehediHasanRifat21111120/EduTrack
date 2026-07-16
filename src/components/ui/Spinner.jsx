import { cn } from "@/lib/utils";

const sizes = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

export default function Spinner({ size = "md", className }) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        sizes[size],
        className,
      )}
    />
  );
}
