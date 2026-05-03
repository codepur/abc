import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 font-sans text-[10px] font-medium tracking-[0.15em] uppercase",
  {
    variants: {
      variant: {
        blue:    "bg-[#f0f4fd] border border-[rgba(5,61,202,0.2)] text-[#053DCA] px-4 py-1.5",
        gold:    "bg-[#fdf4e3] border border-[rgba(232,143,4,0.3)] text-[#E88F04] px-4 py-1.5",
        outline: "border border-[rgba(5,61,202,0.2)] text-[#053DCA] px-4 py-1.5",
        speaker: "bg-[#fdf4e3] border border-[rgba(232,143,4,0.3)] text-[#E88F04] px-3 py-1 italic text-[10px]",
        arth:    "bg-[rgba(5,61,202,0.1)] text-[#053DCA] px-2.5 py-1",
        neeti:   "bg-[rgba(232,143,4,0.12)] text-[#E88F04] px-2.5 py-1",
        dharma:  "bg-[rgba(68,67,67,0.1)] text-[#444343] px-2.5 py-1",
      },
    },
    defaultVariants: { variant: "blue" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
