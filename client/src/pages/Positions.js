import React, { useEffect, useState } from "react";
import "./Positions.css";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Simulate fetching positions data
    setTimeout(() => {
      setPositions([
        {
          id: 1,
          title: "Frontend Developer",
          department: "Engineering",
          project: "Smart Submissions Web App",
          skills: ["React", "JavaScript", "CSS"],
          openings: 2,
          status: "Open",
        },
        {
          id: 2,
          title: "Backend Developer",
          department: "Engineering",
          project: "Smart Submissions API",
          skills: ["Node.js", "Express", "MongoDB"],
          openings: 1,
          status: "Open",
        },
        {
          id: 3,
          title: "UI/UX Designer",
          department: "Design",
          project: "Dashboard Revamp",
          skills: ["Figma", "Wireframing", "Prototyping"],
          openings: 1,
          status: "Closed",
        },
      ]);
    }, 600);
  }, []);

  return (
    <div className="positions-container">
      <h2> Open Positions</h2>
      <p className="subtitle">Manage and view your organization’s job openings</p>

      {positions.length === 0 ? (
        <p className="empty">Loading positions...</p>
      ) : (
        <div className="positions-grid">
          {positions.map((pos) => (
            <div
              key={pos.id}
              className={`position-card ${
                pos.status === "Closed" ? "closed" : "open"
              }`}
            >
              <div className="card-header">
                <h3>{pos.title}</h3>
                <span
                  className={`status-tag ${
                    pos.status === "Open" ? "status-open" : "status-closed"
                  }`}
                >
                  {pos.status}
                </span>
              </div>
              <p>
                <strong>Department:</strong> {pos.department}
              </p>
              <p>
                <strong>Project:</strong> {pos.project}
              </p>
              <p>
                <strong>Skills:</strong> {pos.skills.join(", ")}
              </p>
              <p>
                <strong>Openings:</strong> {pos.openings}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Positions;
