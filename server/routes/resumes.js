// ================================
// routes/resumes.js
// ================================
const express = require("express");
const router = express.Router();

// ================================
// Sample In-Memory Resume Data
// ================================
let resumes = [
  {
    id: 1,
    name: "John Doe",
    position: "Frontend Developer",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    experience: "3 years",
    status: "Shortlisted",
    uploadedAt: "2025-10-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
    experience: "5 years",
    status: "Under Review",
    uploadedAt: "2025-10-02",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    position: "Full Stack Engineer",
    skills: ["React", "Node.js", "GraphQL"],
    experience: "4 years",
    status: "Rejected",
    uploadedAt: "2025-10-03",
  },
];

// ================================
// GET — All Resumes
// ================================
router.get("/", (req, res) => {
  res.json(resumes);
});

// ================================
// GET — Single Resume by ID
// ================================
router.get("/:id", (req, res) => {
  const resume = resumes.find((r) => r.id === parseInt(req.params.id));
  if (!resume) {
    return res.status(404).json({ message: "Resume not found" });
  }
  res.json(resume);
});

// ================================
// POST — Add New Resume
// ================================
router.post("/", (req, res) => {
  const newResume = {
    id: resumes.length + 1,
    name: req.body.name,
    position: req.body.position,
    skills: req.body.skills || [],
    experience: req.body.experience || "N/A",
    status: "New",
    uploadedAt: new Date().toISOString().split("T")[0],
  };
  resumes.push(newResume);
  res.status(201).json(newResume);
});

// ================================
// PUT — Update Resume Status
// ================================
router.put("/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const resume = resumes.find((r) => r.id === parseInt(id));
  if (!resume) {
    return res.status(404).json({ message: "Resume not found" });
  }

  resume.status = status;
  res.json({ message: "Status updated", resume });
});

// ================================
// DELETE — Remove Resume
// ================================
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  resumes = resumes.filter((r) => r.id !== parseInt(id));
  res.json({ message: "Resume deleted" });
});

module.exports = router;
