import React, { useState, useEffect } from "react";
import "./Onboarding.css";

const Onboarding = () => {
  const [onboardingList, setOnboardingList] = useState([]);

  useEffect(() => {
    // Example onboarding data — replace this with API data later
    setOnboardingList([
      {
        id: 1,
        candidate: "Amit Kumar",
        position: "Frontend Developer",
        startDate: "2025-10-20",
        mentor: "John Smith",
        department: "Engineering",
        status: "In Progress",
      },
      {
        id: 2,
        candidate: "Sara Lee",
        position: "Backend Developer",
        startDate: "2025-10-25",
        mentor: "Priya Nair",
        department: "Technology",
        status: "Pending Documents",
      },
    ]);
  }, []);

  return (
    <div className="onboarding-container">
      <h2>Onboarding</h2>
      <p className="subtitle">
        Track the onboarding process of newly hired candidates
      </p>

      {onboardingList.length === 0 ? (
        <p className="empty">No candidates currently in onboarding.</p>
      ) : (
        <div className="onboarding-grid">
          {onboardingList.map((entry) => (
            <div key={entry.id} className="onboarding-card">
              <div className="card-header">
                <h3>{entry.candidate}</h3>
                <span
                  className={`status ${
                    entry.status === "In Progress"
                      ? "progress"
                      : entry.status === "Completed"
                      ? "completed"
                      : "pending"
                  }`}
                >
                  {entry.status}
                </span>
              </div>
              <p><strong>Position:</strong> {entry.position}</p>
              <p><strong>Department:</strong> {entry.department}</p>
              <p>
                <strong>Start Date:</strong>{" "}
                {new Date(entry.startDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <p><strong>Mentor:</strong> {entry.mentor}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Onboarding;
