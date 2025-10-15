import React, { useState, useEffect } from "react";
import "./Interviews.css";

const Interviews = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    // Simulated backend data
    setInterviews([
      {
        id: 1,
        candidate: "Amit Kumar",
        role: "Frontend Developer",
        date: "2025-10-15T05:30:00Z",
        interviewer: "John Smith",
        mode: "Online",
      },
      {
        id: 2,
        candidate: "Sara Lee",
        role: "Backend Developer",
        date: "2025-10-17T05:30:00Z",
        interviewer: "Priya Nair",
        mode: "Onsite",
      },
    ]);
  }, []);

  return (
    <div className="interviews-container">
      <h2> Scheduled Interviews</h2>
      <p className="subtitle">View and manage upcoming interview sessions</p>

      {interviews.length === 0 ? (
        <p className="empty">No interviews scheduled yet.</p>
      ) : (
        <div className="interview-list">
          {interviews.map((interview) => (
            <div key={interview.id} className="interview-card">
              <div className="interview-header">
                <h3>{interview.candidate}</h3>
                <span className="role">{interview.role}</span>
              </div>
              <div className="interview-details">
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(interview.date).toLocaleDateString("en-GB", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <p>
                  <strong>Time:</strong>{" "}
                  {new Date(interview.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p>
                  <strong>Interviewer:</strong> {interview.interviewer}
                </p>
                <p>
                  <strong>Mode:</strong>{" "}
                  <span
                    className={`mode ${
                      interview.mode === "Online" ? "online" : "onsite"
                    }`}
                  >
                    {interview.mode}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Interviews;
