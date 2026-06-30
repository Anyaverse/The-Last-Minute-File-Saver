import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";

import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import Assistant from "./pages/Assistant";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />

        <div className="content">
          <button
            className="theme-btn"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode
              ? "☀️ Light Mode"
              : "🌙 Dark Mode"}
          </button>

          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/calendar"
              element={<CalendarPage />}
            />

            <Route
              path="/assistant"
              element={<Assistant />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;