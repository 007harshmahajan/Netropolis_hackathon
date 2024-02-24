import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "outline-none flex justify-center items-center gap-1",
  {
    variants: {
      variant: {
        primary: "btn-primary",
        secondary: "btn-secondary",
        tertiary: "btn-tertiary",
      },
      size: {
        default: "px-3 py-2.5 rounded-xl prose-b2-semibold",
        md: "rounded-[10px] px-3 py-2 prose-b2-semibold",
        sm: "rounded-[10px] px-3 py-2 prose-c2-semibold",
        lg: "px-3 py-2.5 rounded-xl prose-b2-semibold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
