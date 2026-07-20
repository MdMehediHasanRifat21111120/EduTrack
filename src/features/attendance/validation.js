export function validateAttendance(formData) {
  const attendance_date = formData.get("attendance_date")?.trim() || "";

  const topic = formData.get("topic")?.trim() || "";

  const recordsRaw = formData.get("records");

  let records = [];

  try {
    records = recordsRaw ? JSON.parse(recordsRaw) : [];
  } catch {
    return {
      success: false,
      errors: {
        records: "Invalid attendance data.",
      },
      data: {
        attendance_date,
        topic,
        records: [],
      },
    };
  }

  const errors = {};

  if (!attendance_date) {
    errors.attendance_date = "Attendance date is required.";
  }

  if (!records.length) {
    errors.records = "No students found for attendance.";
  }

  const validStatuses = ["present", "absent", "late"];

  records.forEach((record, index) => {
    if (!record.student_id) {
      errors[`student_${index}`] = "Student is required.";
    }

    if (!validStatuses.includes(record.status)) {
      errors[`student_${index}`] = "Invalid attendance status.";
    }
  });

  return {
    success: Object.keys(errors).length === 0,
    errors,
    data: {
      attendance_date,
      topic,
      records,
    },
  };
}
export function validateAttendanceUpdate(
  formData,
) {
  const recordsRaw =
    formData.get("records");

  let records = [];

  try {
    records = recordsRaw
      ? JSON.parse(recordsRaw)
      : [];
  } catch {
    return {
      success: false,
      errors: {
        records:
          "Invalid attendance data.",
      },
      data: {
        records: [],
      },
    };
  }

  const errors = {};

  const validStatuses = [
    "present",
    "absent",
    "late",
  ];

  if (!records.length) {
    errors.records =
      "No attendance records found.";
  }

  records.forEach(
    (record, index) => {
      if (!record.id) {
        errors[`record_${index}`] =
          "Attendance record is required.";
      }

      if (
        !validStatuses.includes(
          record.status,
        )
      ) {
        errors[`record_${index}`] =
          "Invalid attendance status.";
      }
    },
  );

  return {
    success:
      Object.keys(errors).length === 0,
    errors,
    data: {
      records,
    },
  };
}