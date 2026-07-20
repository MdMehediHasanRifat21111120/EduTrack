import Link from "next/link";
import { notFound } from "next/navigation";

import { getMyCourseOfferingById } from "@/features/teacher/services";

import { getAttendanceSummary } from "@/features/attendance/services";

import TeacherCourseHeader from "@/components/teacher/TeacherCourseHeader";

import AttendanceSummaryTable from "@/components/attendance/AttendanceSummaryTable";

export default async function AttendanceSummaryPage({ params }) {
  const { offeringId } = await params;

  let courseOffering;

  try {
    courseOffering = await getMyCourseOfferingById(offeringId);
  } catch {
    notFound();
  }

  const summary = await getAttendanceSummary(offeringId);

  return (
    <div className="space-y-6">
      <TeacherCourseHeader courseOffering={courseOffering} />

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold">Attendance Summary</h2>

          <p className="mt-1 text-gray-500">
            View overall attendance performance for all students.
          </p>
        </div>

        <Link
          href={`/teacher/courses/${offeringId}/attendance`}
          className="rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-50"
        >
          Attendance Sessions
        </Link>
      </div>

      <AttendanceSummaryTable summary={summary} />
    </div>
  );
}
