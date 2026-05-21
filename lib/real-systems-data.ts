export type ProjectCardData = {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  featured: boolean;
  buttonText: string;
};

export const realSystemsProjects: ProjectCardData[] = [
  {
    id: "dental-clinic",
    category: "Healthcare",
    title: "Dental Clinic Management Platform",
    description:
      "Appointments, patient records, session tracking, prescriptions, and payment workflows unified into one operational system.",
    tags: ["Appointments", "Patients", "Sessions", "Payments"],
    href: "#",
    featured: true,
    buttonText: "View Live System",
  },
  {
    id: "school-operations",
    category: "Education",
    title: "School Operations System",
    description:
      "Student management, attendance, admissions, staff access, and academic workflows connected inside one centralized platform.",
    tags: ["Students", "Attendance", "Admissions", "Staff"],
    href: "#",
    featured: true,
    buttonText: "View Live System",
  },
  {
    id: "restaurant-management",
    category: "Food & Retail",
    title: "Restaurant Ordering & Management",
    description:
      "Integrated ordering, kitchen workflow, cashier operations, inventory tracking, and customer management across web and mobile.",
    tags: ["Orders", "Kitchen", "POS", "Inventory"],
    href: "#",
    featured: false,
    buttonText: "View Live System",
  },
  {
    id: "pharmacy-inventory",
    category: "Operations",
    title: "Pharmacy Inventory System",
    description:
      "Medicine tracking, stock management, supplier workflows, expiry monitoring, and operational reporting in real time.",
    tags: ["Medicine", "Stock", "Suppliers", "Reports"],
    href: "#",
    featured: false,
    buttonText: "View Live System",
  },
  {
    id: "university-admission",
    category: "Education",
    title: "University Admission Platform",
    description:
      "Admissions, applicant workflows, department approvals, and student onboarding managed through one connected system.",
    tags: ["Admissions", "Departments", "Applications", "Students"],
    href: "#",
    featured: false,
    buttonText: "View Live System",
  },
  {
    id: "custom-software",
    category: "Custom Software",
    title: "Your Business. Your Workflow.",
    description:
      "Not every business fits into prebuilt software. We design custom operational systems tailored around how your team actually works.",
    tags: ["Custom", "Automation", "Operations", "Workflow"],
    href: "#",
    featured: false,
    buttonText: "Build Your System",
  },
];
