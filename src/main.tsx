import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./main.css";

import LandingPage from "./pages/landing.page.jsx";
import AdminPage from "./pages/admin.page.jsx";
import ScanPage from "./pages/scan.page.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/scan/:serializedSettings" element={<ScanPage />} />
        <Route path="*" element={<h1>404 No such page</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
