import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "border border-or-orange bg-or-orange text-or-canvas hover:brightness-105 shadow-[0_12px_32px_rgba(248,152,34,0.22)]",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-or-orange/35 hover:bg-or-orange/10",
  ghost: "text-or-muted hover:bg-white/5 hover:text-white",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-or-orange",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
