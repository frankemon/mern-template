const express = require("express");

const router = express.Router();
const { registerUser, loginUser, getMe } = require("../controllers/user");
const { protect } = require("../middleware/auth");

// Public routes
router.post("/", registerUser);
router.post("/login", loginUser);

// Private routes
router.get("/me", protect, getMe);

module.exports = router;
