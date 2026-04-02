const paymentService = require("../services/payment.service");
const { success, fail } = require("../utils/response");

async function transfer(req, res) {
  try {
    const { receiverEmail, amount, note } = req.body;
    const tx = await paymentService.transferMoney(
      req.user.id,
      receiverEmail,
      amount,
      note
    );
    return success(res, "Transfer successful", tx);
  } catch (error) {
    return fail(res, error.message, 400);
  }
}

module.exports = {
  transfer,
};