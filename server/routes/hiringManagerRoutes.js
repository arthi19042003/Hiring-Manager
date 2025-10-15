const express = require("express");
const router = express.Router();
const {
  registerHiringManager,
  loginHiringManager,
} = require("../controllers/hiringManagerController");

// @route   POST /api/hiring-manager/register
router.post("/register", registerHiringManager);

// @route   POST /api/hiring-manager/login
router.post("/login", loginHiringManager);

module.exports = router;
