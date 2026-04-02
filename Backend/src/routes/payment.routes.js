const express = require("express");
const paymentController = require("../controllers/payment.controller");
const authMiddleware = require("../middleware/auth.middleware");
const validate = require("../middleware/validation.middleware");
const { validateTransfer } = require("../validators/payment.validator");

const router = express.Router();

router.post("/transfer", authMiddleware, validate(validateTransfer), paymentController.transfer);

module.exports = router;