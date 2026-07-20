import {
  getMyAttendanceSummary,
  getMyAttendanceHistory,
} from "@/features/student-attendance/services";

import AttendanceSummaryCard from "@/components/student-attendance/AttendanceSummaryCard";

import AttendanceHistoryTable from "@/components/student-attendance/AttendanceHistoryTable";

export default async function StudentAttendancePage({ params }) {
  const { offeringId } = await params;

  const [summary, records] = await Promise.all([
    getMyAttendanceSummary(offeringId),

    getMyAttendanceHistory(offeringId),
  ]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>

        <p className="mt-1 text-sm text-gray-500">
          View your attendance performance and attendance history.
        </p>
      </div>

      {/* Attendance Summary */}
      <AttendanceSummaryCard summary={summary} />

      {/* Attendance History */}
      <AttendanceHistoryTable records={records} />
    </div>
  );
}
