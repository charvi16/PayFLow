const walletRepository = require("../repositories/wallet.repository");
const transactionRepository = require("../repositories/transaction.repository");
const { generateTxRef } = require("../utils/idGenerator");

async function getWalletBalance(userId) {
  const wallet = await walletRepository.getWalletByUserId(userId);

  if (!wallet) {
    throw new Error("Wallet not found");
  }

  return wallet;
}

async function topupWallet(userId, amount) {
  console.log("Reached wallet service from wallet controller");
  const wallet = await walletRepository.topupWallet(userId, Number(amount));
  console.log("Wallet topped in service");

  if (!wallet) {
    throw new Error("Wallet not found");
  }

  console.log("Reached regular expression");

  const txRef = generateTxRef();
  await transactionRepository.createTopupTransaction(
    txRef,
    wallet.id,
    Number(amount)
  );
  console.log("Configured regular expression");
  return wallet;
}

module.exports = {
  getWalletBalance,
  topupWallet,
};