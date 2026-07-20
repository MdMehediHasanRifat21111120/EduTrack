"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StudentCourseNavigation({ offeringId }) {
  const pathname = usePathname();

  const basePath = `/student/courses/${offeringId}`;

  const navigationItems = [
    {
      name: "Overview",
      href: basePath,
    },
    {
      name: "Attendance",
      href: `${basePath}/attendance`,
    },
  ];

  return (
    <nav className="rounded-lg border bg-white">
      <div className="flex overflow-x-auto">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b-2 px-6 py-4 text-sm font-medium transition ${
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
