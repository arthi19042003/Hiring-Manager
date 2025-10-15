import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // ensure you create this CSS file
import "./HiringDashboard.css";

const HiringDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Profile",
      description: "Manage your personal and professional information",
      buttonText: "Edit Profile",
      path: "/profile",
    },
    {
      title: "Resume",
      description: "Upload and manage candidate resumes",
      buttonText: "Manage Resumes",
      path: "/resume",
    },
    {
      title: "Hiring Dashboard",
      description: "Monitor open positions and submissions",
      buttonText: "View Dashboard",
      path: "/hiring-dashboard",
    },
    {
      title: "Inbox",
      description: "Track interview updates, candidate status, and notifications",
      buttonText: "Open Inbox",
      path: "/inbox",
    },
    {
      title: "Open Positions",
      description: "View positions by project, department, or skills",
      buttonText: "Manage Positions",
      path: "/positions",
    },
    {
      title: "Candidates",
      description: "Review, shortlist, or reject candidate profiles",
      buttonText: "Manage Candidates",
      path: "/candidates",
    },
    {
      title: "Interviews",
      description: "Schedule phone screens or onsite interviews",
      buttonText: "Manage Interviews",
      path: "/interviews",
    },
    {
      title: "Onboarding",
      description: "Start and monitor the onboarding process",
      buttonText: "Start Onboarding",
      path: "/onboarding",
    },
    {
      title: "Purchase Orders",
      description: "Generate or forward to internal recruiting team",
      buttonText: "Generate PO",
      path: "/purchase-orders",
    },
  ];

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <h1>Welcome, Hiring Manager </h1>
        <p>Manage all your recruiting activities from one place.</p>
      </header>

      <div className="dashboard-grid">
        {cards.map((card, index) => (
          <div key={index} className="dashboard-card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button
              className="dashboard-button"
              onClick={() => navigate(card.path)}
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringDashboard;
