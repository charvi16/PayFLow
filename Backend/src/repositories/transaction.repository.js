const pool = require("../config/db");

async function createTopupTransaction(txRef, receiverWalletId, amount, note = "Wallet topup") {
  const result = await pool.query(
    `
    INSERT INTO transactions (tx_ref, sender_wallet_id, receiver_wallet_id, amount, type, note)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `,
    [txRef, null, receiverWalletId, amount, "TOPUP", note]
  );
  return result.rows[0];
}

async function getTransactionsByWalletId(walletId) {
  const result = await pool.query(
    `
    SELECT *
    FROM transactions
    WHERE sender_wallet_id = $1 OR receiver_wallet_id = $1
    ORDER BY created_at DESC
    `,
    [walletId]
  );
  return result.rows;
}

module.exports = {
  createTopupTransaction,
  getTransactionsByWalletId,
};