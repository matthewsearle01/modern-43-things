import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { PublicLayout } from "./components/PublicLayout";
import { AppLayout } from "./components/AppLayout";
import { HomePage } from "./pages/HomePage";
import { AppPage } from "./pages/AppPage";
import { ProfilePage } from "./pages/ProfilePage";
import { FeedPage } from "./pages/FeedPage";
import { LoginPage } from "./pages/LoginPage";

function PublicLayoutRoute() {
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
}

function AppLayoutRoute() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayoutRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/u/:username" element={<ProfilePage />} />
        </Route>

        <Route element={<AppLayoutRoute />}>
          <Route path="/app" element={<AppPage />} />
          <Route path="/feed" element={<FeedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
