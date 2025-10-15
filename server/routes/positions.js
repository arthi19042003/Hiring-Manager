const express = require("express");
const router = express.Router();

let positions = [
  { id: 1, title: "Frontend Developer", openings: 2, status: "Active" },
  { id: 2, title: "Backend Developer", openings: 1, status: "Closed" },
];

router.get("/", (req, res) => res.json(positions));

module.exports = router;
