const transactionService = require("../services/transaction.service");
const { success, fail } = require("../utils/response");

async function getMyTransactions(req, res) {
  try {
    const transactions = await transactionService.getMyTransactions(req.user.id);
    return success(res, "Transactions fetched successfully", transactions);
  } catch (error) {
    return fail(res, error.message, 400);
  }
}

module.exports = {
  getMyTransactions,
};