import { createClient } from "@/lib/supabase/server";
import { getCurrentTeacher } from "@/features/teacher/services";

/**
 * Verify that the current teacher owns the course offering.
 */
async function verifyTeacherCourseOffering(offeringId) {
  const supabase = await createClient();

  const teacher = await getCurrentTeacher();

  const { data, error } = await supabase
    .from("course_offerings")
    .select("id")
    .eq("id", offeringId)
    .eq("teacher_id", teacher.id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Get all attendance sessions
 * for a specific course offering.
 */
export async function getAttendanceSessions(offeringId) {
  const supabase = await createClient();

  await verifyTeacherCourseOffering(offeringId);

  const { data, error } = await supabase
    .from("attendance_sessions")
    .select(
      `
        id,
        attendance_date,
        topic,
        created_at
      `,
    )
    .eq("course_offering_id", offeringId)
    .order("attendance_date", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Get a single attendance session
 * with all attendance records.
 */
export async function getAttendanceSessionById(offeringId, sessionId) {
  const supabase = await createClient();

  await verifyTeacherCourseOffering(offeringId);

  const { data, error } = await supabase
    .from("attendance_sessions")
    .select(
      `
        id,
        course_offering_id,
        attendance_date,
        topic,
        created_at,

        attendance_records (
          id,
          student_id,
          status,

          student:students (
            id,
            student_id,

            profile:profiles (
              id,
              full_name,
              email
            )
          )
        )
      `,
    )
    .eq("id", sessionId)
    .eq("course_offering_id", offeringId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Get all students enrolled
 * in a specific course offering.
 */
export async function getEnrolledStudentsForAttendance(offeringId) {
  const supabase = await createClient();

  await verifyTeacherCourseOffering(offeringId);

  const { data, error } = await supabase
    .from("enrollments")
    .select(
      `
        student_id,

        student:students (
          id,
          student_id,

          profile:profiles (
            full_name,
            email
          )
        )
      `,
    )
    .eq("course_offering_id", offeringId)
    .order("student_id");

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Create a new attendance session.
 */
export async function createAttendanceSession(
  offeringId,
  { attendance_date, topic },
) {
  const supabase = await createClient();

  await verifyTeacherCourseOffering(offeringId);

  const { data, error } = await supabase
    .from("attendance_sessions")
    .insert({
      course_offering_id: offeringId,
      attendance_date,
      topic,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Update an attendance session.
 */
export async function updateAttendanceSession(
  offeringId,
  sessionId,
  { attendance_date, topic },
) {
  const supabase = await createClient();

  await verifyTeacherCourseOffering(offeringId);

  const { data, error } = await supabase
    .from("attendance_sessions")
    .update({
      attendance_date,
      topic,
    })
    .eq("id", sessionId)
    .eq("course_offering_id", offeringId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Create attendance records.
 */

export async function createAttendanceRecords(offeringId, sessionId, records) {
  const supabase = await createClient();

  // 1. Verify that the current teacher
  // owns this course offering.
  await verifyTeacherCourseOffering(offeringId);

  // 2. Verify that the attendance
  // session belongs to this course offering.
  const { data: session, error: sessionError } = await supabase
    .from("attendance_sessions")
    .select("id")
    .eq("id", sessionId)
    .eq("course_offering_id", offeringId)
    .single();

  if (sessionError) {
    throw sessionError;
  }

  // 3. Get all enrolled students
  // for this course offering.
  const { data: enrollments, error: enrollmentError } = await supabase
    .from("enrollments")
    .select("student_id")
    .eq("course_offering_id", offeringId);

  if (enrollmentError) {
    throw enrollmentError;
  }

  // Create a Set for fast lookup.
  const enrolledStudentIds = new Set(
    enrollments.map((enrollment) => enrollment.student_id),
  );

  // 4. Verify every submitted student
  // is actually enrolled.
  const invalidStudent = records.find(
    (record) => !enrolledStudentIds.has(record.student_id),
  );

  if (invalidStudent) {
    throw new Error("One or more students are not enrolled in this course.");
  }

  // 5. Prepare records.
  const attendanceRecords = records.map((record) => ({
    attendance_session_id: session.id,

    student_id: record.student_id,

    status: record.status,
  }));

  // 6. Insert attendance records.
  const { data, error } = await supabase
    .from("attendance_records")
    .insert(attendanceRecords)
    .select();

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Update attendance records.
 */
export async function updateAttendanceRecords(offeringId, sessionId, records) {
  const supabase = await createClient();

  // Verify teacher owns this course
  await verifyTeacherCourseOffering(offeringId);

  // Verify session belongs to
  // this course offering
  const { data: session, error: sessionError } = await supabase
    .from("attendance_sessions")
    .select("id")
    .eq("id", sessionId)
    .eq("course_offering_id", offeringId)
    .single();

  if (sessionError) {
    throw sessionError;
  }

  const results = [];

  for (const record of records) {
    const { id, status } = record;

    const { data, error } = await supabase
      .from("attendance_records")
      .update({
        status,
      })
      .eq("id", id)
      .eq("attendance_session_id", session.id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    results.push(data);
  }

  return results;
}
export async function getAttendanceSummary(offeringId) {
  const supabase = await createClient();

  // Verify that the current teacher
  // owns this course offering.
  await verifyTeacherCourseOffering(offeringId);

  // Get all enrolled students.
  const { data: enrollments, error: enrollmentError } = await supabase
    .from("enrollments")
    .select(
      `
      student_id,

      student:students (
        id,
        student_id,

        profile:profiles (
          full_name,
          email
        )
      )
    `,
    )
    .eq("course_offering_id", offeringId)
    .order("student_id");

  if (enrollmentError) {
    throw enrollmentError;
  }

  // Get all attendance sessions.
  const { data: sessions, error: sessionError } = await supabase
    .from("attendance_sessions")
    .select("id")
    .eq("course_offering_id", offeringId);

  if (sessionError) {
    throw sessionError;
  }

  // No attendance sessions yet.
  if (!sessions.length) {
    return enrollments.map((enrollment) => ({
      student_id: enrollment.student_id,

      student: enrollment.student,

      present: 0,
      absent: 0,
      late: 0,
      total: 0,
      percentage: 0,
    }));
  }

  const sessionIds = sessions.map((session) => session.id);

  // Get attendance records.
  const { data: records, error: recordError } = await supabase
    .from("attendance_records")
    .select(
      `
      student_id,
      status
    `,
    )
    .in("attendance_session_id", sessionIds);

  if (recordError) {
    throw recordError;
  }

  // Create a map for quick lookup.
  const summaryMap = new Map();

  enrollments.forEach((enrollment) => {
    summaryMap.set(enrollment.student_id, {
      student_id: enrollment.student_id,

      student: enrollment.student,

      present: 0,
      absent: 0,
      late: 0,
      total: 0,
      percentage: 0,
    });
  });

  // Count attendance.
  records.forEach((record) => {
    const summary = summaryMap.get(record.student_id);

    // Ignore records for students
    // not found in the enrollment list.
    if (!summary) {
      return;
    }

    summary.total += 1;

    if (record.status === "present") {
      summary.present += 1;
    }

    if (record.status === "absent") {
      summary.absent += 1;
    }

    if (record.status === "late") {
      summary.late += 1;
    }
  });

  // Calculate percentage.
  summaryMap.forEach((summary) => {
    if (summary.total > 0) {
      summary.percentage = Math.round(
        ((summary.present + summary.late) / summary.total) * 100,
      );
    }
  });

  return Array.from(summaryMap.values());
}
