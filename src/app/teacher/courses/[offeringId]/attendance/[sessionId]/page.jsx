import Link from "next/link";
import { notFound } from "next/navigation";

import { getMyCourseOfferingById } from "@/features/teacher/services";

import { getAttendanceSessionById } from "@/features/attendance/services";

import TeacherCourseHeader from "@/components/teacher/TeacherCourseHeader";

import AttendanceDetailsTable from "@/components/attendance/AttendanceDetailsTable";

export default async function AttendanceDetailsPage({ params }) {
  const { offeringId, sessionId } = await params;

  let courseOffering;
  let session;

  try {
    courseOffering = await getMyCourseOfferingById(offeringId);

    session = await getAttendanceSessionById(offeringId, sessionId);
  } catch {
    notFound();
  }

  return (
    <div className="space-y-6">
      <TeacherCourseHeader courseOffering={courseOffering} />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Attendance Details</h2>

          <div className="mt-2 space-y-1 text-gray-500">
            <p>
              Date: {new Date(session.attendance_date).toLocaleDateString()}
            </p>

            {session.topic && <p>Topic: {session.topic}</p>}
          </div>
        </div>

        <Link
          href={`/teacher/courses/${offeringId}/attendance/${sessionId}/edit`}
          className="rounded-lg border px-4 py-2 font-medium text-blue-600 hover:bg-gray-50"
        >
          Edit Attendance
        </Link>
      </div>

      {/* Attendance Records */}
      <AttendanceDetailsTable records={session.attendance_records} />
    </div>
  );
}
