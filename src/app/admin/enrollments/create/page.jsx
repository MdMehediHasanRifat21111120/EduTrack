import {
  getStudentsForEnrollment,
  getCourseOfferingsForEnrollment,
} from "@/features/enrollment/services";

import CreateEnrollmentForm from "@/components/enrollment/CreateEnrollmentForm";

export default async function CreateEnrollmentPage() {
  const [students, courseOfferings] = await Promise.all([
    getStudentsForEnrollment(),
    getCourseOfferingsForEnrollment(),
  ]);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Enroll Student</h1>

        <p className="text-gray-500">Enroll a student in a course offering.</p>
      </div>

      <CreateEnrollmentForm
        students={students}
        courseOfferings={courseOfferings}
      />
    </div>
  );
}
