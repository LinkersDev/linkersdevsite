import type { DemoSystemConfig } from "@/lib/demo/types";

export const schoolSystem: DemoSystemConfig = {
  id: "school-system",
  name: "School System",
  subtitle: "Campus operations dashboard",
  accent: "from-sky-400 via-blue-500 to-indigo-500",
  systemTheme: {
    primaryColor: "#60a5fa",
    accentColor: "#a78bfa",
    backgroundStyle: "from-slate-950 via-blue-950/85 to-indigo-950/78",
    cardStyle: "glass",
    sidebarStyle: "wide",
    density: "balanced",
    typographyScale: "academic",
    borderRadiusSystem: "soft",
    interactionTone: "calm",
    layoutVariant: "analytics",
  },
  sidebarEyebrow: "Campus modules",
  moduleSectionLabel: "Core modules",
  moduleBadgeLabel: "Live",
  searchPlaceholder: "Search students or classes",
  dashboardHero: {
    eyebrow: "School operations",
    title: "Run admissions, attendance, and class planning from one calm dashboard.",
    description: "Designed for principals and admins who need a simple campus view without extra clutter.",
    highlights: ["Admissions ready", "Daily attendance", "Parent updates"],
  },
  statLabel: "Live school metrics",
  stats: [
    { label: "Students", value: "1,420", delta: "+42 this month", tone: "blue" },
    { label: "Attendance", value: "94%", delta: "+2.4% week over week", tone: "emerald" },
    { label: "Classes", value: "28", delta: "6 active now", tone: "violet" },
  ],
  chart: {
    type: "line",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    series: [72, 75, 78, 80, 83, 86],
    accent: "#38bdf8",
  },
  modules: [
    {
      id: "students",
      label: "Students",
      summary: "Enrollments, attendance, and profile status",
      columns: [
        { key: "name", label: "Student" },
        { key: "grade", label: "Grade" },
        { key: "attendance", label: "Attendance" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "stu-1", cells: { name: "Amina Hassan", grade: "Grade 9", attendance: "98%" }, status: "Active", actionLabel: "Open profile" },
        { id: "stu-2", cells: { name: "Noah Kim", grade: "Grade 10", attendance: "92%" }, status: "Pending", actionLabel: "Review note" },
        { id: "stu-3", cells: { name: "Leila Morgan", grade: "Grade 8", attendance: "95%" }, status: "Completed", actionLabel: "View report" },
      ],
    },
    {
      id: "attendance",
      label: "Attendance",
      summary: "Daily check-ins and absence patterns",
      columns: [
        { key: "class", label: "Class" },
        { key: "present", label: "Present" },
        { key: "late", label: "Late" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "att-1", cells: { class: "9A Physics", present: "31/32", late: "1" }, status: "Active", actionLabel: "Send reminder" },
        { id: "att-2", cells: { class: "10B Math", present: "28/30", late: "2" }, status: "Review", actionLabel: "Inspect absences" },
        { id: "att-3", cells: { class: "8C Biology", present: "29/29", late: "0" }, status: "Completed", actionLabel: "Archive" },
      ],
    },
    {
      id: "classes",
      label: "Classes",
      summary: "Timetable and teaching capacity",
      columns: [
        { key: "class", label: "Class" },
        { key: "teacher", label: "Teacher" },
        { key: "room", label: "Room" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "cls-1", cells: { class: "Grade 9A", teacher: "Mr. Davis", room: "Lab 2" }, status: "Active", actionLabel: "Edit schedule" },
        { id: "cls-2", cells: { class: "Grade 10B", teacher: "Ms. Carter", room: "Room 14" }, status: "Pending", actionLabel: "Assign teacher" },
        { id: "cls-3", cells: { class: "Grade 8C", teacher: "Dr. Allen", room: "Hall 1" }, status: "Completed", actionLabel: "View history" },
      ],
    },
  ],
  reports: [
    { label: "Monthly attendance", value: "94.1%", detail: "Up 2.4% from last month" },
    { label: "Parental replies", value: "82%", detail: "Message response rate" },
    { label: "Class utilization", value: "87%", detail: "Rooms scheduled efficiently" },
  ],
  quickActions: [
    { id: "student-import", label: "Import students", detail: "Add new records from CSV" },
    { id: "send-update", label: "Send update", detail: "Broadcast a school notice" },
    { id: "attendance-sync", label: "Sync attendance", detail: "Refresh the daily register" },
  ],
  settings: [
    { label: "Attendance alerts", detail: "Notify staff about unusual absence patterns.", enabled: true },
    { label: "Parent notifications", detail: "Share notices and report updates with guardians.", enabled: true },
    { label: "Timetable approvals", detail: "Require review before schedule changes go live.", enabled: false },
  ],
  activity: [
    { id: "a1", message: "New student intake completed for Grade 9", time: "2 min ago", tone: "blue" },
    { id: "a2", message: "Attendance scan finished for 14 classes", time: "8 min ago", tone: "emerald" },
    { id: "a3", message: "Parent update sent to 84 guardians", time: "14 min ago", tone: "violet" },
  ],
};

