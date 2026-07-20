"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

export default function EditAttendanceForm({
  action,
  pending,
  records,
  state,
}) {
  const [attendanceRecords, setAttendanceRecords] = useState(
    records.map((record) => ({
      id: record.id,
      student_id: record.student_id,
      status: record.status,
      student: record.student,
    })),
  );

  function handleStatusChange(recordId, status) {
    setAttendanceRecords((current) =>
      current.map((record) =>
        record.id === recordId
          ? {
              ...record,
              status,
            }
          : record,
      ),
    );
  }

  return (
    <form action={action} className="space-y-6">
      <div className="overflow-hidden rounded-lg border bg-white">
        <div className="border-b p-4">
          <h2 className="font-semibold">Students</h2>
        </div>

        <div className="divide-y">
          {attendanceRecords.map((record) => {
            const student = record.student;

            return (
              <div
                key={record.id}
                className="flex items-center justify-between gap-4 p-4"
              >
                <div>
                  <p className="font-medium">{student?.student_id}</p>

                  <p className="text-sm text-gray-500">
                    {student?.profile?.full_name}
                  </p>
                </div>

                <div className="w-40">
                  <Select
                    value={record.status}
                    onChange={(e) =>
                      handleStatusChange(record.id, e.target.value)
                    }
                  >
                    <option value="present">Present</option>

                    <option value="absent">Absent</option>

                    <option value="late">Late</option>
                  </Select>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <input
        type="hidden"
        name="records"
        value={JSON.stringify(
          attendanceRecords.map((record) => ({
            id: record.id,
            status: record.status,
          })),
        )}
      />

      {state.message && <p className="text-sm text-red-500">{state.message}</p>}

      <div className="flex justify-end">
        <Button type="submit" disabled={pending}>
          {pending ? "Updating..." : "Update Attendance"}
        </Button>
      </div>
    </form>
  );
}
