import { Button } from "../components/Button";

export function LoginPage() {
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-[var(--radius)] border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6">
        <h1 className="text-xl font-semibold tracking-tight">Log in</h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">
          Supabase authentication will be wired in later.
        </p>

        <div className="mt-6">
          <Button className="w-full" disabled>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
