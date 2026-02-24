import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[var(--radius)] px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] disabled:opacity-50 disabled:pointer-events-none";

  const styles =
    variant === "primary"
      ? "bg-[rgb(var(--accent))] text-white hover:opacity-90"
      : "border border-[rgb(var(--border))] bg-[rgb(var(--card))] text-[rgb(var(--fg))] hover:opacity-90";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
