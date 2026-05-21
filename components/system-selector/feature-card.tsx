import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export function FeatureCard({ icon: Icon, title, subtitle }: FeatureCardProps) {
  return (
    <div className="rounded-[14px] bg-white/[0.04] p-4 transition-colors duration-150 hover:bg-white/[0.07]">
      <Icon className="h-4 w-4 text-slate-500" strokeWidth={1.6} />
      <p className="mt-2 text-sm font-medium text-slate-200">{title}</p>
      <p className="text-xs text-slate-500">{subtitle}</p>
    </div>
  );
}
