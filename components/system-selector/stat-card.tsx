import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  accentText?: string;
  accentBg?: string;
};

export function StatCard({ icon: Icon, value, label, accentText, accentBg }: StatCardProps) {
  return (
    <div className={`flex flex-col gap-1 rounded-xl p-4 ${accentBg ?? "bg-white/[0.04]"}`}>
      <Icon className={`h-4 w-4 ${accentText ?? "text-slate-500"}`} strokeWidth={1.6} />
      <p className="mt-1.5 text-xl font-bold tracking-tight text-white">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}
