import Link from "next/link";

const contactDetails = [
  {
    label: "Address",
    value: "Jamalpur Science and Technology University, Jamalpur, Bangladesh",
  },
  {
    label: "Phone",
    value: "+880-XXX-XXXXXX",
  },
  {
    label: "Email",
    value: "info@jstu.ac.bd",
  },
  {
    label: "Office Hours",
    value: "Sunday – Thursday, 9:00 AM – 5:00 PM",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <header className="border-b border-slate-200 bg-emerald-900">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Contact Us
          </h1>
          <p className="mt-2 text-emerald-100">
            Reach out to the university administration.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200">
          {contactDetails.map((item) => (
            <div key={item.label} className="px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center text-sm font-medium text-slate-500 hover:text-emerald-900"
        >
          ← Back to home
        </Link>
      </section>
    </div>
  );
}