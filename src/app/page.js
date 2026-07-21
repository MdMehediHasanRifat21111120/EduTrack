import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Admission", href: "/admission" },
  { label: "Academic Calendar", href: "/academic-calendar" },
  { label: "Notices", href: "/notices" },
  { label: "Facilities", href: "/facilities" },
];

const faculties = [
  {
    name: "Science & Engineering",
    description:
      "Departments spanning core sciences and engineering disciplines.",
  },
  {
    name: "Computer Science & Engineering",
    description: "Programs in software, systems, and computing fundamentals.",
  },
  {
    name: "Business Studies",
    description: "Business administration, economics, and management programs.",
  },
  {
    name: "Arts & Humanities",
    description: "Language, literature, and social science programs.",
  },
];

const notices = [
  {
    date: "22 Jul 2026",
    title: "Fall semester admission circular published",
  },
  {
    date: "15 Jul 2026",
    title: "Mid-term examination routine notice",
  },
  {
    date: "05 Jul 2026",
    title: "Notice regarding hall allocation for new students",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Top bar */}
      <div className="bg-emerald-900 text-emerald-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs">
          <span>Government of the People&apos;s Republic of Bangladesh</span>
          <div className="hidden gap-4 sm:flex">
            <Link href="/notices" className="hover:text-white">
              Notices
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Jamalpur Science and Technology University crest"
              width={48}
              height={48}
            />
            <div>
              <p className="text-sm font-bold leading-tight text-emerald-900">
                Jamalpur Science and Technology University
              </p>
              <p className="text-xs text-slate-500">
                জামালপুর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="#about" className="hover:text-emerald-900">
              About
            </Link>
            <Link href="#faculties" className="hover:text-emerald-900">
              Faculties
            </Link>
            <Link href="#notices" className="hover:text-emerald-900">
              Notices
            </Link>
          </nav>

          <Link
            href="/admission"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
          >
            Admission
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-emerald-900">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Image
            src="/logo.png"
            alt="University crest"
            width={96}
            height={96}
            className="mx-auto"
          />
          <h1 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Jamalpur Science and Technology University
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-emerald-100">
            Advancing science, engineering, and technology education in Jamalpur
            — building the foundation for tomorrow&apos;s researchers,
            engineers, and innovators.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/admission"
              className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
            >
              Apply for Admission
            </Link>
            <Link
              href="#about"
              className="rounded-lg border border-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links strip */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="bg-slate-50 px-4 py-5 text-center text-sm font-semibold text-emerald-900 transition hover:bg-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-amber-600">
              About the university
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              A center for science and technology in Jamalpur
            </h2>
            <p className="mt-4 text-slate-600">
              Jamalpur Science and Technology University is a public university
              dedicated to research and education across science, engineering,
              and technology disciplines, preparing students to contribute to
              Bangladesh&apos;s growth in these fields.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-6 text-center">
              <p className="text-2xl font-bold text-emerald-900">4</p>
              <p className="mt-1 text-sm text-slate-500">Faculties</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 text-center">
              <p className="text-2xl font-bold text-emerald-900">2023</p>
              <p className="mt-1 text-sm text-slate-500">Established</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculties */}
      <section id="faculties" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Faculties
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {faculties.map((faculty) => (
              <div
                key={faculty.name}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-emerald-900">
                  {faculty.name}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  {faculty.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notices */}
      <section id="notices" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Latest Notices
          </h2>
          <Link
            href="/notices"
            className="text-sm font-semibold text-emerald-900 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {notices.map((notice) => (
            <div
              key={notice.title}
              className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-sm font-medium text-slate-900">
                {notice.title}
              </p>
              <p className="text-xs text-slate-500">{notice.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-emerald-950 text-emerald-100">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm">
          © {new Date().getFullYear()} Jamalpur Science and Technology
          University. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
