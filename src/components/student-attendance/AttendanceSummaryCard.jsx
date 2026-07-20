export default function AttendanceSummaryCard({ summary }) {
  return (
    <div className="space-y-6">
      {/* Percentage */}
      <div className="rounded-lg border bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Overall Attendance</p>

            <h2 className="mt-2 text-4xl font-bold">{summary.percentage}%</h2>
          </div>

          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full ${
              summary.percentage >= 75
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            <span className="text-xl font-bold">{summary.percentage}%</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className={`h-full rounded-full ${
                summary.percentage >= 75 ? "bg-green-500" : "bg-red-500"
              }`}
              style={{
                width: `${summary.percentage}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-gray-500">Total Classes</p>

          <p className="mt-2 text-2xl font-bold">{summary.total}</p>
        </div>

        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-gray-500">Present</p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            {summary.present}
          </p>
        </div>

        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-gray-500">Absent</p>

          <p className="mt-2 text-2xl font-bold text-red-600">
            {summary.absent}
          </p>
        </div>

        <div className="rounded-lg border bg-white p-5">
          <p className="text-sm text-gray-500">Late</p>

          <p className="mt-2 text-2xl font-bold text-yellow-600">
            {summary.late}
          </p>
        </div>
      </div>
    </div>
  );
}
