import type { DemoSystemConfig } from "@/lib/demo/types";

export const hospitalSystem: DemoSystemConfig = {
  id: "hospital-system",
  name: "Hospital / Clinic",
  subtitle: "Patient flow and care coordination",
  accent: "from-cyan-300 via-teal-400 to-blue-500",
  systemTheme: {
    primaryColor: "#2dd4bf",
    accentColor: "#93c5fd",
    backgroundStyle: "from-slate-950 via-teal-950/78 to-cyan-950/74",
    cardStyle: "solid",
    sidebarStyle: "clean",
    density: "balanced",
    typographyScale: "clinical",
    borderRadiusSystem: "structured",
    interactionTone: "precise",
    layoutVariant: "workflow",
  },
  sidebarEyebrow: "Clinical modules",
  moduleSectionLabel: "Care flow",
  moduleBadgeLabel: "Care",
  searchPlaceholder: "Search patients or appointments",
  dashboardHero: {
    eyebrow: "Patient care",
    title: "Track intake, appointments, and doctor coverage in one clinical workspace.",
    description: "A cleaner clinic demo focused on reception, triage, and follow-up readiness.",
    highlights: ["Triage queue", "Doctor roster", "Follow-up booking"],
  },
  statLabel: "Live clinic metrics",
  stats: [
    { label: "Patients today", value: "86", delta: "+12 since 9am", tone: "blue" },
    { label: "Appointments", value: "42", delta: "9 pending review", tone: "violet" },
    { label: "Doctors", value: "12", delta: "3 on shift now", tone: "emerald" },
  ],
  chart: {
    type: "bar",
    labels: ["9", "11", "13", "15", "17", "19"],
    series: [12, 18, 21, 26, 19, 11],
    accent: "#22d3ee",
  },
  modules: [
    {
      id: "patients",
      label: "Patients",
      summary: "Admissions, records, and triage status",
      columns: [
        { key: "name", label: "Patient" },
        { key: "ward", label: "Ward" },
        { key: "age", label: "Age" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "pat-1", cells: { name: "Sophia Reyes", ward: "ER", age: "34" }, status: "Active", actionLabel: "Open chart" },
        { id: "pat-2", cells: { name: "Daniel Brooks", ward: "Ward 4", age: "61" }, status: "Pending", actionLabel: "Review vitals" },
        { id: "pat-3", cells: { name: "Mia Chen", ward: "Outpatient", age: "27" }, status: "Completed", actionLabel: "Discharge note" },
      ],
    },
    {
      id: "appointments",
      label: "Appointments",
      summary: "Scheduled consultations and follow-ups",
      columns: [
        { key: "patient", label: "Patient" },
        { key: "doctor", label: "Doctor" },
        { key: "time", label: "Time" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "app-1", cells: { patient: "Sophia Reyes", doctor: "Dr. Patel", time: "10:20 AM" }, status: "Active", actionLabel: "Join visit" },
        { id: "app-2", cells: { patient: "Ethan Wright", doctor: "Dr. Kim", time: "11:10 AM" }, status: "Pending", actionLabel: "Confirm slot" },
        { id: "app-3", cells: { patient: "Mila Stone", doctor: "Dr. Gomez", time: "1:40 PM" }, status: "Completed", actionLabel: "Send summary" },
      ],
    },
    {
      id: "doctors",
      label: "Doctors",
      summary: "Shift coverage and specialty availability",
      columns: [
        { key: "name", label: "Doctor" },
        { key: "specialty", label: "Specialty" },
        { key: "shift", label: "Shift" },
        { key: "status", label: "Status" },
      ],
      rows: [
        { id: "doc-1", cells: { name: "Dr. Patel", specialty: "Cardiology", shift: "Morning" }, status: "Active", actionLabel: "View roster" },
        { id: "doc-2", cells: { name: "Dr. Kim", specialty: "Pediatrics", shift: "Afternoon" }, status: "Review", actionLabel: "Update shift" },
        { id: "doc-3", cells: { name: "Dr. Gomez", specialty: "General", shift: "Night" }, status: "Completed", actionLabel: "Archive notes" },
      ],
    },
  ],
  reports: [
    { label: "Avg wait time", value: "18m", detail: "Down from 22m yesterday" },
    { label: "Bed occupancy", value: "76%", detail: "Within target range" },
    { label: "Follow-up rate", value: "91%", detail: "Most visits get scheduled" },
  ],
  quickActions: [
    { id: "triage", label: "Triage queue", detail: "Review waiting patients" },
    { id: "new-appointment", label: "Create appointment", detail: "Reserve a follow-up slot" },
    { id: "shift-update", label: "Shift update", detail: "Notify the care team" },
  ],
  settings: [
    { label: "Triage priority rules", detail: "Highlight urgent arrivals for the reception team.", enabled: true },
    { label: "Doctor schedule sync", detail: "Share shift updates across every room and desk.", enabled: true },
    { label: "Lab result approvals", detail: "Require review before sensitive results are published.", enabled: false },
  ],
  activity: [
    { id: "a1", message: "ER intake completed for 4 new patients", time: "3 min ago", tone: "cyan" },
    { id: "a2", message: "Doctor rota refreshed for the afternoon shift", time: "10 min ago", tone: "violet" },
    { id: "a3", message: "Lab results attached to 12 patient records", time: "17 min ago", tone: "emerald" },
  ],
};

