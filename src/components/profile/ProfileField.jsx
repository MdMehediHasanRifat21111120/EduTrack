export default function ProfileField({
  label,
  value,
}) {
  return (
    <div className="grid grid-cols-[160px_1fr] gap-4 py-3 border-b border-gray-100 last:border-b-0">
      <p className="font-medium text-gray-600">
        {label}
      </p>

      <p className="text-gray-900">
        {value || "-"}
      </p>
    </div>
  );
}