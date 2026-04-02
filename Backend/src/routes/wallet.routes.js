const express = require("express");
const walletController = require("../controllers/wallet.controller");
const authMiddleware = require("../middleware/auth.middleware");
const validate = require("../middleware/validation.middleware");
const { validateTopup } = require("../validators/wallet.validator");

const router = express.Router();

router.get("/balance", authMiddleware, walletController.getBalance);
router.post("/topup", authMiddleware, validate(validateTopup), walletController.topup);

module.exports = router;