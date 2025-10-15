// ================================
// Smart Submissions Server
// ================================
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

// ================================
// Middleware
// ================================
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ================================
// MongoDB Connection
// ================================
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// ================================
// Routes (8 Dashboards + Auth)
// ================================
app.use("/api/inbox", require("./routes/inbox"));
app.use("/api/positions", require("./routes/positions"));
app.use("/api/resumes", require("./routes/resumes"));
app.use("/api/candidates", require("./routes/candidates"));
app.use("/api/interviews", require("./routes/interviews"));
app.use("/api/onboarding", require("./routes/onboarding"));
app.use("/api/po", require("./routes/po"));
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/hiring-manager", require("./routes/hiringManagerRoutes"));

// ================================
// Health Check
// ================================
app.get("/api/health", (req, res) =>
  res.json({ status: "ok", now: new Date().toISOString() })
);

// ================================
// Start Server
// ================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Smart Submissions Server running on port ${PORT}`)
);
