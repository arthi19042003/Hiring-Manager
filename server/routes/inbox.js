const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, async (req, res) => {
  const messages = await Message.find({ recipient: req.user._id }).sort({ createdAt: -1 });
  res.json(messages);
});

router.post("/", protect, async (req, res) => {
  const msg = await Message.create({ ...req.body, recipient: req.user._id });
  res.json(msg);
});

module.exports = router;
