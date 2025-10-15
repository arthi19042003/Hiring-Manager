const express = require("express");
const router = express.Router();

let candidates = [
  { id: 1, name: "Amit Kumar", stage: "Interview Scheduled", position: "Frontend Developer" },
  { id: 2, name: "Sara Lee", stage: "Technical Review", position: "Backend Developer" },
];

router.get("/", (req, res) => res.json(candidates));

module.exports = router;
