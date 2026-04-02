const pool = require("../config/db");
const userRepository = require("../repositories/user.repository");
const { generateTxRef } = require("../utils/idGenerator");

async function transferMoney(senderUserId, receiverEmail, amount, note = "P2P transfer") {
  const numericAmount = Number(amount);

  if (numericAmount <= 0) {
    throw new Error("Amount must be greater than 0");
  }

  const receiverUser = await userRepository.findUserByEmail(receiverEmail);

  if (!receiverUser) {
    throw new Error("Receiver not found");
  }

  if (receiverUser.id === senderUserId) {
    throw new Error("Sender and receiver cannot be the same");
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const senderWalletResult = await client.query(
      "SELECT * FROM wallets WHERE user_id = $1 FOR UPDATE",
      [senderUserId]
    );
    const senderWallet = senderWalletResult.rows[0];

    if (!senderWallet) {
      throw new Error("Sender wallet not found");
    }

    const receiverWalletResult = await client.query(
      "SELECT * FROM wallets WHERE user_id = $1 FOR UPDATE",
      [receiverUser.id]
    );
    const receiverWallet = receiverWalletResult.rows[0];

    if (!receiverWallet) {
      throw new Error("Receiver wallet not found");
    }

    if (Number(senderWallet.balance) < numericAmount) {
      throw new Error("Insufficient balance");
    }

    await client.query(
      "UPDATE wallets SET balance = balance - $1 WHERE id = $2",
      [numericAmount, senderWallet.id]
    );

    await client.query(
      "UPDATE wallets SET balance = balance + $1 WHERE id = $2",
      [numericAmount, receiverWallet.id]
    );

    const txRef = generateTxRef();

    const txResult = await client.query(
      `
      INSERT INTO transactions (tx_ref, sender_wallet_id, receiver_wallet_id, amount, type, note)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
      [txRef, senderWallet.id, receiverWallet.id, numericAmount, "P2P", note]
    );

    await client.query("COMMIT");

    return txResult.rows[0];
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

module.exports = {
  transferMoney,
};