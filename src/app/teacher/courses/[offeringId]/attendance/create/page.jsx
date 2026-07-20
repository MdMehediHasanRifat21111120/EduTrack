import { notFound } from "next/navigation";

import { getMyCourseOfferingById } from "@/features/teacher/services";

import { getEnrolledStudentsForAttendance } from "@/features/attendance/services";

import TeacherCourseHeader from "@/components/teacher/TeacherCourseHeader";

import CreateAttendanceForm from "@/components/attendance/CreateAttendanceForm";

export default async function CreateAttendancePage({ params }) {
  const { offeringId } = await params;

  let courseOffering;

  try {
    courseOffering = await getMyCourseOfferingById(offeringId);
  } catch {
    notFound();
  }

  const students = await getEnrolledStudentsForAttendance(offeringId);

  return (
    <div className="space-y-6">
      <TeacherCourseHeader courseOffering={courseOffering} />

      <div>
        <h2 className="text-2xl font-bold">Take Attendance</h2>

        <p className="mt-1 text-gray-500">
          Mark attendance for enrolled students.
        </p>
      </div>

      <CreateAttendanceForm offeringId={offeringId} students={students} />
    </div>
  );
}
