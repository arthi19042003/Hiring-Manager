// server/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

/**
 * protect - verify JWT and attach user to req
 */
const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if header exists and starts with "Bearer "
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];

    // Ensure secret exists
    if (!process.env.JWT_SECRET) {
      console.error("Missing JWT_SECRET in environment");
      return res.status(500).json({ message: "Server configuration error" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Support payloads with { id } or { userId }
    const userId = decoded.userId || decoded.id;
    if (!userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    // Load user from DB and attach to request
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Invalid token: user not found" });
    }

    req.user = user;
    req.userId = user._id;
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: "Authentication failed" });
  }
};

module.exports = { protect };
