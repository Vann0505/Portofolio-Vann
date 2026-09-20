import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-accent-blue to-accent-violet text-white hover:brightness-110"
      : "border border-white/15 text-ink-100 hover:border-white/30 hover:bg-white/5";

  const classes = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} type="button">
      {children}
    </button>
  );
}
