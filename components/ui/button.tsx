import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-pine-700 text-porcelain hover:bg-pine-900",
  secondary:
    "bg-transparent text-pine-700 border border-pine-700/30 hover:border-pine-700 hover:bg-pine-50",
  ghost: "bg-transparent text-pine-900 hover:bg-pine-50",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
