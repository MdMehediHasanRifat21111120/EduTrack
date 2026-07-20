import { notFound } from "next/navigation";

import {
  getEnrollmentById,
  getStudentsForEnrollment,
  getCourseOfferingsForEnrollment,
} from "@/features/enrollment/services";

import EditEnrollmentForm from "@/components/enrollment/EditEnrollmentForm";

export default async function EditEnrollmentPage({
  params,
}) {
  const { id } = await params;

  let enrollment;

  try {
    enrollment =
      await getEnrollmentById(id);
  } catch {
    notFound();
  }

  const [
    students,
    courseOfferings,
  ] = await Promise.all([
    getStudentsForEnrollment(),
    getCourseOfferingsForEnrollment(),
  ]);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Enrollment
        </h1>

        <p className="text-gray-500">
          Update the student's course enrollment.
        </p>
      </div>

      <EditEnrollmentForm
        enrollment={enrollment}
        students={students}
        courseOfferings={
          courseOfferings
        }
      />
    </div>
  );
}