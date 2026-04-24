import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-white/[0.04] p-4">
      <Icon className="h-4 w-4 text-slate-500" strokeWidth={1.6} />
      <p className="mt-1.5 text-xl font-bold tracking-tight text-white">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}
