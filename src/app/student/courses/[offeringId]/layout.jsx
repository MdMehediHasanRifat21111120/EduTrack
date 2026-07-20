import { notFound } from "next/navigation";

import {
  getMyCourseOfferingById,
} from "@/features/student-attendance/services";

import StudentCourseHeader from "@/components/student/StudentCourseHeader";

import StudentCourseNavigation from "@/components/student/StudentCourseNavigation";

export default async function StudentCourseLayout({
  children,
  params,
}) {
  const {
    offeringId,
  } = await params;

  let courseOffering;

  try {
    courseOffering =
      await getMyCourseOfferingById(
        offeringId,
      );
  } catch {
    notFound();
  }

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <StudentCourseHeader
        courseOffering={
          courseOffering
        }
      />

      {/* Course Navigation */}
      <StudentCourseNavigation
        offeringId={
          offeringId
        }
      />

      {/* Page Content */}
      <main>
        {children}
      </main>
    </div>
  );
}