import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AppPage } from "./pages/AppPage";
import { ProfilePage } from "./pages/ProfilePage";
import { FeedPage } from "./pages/FeedPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/u/:username" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
