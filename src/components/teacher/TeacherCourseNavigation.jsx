import Link from "next/link";

export default function TeacherCourseNavigation({
  offeringId,
}) {
  const baseUrl =
    `/teacher/courses/${offeringId}`;

  const links = [
    {
      label: "Students",
      href: `${baseUrl}/students`,
    },
    {
      label: "Attendance",
      href: `${baseUrl}/attendance`,
    },
    {
      label: "Assignments",
      href: `${baseUrl}/assignments`,
    },
    {
      label: "Quizzes",
      href: `${baseUrl}/quizzes`,
    },
    {
      label: "Class Tests",
      href: `${baseUrl}/class-tests`,
    },
    {
      label: "Marks",
      href: `${baseUrl}/marks`,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-lg border bg-white p-5 font-medium transition hover:border-blue-500 hover:shadow-sm"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}