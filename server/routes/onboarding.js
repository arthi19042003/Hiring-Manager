const express = require("express");
const router = express.Router();

let onboarding = [
  { id: 1, employee: "Amit Kumar", role: "Frontend Developer", startDate: "2025-11-01" },
  { id: 2, employee: "Sara Lee", role: "Backend Developer", startDate: "2025-11-05" },
];

router.get("/", (req, res) => res.json(onboarding));

module.exports = router;
