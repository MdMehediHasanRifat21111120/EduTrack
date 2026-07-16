import Link from "next/link";

export default function SidebarHeader() {
  return (
    <div className="border-b px-6 py-5">
      <Link
        href="/dashboard"
        className="text-2xl font-bold text-blue-600"
      >
        EduTrack
      </Link>
    </div>
  );
}