import Link from "next/link";
import { notFound } from "next/navigation";

import { getMyCourseOfferingById } from "@/features/teacher/services";

import { getAttendanceSessionById } from "@/features/attendance/services";

import TeacherCourseHeader from "@/components/teacher/TeacherCourseHeader";

import EditAttendanceFormWrapper from "@/components/attendance/EditAttendanceFormWrapper";

export default async function EditAttendancePage({ params }) {
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

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold">Edit Attendance</h2>

          <div className="mt-2 text-gray-500">
            <p>
              Date: {new Date(session.attendance_date).toLocaleDateString()}
            </p>

            {session.topic && <p>Topic: {session.topic}</p>}
          </div>
        </div>

        <Link
          href={`/teacher/courses/${offeringId}/attendance/${sessionId}`}
          className="rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </Link>
      </div>

      <EditAttendanceFormWrapper
        offeringId={offeringId}
        sessionId={sessionId}
        records={session.attendance_records}
      />
    </div>
  );
}
