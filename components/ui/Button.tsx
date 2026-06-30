import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy shadow-soft hover:bg-[#867658] hover:-translate-y-0.5",
  secondary:
    "bg-navy text-white shadow-soft hover:bg-navy-light hover:-translate-y-0.5",
  outline:
    "border border-white/70 text-white hover:bg-white hover:text-navy backdrop-blur-sm",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
