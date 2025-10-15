import React, { useEffect, useState } from "react";
import "./Inbox.css";

const Inbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulate fetching from backend
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          sender: "John Doe",
          subject: "Interview Scheduled",
          message: "Your candidate has been scheduled for an interview.",
          date: "2025-10-12",
          status: "Unread",
        },
        {
          id: 2,
          sender: "Jane Smith",
          subject: "Candidate Shortlisted",
          message: "The candidate you referred has been shortlisted.",
          date: "2025-10-10",
          status: "Read",
        },
        {
          id: 3,
          sender: "HR System",
          subject: "Offer Letter Generated",
          message: "An offer letter has been sent to the candidate.",
          date: "2025-10-09",
          status: "Unread",
        },
      ]);
    }, 800);
  }, []);

  return (
    <div className="inbox-container">
      <h2> Inbox</h2>
      <p className="subtitle">Stay updated with your recruiting activity</p>

      {messages.length === 0 ? (
        <p className="empty">No messages yet.</p>
      ) : (
        <div className="message-list">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message-card ${msg.status === "Unread" ? "unread" : ""}`}
            >
              <div className="message-header">
                <h4>{msg.subject}</h4>
                <span className="message-date">{msg.date}</span>
              </div>
              <p className="message-sender">From: {msg.sender}</p>
              <p className="message-text">{msg.message}</p>
              <span
                className={`status-tag ${
                  msg.status === "Unread" ? "status-unread" : "status-read"
                }`}
              >
                {msg.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Inbox;
