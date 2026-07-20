"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

export default function AttendanceForm({ action, pending, students, state }) {
  const [records, setRecords] = useState(
    students.map((item) => ({
      student_id: item.student_id,
      status: "present",
    })),
  );

  function handleStatusChange(studentId, status) {
    setRecords((current) =>
      current.map((record) =>
        record.student_id === studentId
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
      {/* Date and Topic */}
      <div className="rounded-lg border bg-white p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="attendance_date"
              className="mb-2 block text-sm font-medium"
            >
              Attendance Date
            </label>

            <input
              id="attendance_date"
              name="attendance_date"
              type="date"
              required
              className="w-full rounded-lg border px-3 py-2"
            />

            {state.errors?.attendance_date && (
              <p className="mt-1 text-sm text-red-500">
                {state.errors.attendance_date}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="topic" className="mb-2 block text-sm font-medium">
              Topic
            </label>

            <input
              id="topic"
              name="topic"
              type="text"
              placeholder="Introduction to C"
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Students */}
      <div className="overflow-hidden rounded-lg border bg-white">
        <div className="border-b p-4">
          <h2 className="font-semibold">Students</h2>
        </div>

        <div className="divide-y">
          {students.map((item) => {
            const student = item.student;

            const record = records.find(
              (r) => r.student_id === item.student_id,
            );

            return (
              <div
                key={item.student_id}
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
                    value={record?.status || "present"}
                    onChange={(e) =>
                      handleStatusChange(item.student_id, e.target.value)
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

      {/* Hidden records */}
      <input type="hidden" name="records" value={JSON.stringify(records)} />

      {state.message && <p className="text-sm text-red-500">{state.message}</p>}

      <div className="flex justify-end">
        <Button type="submit" disabled={pending}>
          {pending ? "Saving..." : "Save Attendance"}
        </Button>
      </div>
    </form>
  );
}
