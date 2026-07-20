import { notFound } from "next/navigation";

import { getMyCourseOfferingById } from "@/features/teacher/services";

import TeacherCourseHeader from "@/components/teacher/TeacherCourseHeader";

import TeacherCourseNavigation from "@/components/teacher/TeacherCourseNavigation";

export default async function TeacherCoursePage({ params }) {
  const { offeringId } = await params;

  let courseOffering;

  try {
    courseOffering = await getMyCourseOfferingById(offeringId);
  } catch {
    notFound();
  }

  return (
    <div className="space-y-6">
      <TeacherCourseHeader courseOffering={courseOffering} />

      <TeacherCourseNavigation offeringId={offeringId} />
    </div>
  );
}
