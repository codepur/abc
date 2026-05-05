import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  light?: boolean; // for dark backgrounds
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      <p
        className={cn(
          "font-sans text-[11px] tracking-[0.25em] uppercase text-[#E88F04] mb-3.5 flex items-center gap-3",
          center && "justify-center"
        )}
      >
        <span className="inline-block w-8 h-0.5 bg-[#E88F04]" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-[clamp(26px,3.2vw,42px)] font-bold leading-[1.14] tracking-tight mb-4",
          light ? "text-white" : "text-[#0d1240]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-[1.85]  max-w-[620px]",
            light ? "text-white/60" : "text-[#5a5a6e]",
            center && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
