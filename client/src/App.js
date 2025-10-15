import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import "./App.css";

// ====================================================
// 🧩 Public Pages
// ====================================================
import Register from "./pages/Register";
import Login from "./pages/Login";

// ====================================================
// 👤 General User Pages
// ====================================================
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ResumeUpload from "./pages/ResumeUpload";

// ====================================================
// 🧑‍💼 Hiring Manager Pages
// ====================================================
import HiringDashboard from "./pages/HiringDashboard";
import Positions from "./pages/Positions";
import Candidates from "./pages/Candidates";
import Interviews from "./pages/Interviews";
import Inbox from "./pages/Inbox";
import Onboarding from "./pages/Onboarding";
import PurchaseOrders from "./pages/PurchaseOrders"; // ✅ use plural for clarity

// ====================================================
// 🚀 App Component
// ====================================================
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            {/* ================= PUBLIC ROUTES ================= */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* ================= GENERAL USER ROUTES ================= */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/resume"
              element={
                <PrivateRoute>
                  <ResumeUpload />
                </PrivateRoute>
              }
            />

            {/* ================= HIRING MANAGER ROUTES ================= */}
            <Route
              path="/hiring-dashboard"
              element={
                <PrivateRoute>
                  <HiringDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/positions"
              element={
                <PrivateRoute>
                  <Positions />
                </PrivateRoute>
              }
            />
            <Route
              path="/candidates"
              element={
                <PrivateRoute>
                  <Candidates />
                </PrivateRoute>
              }
            />
            <Route
              path="/interviews"
              element={
                <PrivateRoute>
                  <Interviews />
                </PrivateRoute>
              }
            />
            <Route
              path="/inbox"
              element={
                <PrivateRoute>
                  <Inbox />
                </PrivateRoute>
              }
            />
            <Route
              path="/onboarding"
              element={
                <PrivateRoute>
                  <Onboarding />
                </PrivateRoute>
              }
            />
            <Route
              path="/purchase-orders"
              element={
                <PrivateRoute>
                  <PurchaseOrders />
                </PrivateRoute>
              }
            />

            {/* ================= REDIRECTS & 404 ================= */}
            {/* Default redirect to hiring dashboard */}
            <Route path="/" element={<Navigate to="/hiring-dashboard" replace />} />

            {/* 404 Fallback */}
            <Route
              path="*"
              element={
                <div style={{ textAlign: "center", marginTop: "120px" }}>
                  <h2 style={{ fontSize: "2rem", color: "#333" }}>⚠️ 404 - Page Not Found</h2>
                  <p style={{ marginBottom: "20px", color: "#666" }}>
                    The page you are looking for doesn’t exist.
                  </p>
                  <Link
                    to="/hiring-dashboard"
                    style={{
                      color: "#007bff",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    ⬅ Go back to Dashboard
                  </Link>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
