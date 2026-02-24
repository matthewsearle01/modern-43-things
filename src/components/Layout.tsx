import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

type NavItemProps = {
  to: string;
  children: React.ReactNode;
};

function NavItem({ to, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded-[var(--radius)] px-3 py-1 transition ${
          isActive
            ? "bg-[rgb(var(--card))] text-[rgb(var(--fg))]"
            : "text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[rgb(var(--border))]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-baseline gap-3">
            <span className="text-lg font-semibold tracking-tight">
              43 Things
            </span>
          </div>

          <nav className="flex gap-2 text-sm">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/app">My Things</NavItem>
            <NavItem to="/feed">Feed</NavItem>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
