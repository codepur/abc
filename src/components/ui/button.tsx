import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-sans text-xs font-bold tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#053DCA] text-white clip-skew hover:bg-[#1a50d6] hover:-translate-y-0.5",
        outline:
          "border border-[#053DCA] text-[#053DCA] bg-transparent hover:bg-[#053DCA] hover:text-white",
        gold:
          "bg-[#E88F04] text-white clip-skew hover:bg-[#d07e03] hover:-translate-y-0.5",
        white:
          "bg-white text-[#053DCA] clip-skew-lg hover:-translate-y-0.5 font-black",
        ghost:
          "text-[#053DCA] hover:text-[#1a50d6] bg-transparent",
        nav:
          "bg-[#053DCA] text-white clip-skew-sm hover:bg-[#1a50d6] text-[11px]",
      },
      size: {
        sm:  "h-8 px-4 py-2 text-[10px]",
        md:  "h-10 px-6 py-2.5",
        lg:  "h-12 px-9 py-3 text-[13px]",
        xl:  "h-14 px-12 py-4 text-[13px]",
        icon:"h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
