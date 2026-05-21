import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl space-y-4", align === "center" && "mx-auto text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}
