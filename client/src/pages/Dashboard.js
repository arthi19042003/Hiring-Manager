import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <div className="dashboard">
        <h1>Welcome, {user?.name || "Hiring Manager"} 👋</h1>
        <p className="subtitle">Manage all your recruiting activities from one place.</p>

        <div className="dashboard-grid">
          {/* ---------- Profile ---------- */}
          <div className="card">
            <h3>Profile</h3>
            <p>Manage your personal and professional information</p>
            <Link to="/profile" className="btn btn-primary">
              Edit Profile
            </Link>
          </div>

          {/* ---------- Resume ---------- */}
          <div className="card">
            <h3>Resume</h3>
            <p>Upload and manage candidate resumes</p>
            <Link to="/resume" className="btn btn-primary">
              Manage Resumes
            </Link>
          </div>

          {/* ---------- Hiring Overview ---------- */}
          <div className="card">
            <h3>Hiring Dashboard</h3>
            <p>Monitor open positions and submissions</p>
            <Link to="/hiring-dashboard" className="btn btn-primary">
              View Dashboard
            </Link>
          </div>

          {/* ---------- Inbox ---------- */}
          <div className="card">
            <h3>Inbox</h3>
            <p>Track interview updates, candidate status, and notifications</p>
            <Link to="/inbox" className="btn btn-primary">
              Open Inbox
            </Link>
          </div>

          {/* ---------- Positions ---------- */}
          <div className="card">
            <h3>Open Positions</h3>
            <p>View positions by project, department, or skills</p>
            <Link to="/positions" className="btn btn-primary">
              Manage Positions
            </Link>
          </div>

          {/* ---------- Candidates ---------- */}
          <div className="card">
            <h3>Candidates</h3>
            <p>Review, shortlist, or reject candidate profiles</p>
            <Link to="/candidates" className="btn btn-primary">
              Manage Candidates
            </Link>
          </div>

          {/* ---------- Interviews ---------- */}
          <div className="card">
            <h3>Interviews</h3>
            <p>Schedule phone screens or onsite interviews</p>
            <Link to="/interviews" className="btn btn-primary">
              Manage Interviews
            </Link>
          </div>

          {/* ---------- Onboarding ---------- */}
          <div className="card">
            <h3>Onboarding</h3>
            <p>Start and monitor the onboarding process</p>
            <Link to="/onboarding" className="btn btn-primary">
              Start Onboarding
            </Link>
          </div>

          {/* ---------- Purchase Orders ---------- */}
          <div className="card">
            <h3>Purchase Orders</h3>
            <p>Generate or forward to internal recruiting team</p>
            <Link to="/purchase-order" className="btn btn-primary">
              Generate PO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
