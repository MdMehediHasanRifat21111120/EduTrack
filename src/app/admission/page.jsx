import Link from "next/link";

const eligibility = [
  "Passed HSC or equivalent examination with a minimum GPA as set by the admission committee",
  "Science background required for Engineering and CSE programs",
  "Must appear in the university admission test",
];

const steps = [
  {
    step: "1",
    title: "Submit application",
    description: "Fill out the online admission form with academic records.",
  },
  {
    step: "2",
    title: "Admission test",
    description: "Sit for the written admission test on the scheduled date.",
  },
  {
    step: "3",
    title: "Merit list",
    description: "Check the published merit list for your result.",
  },
  {
    step: "4",
    title: "Enrollment",
    description: "Complete payment and document submission to confirm your seat.",
  },
];

const importantDates = [
  { label: "Application opens", date: "1 Aug 2026" },
  { label: "Application closes", date: "30 Aug 2026" },
  { label: "Admission test", date: "12 Sep 2026" },
  { label: "Merit list publication", date: "20 Sep 2026" },
];

export default function AdmissionPage() {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200 bg-emerald-900">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <span className="inline-block rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
            Admissions 2026 – 2027
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white">
            Admission
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-emerald-100">
            Everything you need to know to apply to Jamalpur Science and
            Technology University.
          </p>
        </div>
      </header>

      {/* Eligibility */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Eligibility
        </h2>
        <ul className="mt-6 space-y-3">
          {eligibility.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                ✓
              </span>
              <span className="text-sm text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            How to apply
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important dates */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Important dates
        </h2>

        <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {importantDates.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-6 py-4"
            >
              <p className="text-sm font-medium text-slate-900">
                {item.label}
              </p>
              <p className="text-sm text-emerald-900 font-semibold">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-emerald-950">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Ready to apply?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-emerald-100">
            Applications open on 1 August 2026.
          </p>
          <Link
            href="/sign-up"
            className="mt-6 inline-block rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
          >
            Start application
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-8">
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