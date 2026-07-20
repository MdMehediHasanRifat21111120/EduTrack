import Link from "next/link";
import { notFound } from "next/navigation";

import { getMyCourseOfferingById } from "@/features/teacher/services";

import { getAttendanceSessions } from "@/features/attendance/services";

import TeacherCourseHeader from "@/components/teacher/TeacherCourseHeader";

import AttendanceTable from "@/components/attendance/AttendanceTable";

export default async function AttendancePage({ params }) {
  const { offeringId } = await params;

  let courseOffering;

  try {
    courseOffering = await getMyCourseOfferingById(offeringId);
  } catch {
    notFound();
  }

  const sessions = await getAttendanceSessions(offeringId);

  return (
    <div className="space-y-6">
      <TeacherCourseHeader courseOffering={courseOffering} />

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Attendance</h2>

          <p className="mt-1 text-gray-500">
            Manage attendance for this course.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href={`/teacher/courses/${offeringId}/attendance/summary`}
            className="rounded-lg border px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
          >
            Summary
          </Link>

          <Link
            href={`/teacher/courses/${offeringId}/attendance/create`}
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Take Attendance
          </Link>
        </div>
      </div>

      <AttendanceTable sessions={sessions} offeringId={offeringId} />
    </div>
  );
}
