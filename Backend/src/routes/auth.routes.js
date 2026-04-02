const express = require("express");
const authController = require("../controllers/auth.controller");
const validate = require("../middleware/validation.middleware");
const { validateRegister, validateLogin } = require("../validators/auth.validator");

const router = express.Router();

// router.post("/register", validate(validateRegister), authController.register);
router.post("/register", authController.register);

router.post("/send-otp", authController.sendOTP);

router.post("/verify-otp", authController.verifyOTP);

router.post("/login", validate(validateLogin), authController.login);

module.exports = router;