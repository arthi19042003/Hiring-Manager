import React, { useState, useEffect } from "react";
import "./Candidates.css";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Sample data simulation
    setCandidates([
      {
        id: 1,
        name: "Amit Kumar",
        email: "amit.kumar@example.com",
        status: "Applied",
      },
      {
        id: 2,
        name: "Sara Lee",
        email: "sara.lee@example.com",
        status: "Applied",
      },
      {
        id: 3,
        name: "Rohit Sharma",
        email: "rohit.sharma@example.com",
        status: "Shortlisted",
      },
    ]);
  }, []);

  const updateStatus = (id, newStatus) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
  };

  return (
    <div className="candidates-container">
      <h2>Candidates</h2>
      <p className="subtitle">Review, shortlist, or reject candidate profiles</p>

      <table className="candidates-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th className="actions-col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length === 0 ? (
            <tr>
              <td colSpan="4" className="empty">
                No candidates yet.
              </td>
            </tr>
          ) : (
            candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                <td>
                  <span
                    className={`status-badge ${
                      candidate.status === "Rejected"
                        ? "rejected"
                        : candidate.status === "Shortlisted"
                        ? "shortlisted"
                        : "applied"
                    }`}
                  >
                    {candidate.status}
                  </span>
                </td>
                <td className="actions">
                  <button
                    className="btn shortlist"
                    onClick={() => updateStatus(candidate.id, "Shortlisted")}
                  >
                    Shortlist
                  </button>
                  <button
                    className="btn reject"
                    onClick={() => updateStatus(candidate.id, "Rejected")}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Candidates;
