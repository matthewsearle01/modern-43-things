import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-baseline gap-3">
            <span className="text-lg font-semibold tracking-tight">
              Modern 43 Things
            </span>
            <span className="text-sm text-[rgb(var(--muted))]">app</span>
          </div>

          <nav className="flex gap-2 text-sm">
            <AppNavItem to="/app">My Things</AppNavItem>
            <AppNavItem to="/feed">Feed</AppNavItem>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}

type AppNavItemProps = {
  to: string;
  children: React.ReactNode;
};

function AppNavItem({ to, children }: AppNavItemProps) {
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
