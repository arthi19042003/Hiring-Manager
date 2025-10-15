const express = require("express");
const router = express.Router();

let purchaseOrders = [
  { id: 1, vendor: "Tech Recruiters Pvt Ltd", amount: 5000, status: "Approved" },
  { id: 2, vendor: "HiringHub", amount: 3200, status: "Pending" },
];

router.get("/", (req, res) => res.json(purchaseOrders));

module.exports = router;
