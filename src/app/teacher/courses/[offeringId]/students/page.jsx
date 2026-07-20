import { notFound } from "next/navigation";

import {
  getMyCourseOfferingById,
  getMyCourseOfferingStudents,
} from "@/features/teacher/services";

import TeacherCourseHeader from "@/components/teacher/TeacherCourseHeader";

import TeacherCourseStudentTable from "@/components/teacher/TeacherCourseStudentTable";

export default async function TeacherCourseStudentsPage({ params }) {
  const { offeringId } = await params;

  let courseOffering;

  try {
    courseOffering = await getMyCourseOfferingById(offeringId);
  } catch {
    notFound();
  }

  const enrollments = await getMyCourseOfferingStudents(offeringId);

  return (
    <div className="space-y-6">
      <TeacherCourseHeader courseOffering={courseOffering} />

      <div>
        <h2 className="text-2xl font-bold">Students</h2>

        <p className="mt-1 text-gray-500">
          Students enrolled in this course offering.
        </p>
      </div>

      <TeacherCourseStudentTable enrollments={enrollments} />
    </div>
  );
}
