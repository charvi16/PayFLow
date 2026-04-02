const walletRepository = require("../repositories/wallet.repository");
const transactionRepository = require("../repositories/transaction.repository");

async function getMyTransactions(userId) {
  const wallet = await walletRepository.getWalletByUserId(userId);

  if (!wallet) {
    throw new Error("Wallet not found");
  }

  return transactionRepository.getTransactionsByWalletId(wallet.id);
}

module.exports = {
  getMyTransactions,
};