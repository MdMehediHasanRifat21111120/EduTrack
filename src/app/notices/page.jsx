"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Academic", "Admission", "Exam", "General"];

const notices = [
  {
    date: "22 Jul 2026",
    title: "Fall semester admission circular published",
    category: "Admission",
  },
  {
    date: "15 Jul 2026",
    title: "Mid-term examination routine notice",
    category: "Exam",
  },
  {
    date: "05 Jul 2026",
    title: "Notice regarding hall allocation for new students",
    category: "General",
  },
  {
    date: "28 Jun 2026",
    title: "Class schedule update for CSE department",
    category: "Academic",
  },
  {
    date: "20 Jun 2026",
    title: "Application deadline extended for spring intake",
    category: "Admission",
  },
  {
    date: "10 Jun 2026",
    title: "Final exam seat plan published",
    category: "Exam",
  },
];

const categoryStyles = {
  Academic: "bg-indigo-50 text-indigo-700",
  Admission: "bg-amber-50 text-amber-700",
  Exam: "bg-rose-50 text-rose-700",
  General: "bg-slate-100 text-slate-700",
};

export default function NoticesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNotices =
    activeCategory === "All"
      ? notices
      : notices.filter((notice) => notice.category === activeCategory);

  return (
    <div className="bg-white">
      <header className="border-b border-slate-200 bg-emerald-900">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Notices
          </h1>
          <p className="mt-2 text-emerald-100">
            Official announcements from the university.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-emerald-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Notice list */}
        <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200">
          {filteredNotices.map((notice) => (
            <div
              key={notice.title}
              className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    categoryStyles[notice.category]
                  }`}
                >
                  {notice.category}
                </span>
                <p className="text-sm font-medium text-slate-900">
                  {notice.title}
                </p>
              </div>
              <p className="text-xs text-slate-500">{notice.date}</p>
            </div>
          ))}

          {filteredNotices.length === 0 && (
            <p className="px-6 py-10 text-center text-sm text-slate-500">
              No notices in this category yet.
            </p>
          )}
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
