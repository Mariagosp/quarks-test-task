import { StrictMode } from "react";
import App from "./App";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { NotFoundPage } from "./pages/NotFoundAPage/NotFoundPage";
import { SkillsPage } from "./pages/SkillsPage/SkillsPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

export const Root = () => (
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<WelcomePage />} />
          <Route path="connection" element={<SkillsPage type='connection' />} />
          <Route path="attraction" element={<SkillsPage type='attraction' />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
