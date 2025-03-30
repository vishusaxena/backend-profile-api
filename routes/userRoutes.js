const express = require("express");
const { getProfile, updateProfile } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get user profile (Protected Route)
router.get("/me", authMiddleware, getProfile);

// Update user profile (Protected Route)
router.put("/me", authMiddleware, updateProfile);

module.exports = router;
