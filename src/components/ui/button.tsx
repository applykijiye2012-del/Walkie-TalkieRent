import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200",
        variant === "primary" &&
          "bg-cyan-200 text-slate-950 shadow-[0_0_32px_rgba(103,232,249,0.28)] hover:bg-white hover:shadow-[0_0_42px_rgba(103,232,249,0.42)]",
        variant === "secondary" &&
          "border border-cyan-200/30 bg-cyan-200/5 text-cyan-100 backdrop-blur-xl hover:border-cyan-200/70 hover:bg-cyan-200/10",
        variant === "ghost" &&
          "text-slate-200 hover:bg-white/5 hover:text-white",
        className,
      )}
    >
      <span>{children}</span>
      {variant !== "ghost" ? (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      ) : null}
    </Link>
  );
}
