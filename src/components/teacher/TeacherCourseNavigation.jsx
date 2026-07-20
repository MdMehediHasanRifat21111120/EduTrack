"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TeacherCourseNavigation({
  offeringId,
}) {
  const pathname =
    usePathname();

  const basePath =
    `/teacher/courses/${offeringId}`;

  const navigation = [
    {
      name: "Overview",
      href: basePath,
    },
    {
      name: "Students",
      href: `${basePath}/students`,
    },
    {
      name: "Attendance",
      href: `${basePath}/attendance`,
    },
  ];

  return (
    <nav className="border-b">
      <div className="flex gap-6 overflow-x-auto">
        {navigation.map(
          (item) => {
            const isActive =
              item.name ===
              "Overview"
                ? pathname ===
                  item.href
                : pathname.startsWith(
                    item.href,
                  );

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`border-b-2 px-1 py-3 text-sm font-medium transition ${
                  isActive
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            );
          },
        )}
      </div>
    </nav>
  );
}