"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  User,
  Settings,
  GraduationCap,
  Boxes,
  BookOpen,
  Presentation,
} from "lucide-react";

const ICONS = {
  dashboard: LayoutDashboard,
  user: User,
  settings: Settings,
  graduationcap:GraduationCap,
  boxes:Boxes,
  bookopen:BookOpen,
  presentation:Presentation,
};

export default function SidebarItem({
  href,
  label,
  icon,
}) {
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  const Icon = ICONS[icon];

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {Icon && <Icon size={20} />}

      <span>{label}</span>
    </Link>
  );
}