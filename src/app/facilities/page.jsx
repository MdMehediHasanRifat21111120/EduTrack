import Image from "next/image";
import Link from "next/link";

const facilities = [
  {
    name: "Central Library",
    description:
      "A quiet study space with academic journals, textbooks, and digital resources for all departments.",
  },
  {
    name: "Science & Engineering Labs",
    description:
      "Dedicated labs for physics, chemistry, computer science, and engineering coursework.",
  },
  {
    name: "Student Dormitory",
    description:
      "On-campus residential halls for students living outside Jamalpur.",
  },
  {
    name: "Cafeteria",
    description:
      "Affordable meals and snacks available throughout the day for students and staff.",
  },
  {
    name: "Sports Complex",
    description:
      "Facilities for football, cricket, and indoor games to support student life outside academics.",
  },
  {
    name: "Medical Center",
    description:
      "On-campus healthcare support with a resident physician for students and staff.",
  },
  {
    name: "Wi-Fi Campus",
    description:
      "Campus-wide internet access covering academic buildings, library, and dormitories.",
  },
  {
    name: "Auditorium",
    description:
      "A multi-purpose hall used for seminars, cultural events, and convocation ceremonies.",
  },
];

const stats = [
  { label: "Acres of campus", value: "50+" },
  { label: "Academic buildings", value: "3" },
  { label: "Library seats", value: "200" },
  { label: "Residential halls", value: "2" },
];

export default function FacilitiesPage() {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200 bg-emerald-900">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Campus & Facilities
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-emerald-100">
            A look at the spaces and resources supporting student life at
            JSTU.
          </p>
        </div>
      </header>

      {/* Campus image */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="relative h-64 w-full overflow-hidden rounded-xl border border-slate-200 sm:h-80">
          <Image
            src="/campus.jpg"
            alt="University campus"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-50 px-4 py-8 text-center"
            >
              <p className="text-2xl font-bold text-emerald-900">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
          On-campus facilities
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-sm font-bold text-amber-600">
                {facility.name.charAt(0)}
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {facility.name}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-emerald-900"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}