const walletService = require("../services/wallet.service");
const { success, fail } = require("../utils/response");

async function getBalance(req, res) {
  try {
    const wallet = await walletService.getWalletBalance(req.user.id);
    return success(res, "Wallet fetched successfully", wallet);
  } catch (error) {
    return fail(res, error.message, 400);
  }
}

async function topup(req, res) {
  try {
    console.log("Reached Wallet Controller from Wallet ROute");
    const wallet = await walletService.topupWallet(req.user.id, req.body.amount);
    console.log("wallet topped up");
    return success(res, "Wallet topped up successfully", wallet);
  } catch (error) {
    return fail(res, error.message, 400);
  }
}

module.exports = {
  getBalance,
  topup,
};