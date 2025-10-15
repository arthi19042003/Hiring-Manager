const express = require("express");
const router = express.Router();

let dashboardSummary = {
  totalPositions: 5,
  totalCandidates: 20,
  interviewsScheduled: 8,
  onboardingPending: 3,
  messages: 4,
  purchaseOrders: 2,
};

router.get("/", (req, res) => res.json(dashboardSummary));

module.exports = router;

