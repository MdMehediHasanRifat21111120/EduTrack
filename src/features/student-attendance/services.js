import { createClient } from "@/lib/supabase/server";

/**
 * Get the currently authenticated student.
 */
async function getCurrentStudent() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    throw new Error("User is not authenticated.");
  }

  const { data: student, error } = await supabase
    .from("students")
    .select(
      `
      id,
      student_id,
      profile_id
    `,
    )
    .eq("profile_id", user.id)
    .single();

  if (error) {
    throw error;
  }

  return student;
}

/**
 * Verify that the current student
 * is enrolled in a specific course offering.
 */
async function verifyStudentEnrollment(offeringId, studentId) {
  const supabase = await createClient();

  const { data: enrollment, error } = await supabase
    .from("enrollments")
    .select("id")
    .eq("course_offering_id", offeringId)
    .eq("student_id", studentId)
    .single();

  if (error) {
    throw error;
  }

  return enrollment;
}

/**
 * Get all attendance sessions
 * for a course offering.
 */
async function getAttendanceSessions(offeringId) {
  const supabase = await createClient();

  const { data: sessions, error } = await supabase
    .from("attendance_sessions")
    .select(
      `
      id,
      attendance_date,
      topic
    `,
    )
    .eq("course_offering_id", offeringId)
    .order("attendance_date", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return sessions;
}

/**
 * Get the logged-in student's
 * attendance summary for a course.
 */
export async function getMyAttendanceSummary(offeringId) {
  const supabase = await createClient();

  // Get current student.
  const student = await getCurrentStudent();

  // Make sure student is enrolled.
  await verifyStudentEnrollment(offeringId, student.id);

  // Get all attendance sessions.
  const sessions = await getAttendanceSessions(offeringId);

  // No attendance sessions yet.
  if (sessions.length === 0) {
    return {
      present: 0,
      absent: 0,
      late: 0,
      total: 0,
      percentage: 0,
    };
  }

  const sessionIds = sessions.map((session) => session.id);

  // Get this student's
  // attendance records.
  const { data: records, error } = await supabase
    .from("attendance_records")
    .select(
      `
      id,
      attendance_session_id,
      status
    `,
    )
    .eq("student_id", student.id)
    .in("attendance_session_id", sessionIds);

  if (error) {
    throw error;
  }

  const present = records.filter(
    (record) => record.status === "present",
  ).length;

  const late = records.filter((record) => record.status === "late").length;

  /*
   * Any session where the student
   * does not have a record is
   * treated as absent.
   */
  const total = sessions.length;

  const absent = total - present - late;

  /*
   * Present and late count as
   * attended classes.
   */
  const percentage =
    total > 0 ? Math.round(((present + late) / total) * 100) : 0;

  return {
    present,
    absent,
    late,
    total,
    percentage,
  };
}

/**
 * Get the logged-in student's
 * attendance history for a course.
 */
export async function getMyAttendanceHistory(offeringId) {
  const supabase = await createClient();

  // Get current student.
  const student = await getCurrentStudent();

  // Make sure student is enrolled.
  await verifyStudentEnrollment(offeringId, student.id);

  // Get all attendance sessions.
  const sessions = await getAttendanceSessions(offeringId);

  // No sessions yet.
  if (sessions.length === 0) {
    return [];
  }

  const sessionIds = sessions.map((session) => session.id);

  // Get this student's
  // attendance records.
  const { data: records, error } = await supabase
    .from("attendance_records")
    .select(
      `
      id,
      attendance_session_id,
      status
    `,
    )
    .eq("student_id", student.id)
    .in("attendance_session_id", sessionIds);

  if (error) {
    throw error;
  }

  /*
   * Create a map of attendance
   * sessions for quick lookup.
   */
  const sessionMap = new Map(sessions.map((session) => [session.id, session]));

  /*
   * Create a map of the student's
   * attendance records.
   */
  const recordMap = new Map(
    records.map((record) => [record.attendance_session_id, record]),
  );

  /*
   * Return every attendance session.
   *
   * If no attendance record exists
   * for the student, mark it as absent.
   */
  return sessions.map((session) => {
    const record = recordMap.get(session.id);

    return {
      id: record?.id || session.id,

      status: record?.status || "absent",

      attendance_session: session,
    };
  });
}

/**
 * Get all courses that the
 * logged-in student is enrolled in.
 */
export async function getMyCourseOfferings() {
  const supabase = await createClient();

  // Get current student
  const student = await getCurrentStudent();

  // Get all course offerings
  // where the student is enrolled
  const { data, error } = await supabase
    .from("enrollments")
    .select(
      `
      id,
      course_offering_id,

      course_offering:course_offerings (
        id,
        course_id,
        teacher_id,
        academic_year,
        semester,
        section,

        course:courses (
          id,
          course_code,
          course_title,
          credit
        )
      )
    `,
    )
    .eq("student_id", student.id);

  if (error) {
    console.error("getMyCourseOfferings error:", error);

    throw error;
  }

  return data
    .filter((enrollment) => enrollment.course_offering)
    .map((enrollment) => ({
      enrollmentId: enrollment.id,

      ...enrollment.course_offering,
    }));
}

/**
 * Get one specific course offering
 * for the logged-in student.
 *
 * This is used by:
 *
 * /student/courses/[offeringId]/layout.jsx
 */
export async function getMyCourseOfferingById(offeringId) {
  const supabase = await createClient();

  // Get current student
  const student = await getCurrentStudent();

  // Get the course offering only if
  // the student is enrolled in it
  const { data, error } = await supabase
    .from("enrollments")
    .select(
      `
      id,
      course_offering_id,

      course_offering:course_offerings (
        id,
        course_id,
        teacher_id,
        academic_year,
        semester,
        section,

        course:courses (
          id,
          course_code,
          course_title,
          credit
        )
      )
    `,
    )
    .eq("student_id", student.id)
    .eq("course_offering_id", offeringId)
    .single();

  if (error) {
    throw error;
  }

  if (!data?.course_offering) {
    throw new Error("Course offering not found.");
  }

  return {
    enrollmentId: data.id,

    ...data.course_offering,
  };
}
