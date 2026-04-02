const express = require("express");
const analyticsController = require("../controllers/analytics.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/summary", authMiddleware, analyticsController.getSummary);

module.exports = router;