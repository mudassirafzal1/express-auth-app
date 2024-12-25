const express = require("express");
const router = express.Router();
const {
  register,
  login,
  refreshToken,
  getMe,
} = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/refresh-token", refreshToken);
//protected route using middleware
router.get("/me", authenticateToken, getMe);

module.exports = router;
