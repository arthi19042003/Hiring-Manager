const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const mongoose = require("mongoose");

// Optional: If you already have a Submissions model, import it instead
// const Submission = require("../models/Submission");

// Temporary schema (so you can test it immediately)
const submissionSchema = new mongoose.Schema({
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
  positionId: { type: mongoose.Schema.Types.ObjectId, ref: "Position" },
  status: {
    type: String,
    enum: ["submitted", "reviewed", "interview_scheduled", "rejected", "hired"],
    default: "submitted",
  },
  submittedAt: { type: Date, default: Date.now },
});

const Submission = mongoose.models.Submission || mongoose.model("Submission", submissionSchema);

// ====================================================
// GET all submissions
// ====================================================
router.get("/", protect, async (req, res) => {
  try {
    const submissions = await Submission.find()
      .populate("candidateId")
      .populate("positionId")
      .sort({ submittedAt: -1 });
    res.json(submissions);
  } catch (error) {
    console.error("Error fetching submissions:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ====================================================
// CREATE new submission
// ====================================================
router.post("/", protect, async (req, res) => {
  try {
    const submission = new Submission(req.body);
    await submission.save();
    res.status(201).json(submission);
  } catch (error) {
    console.error("Error creating submission:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ====================================================
// UPDATE submission
// ====================================================
router.put("/:id", protect, async (req, res) => {
  try {
    const updated = await Submission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Submission not found" });
    res.json(updated);
  } catch (error) {
    console.error("Error updating submission:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ====================================================
// DELETE submission
// ====================================================
router.delete("/:id", protect, async (req, res) => {
  try {
    const deleted = await Submission.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Submission not found" });
    res.json({ message: "Submission deleted successfully" });
  } catch (error) {
    console.error("Error deleting submission:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
