const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const User = require("../models/User");

// ====================================================
// GET User Profile
// ====================================================
router.get("/", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId || req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ====================================================
// UPDATE User Profile
// ====================================================
router.put("/", protect, async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findById(req.userId || req.user._id);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Ensure nested `profile` object exists
    if (!user.profile) user.profile = {};

    // Dynamically update profile fields
    Object.keys(updates).forEach((key) => {
      user.profile[key] = updates[key];
    });

    await user.save();

    res.json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        email: user.email,
        profile: user.profile,
      },
    });
  } catch (error) {
    console.error("Error updating profile:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ====================================================
// EXPERIENCE MANAGEMENT
// ====================================================

// ➕ Add Experience
router.post("/experience", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId || req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.profile.experience.push(req.body);
    await user.save();
    res.json(user.profile.experience);
  } catch (error) {
    console.error("Add experience error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ✏️ Update Experience
router.put("/experience/:id", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId || req.user._id);
    const exp = user.profile.experience.id(req.params.id);

    if (!exp) return res.status(404).json({ message: "Experience not found" });

    Object.assign(exp, req.body);
    await user.save();

    res.json(user.profile.experience);
  } catch (error) {
    console.error("Update experience error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ❌ Delete Experience
router.delete("/experience/:id", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId || req.user._id);
    user.profile.experience.pull(req.params.id);
    await user.save();
    res.json(user.profile.experience);
  } catch (error) {
    console.error("Delete experience error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ====================================================
// EDUCATION MANAGEMENT
// ====================================================

// ➕ Add Education
router.post("/education", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId || req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.profile.education.push(req.body);
    await user.save();
    res.json(user.profile.education);
  } catch (error) {
    console.error("Add education error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ✏️ Update Education
router.put("/education/:id", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId || req.user._id);
    const edu = user.profile.education.id(req.params.id);

    if (!edu) return res.status(404).json({ message: "Education not found" });

    Object.assign(edu, req.body);
    await user.save();
    res.json(user.profile.education);
  } catch (error) {
    console.error("Update education error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ❌ Delete Education
router.delete("/education/:id", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId || req.user._id);
    user.profile.education.pull(req.params.id);
    await user.save();
    res.json(user.profile.education);
  } catch (error) {
    console.error("Delete education error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
