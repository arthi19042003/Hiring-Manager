const express = require("express");
const router = express.Router();
const Position = require("../models/Position");
const Candidate = require("../models/Candidate");
const Submission = require("../models/Submission");
const Interview = require("../models/Interview");
const PurchaseOrder = require("../models/PurchaseOrder");
const Onboarding = require("../models/Onboarding");
const { protect } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, async (req, res) => {
  const [positions, candidates, interviews] = await Promise.all([
    Position.countDocuments(),
    Candidate.countDocuments(),
    Interview.countDocuments(),
  ]);
  res.json({ positions, candidates, interviews });
});

router.get("/positions", protect, async (req, res) => {
  const { project, department, skills } = req.query;
  const filter = {};
  if (project) filter.project = project;
  if (department) filter.department = department;
  if (skills) filter.skills = { $in: skills.split(",") };
  const positions = await Position.find(filter);
  res.json(positions);
});

router.post("/submission/:id/status", protect, async (req, res) => {
  const { status, note } = req.body;
  const sub = await Submission.findById(req.params.id);
  if (!sub) return res.status(404).json({ message: "Submission not found" });
  sub.status = status;
  sub.history.push({ status, note });
  await sub.save();
  res.json(sub);
});

module.exports = router;
