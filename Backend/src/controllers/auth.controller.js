const { dbPass } = require("../config/env");
const authService = require("../services/auth.service");
const { success, fail } = require("../utils/response");
const env = require('../config/env');

async function register(req, res) {
  try {
    console.log("CONTROLLER HIT");
    console.log("ENV:", env);
    console.log("BODY:", req.body);
    console.log("Password : ", dbPass);
    const user = await authService.registerUser(req.body);
    console.log("BODY:", req.body);
    return success(res, "User registered successfully", user, 201);
  } catch (error) {
    return fail(res, error.message, 400);
  }
}

async function sendOTP(req, res) {
  try{
    const {email} = req.body;
    const result = await authService.sendOTP(email);

      return res.json({ success: true, ...result });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
  }
}

async function verifyOTP(req, res) {
  try {
    const { email, otp } = req.body;

    const result = await authService.verifyOTP(email, otp);

    return res.json({ success: true, ...result });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

async function login(req, res) {
  try {
    const data = await authService.loginUser(req.body);
    return success(res, "Login successful", data);
  } catch (error) {
    return fail(res, error.message, 400);
  }
}

module.exports = {
  register,
  sendOTP,
  verifyOTP,
  login,
};