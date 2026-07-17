import Link from "next/link";

const roles = [
  {
    letter: "A",
    name: "Admin",
    description:
      "Manage institution-wide settings, user accounts, and system access.",
  },
  {
    letter: "D",
    name: "Dean",
    description:
      "Oversee departments, approve academic decisions, and track performance.",
  },
  {
    letter: "C",
    name: "Chairman",
    description:
      "Review institutional reports and sign off on key approvals.",
  },
  {
    letter: "T",
    name: "Teacher",
    description:
      "Take attendance, record grades, and communicate with students.",
  },
  {
    letter: "S",
    name: "Student",
    description:
      "View grades, attendance, and schedules in one place.",
  },
];

const features = [
  {
    title: "Attendance & grading",
    description:
      "Teachers record attendance and grades once — students and admins see it instantly, no spreadsheets in between.",
  },
  {
    title: "Approvals that don't stall",
    description:
      "Requests move up the chain from teacher to dean to chairman with a clear status at every step.",
  },
  {
    title: "One record per student",
    description:
      "Academic history, attendance, and department details live in a single profile, not five different files.",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Nav */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-lg font-bold tracking-tight text-slate-900">
            EduTrack
          </span>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#roles" className="hover:text-slate-900">
              Roles
            </a>
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center">
        <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          Built for institutions
        </span>

        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          One system, every role, no gaps in between
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
          EduTrack connects admins, deans, chairmen, teachers, and students
          on a single platform — so nothing gets lost between the classroom
          and the front office.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Get started
          </Link>
          <a
            href="#roles"
            className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            See how it works
          </a>
        </div>

        {/* Signature: role hierarchy ribbon */}
        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-2">
          {roles.map((role, i) => (
            <div key={role.name} className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-2 pl-2 pr-4 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                  {role.letter}
                </span>
                <span className="text-sm font-medium text-slate-900">
                  {role.name}
                </span>
              </div>
              {i < roles.length - 1 && (
                <span className="text-slate-300">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Every role sees exactly what it needs
            </h2>
            <p className="mt-3 text-slate-600">
              No role gets a stripped-down version of the same dashboard —
              each one is built around what that person actually does.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.name}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-base font-bold text-indigo-600">
                  {role.letter}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {role.name}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Everything runs through one system
          </h2>
          <p className="mt-3 text-slate-600">
            Fewer tools, fewer handoffs, less that falls through the cracks.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <h3 className="text-base font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Bring your institution onto EduTrack
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-300">
            Set up your admin account and start inviting your team.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-block rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Create your account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} EduTrack. All rights reserved.
        </div>
      </footer>
    </div>
  );
}