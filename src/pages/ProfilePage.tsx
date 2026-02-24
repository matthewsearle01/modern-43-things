import { useParams } from "react-router-dom";

export function ProfilePage() {
  const { username } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">
        Profile: {username}
      </h1>
      <p className="text-[rgb(var(--muted))]">User profile page.</p>
    </div>
  );
}
