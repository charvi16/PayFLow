const pool = require("../config/db");

async function createWallet(userId) {
  const result = await pool.query(
    "INSERT INTO wallets (user_id) VALUES ($1) RETURNING *",
    [userId]
  );
  return result.rows[0];
}

async function getWalletByUserId(userId) {
  const result = await pool.query(
    "SELECT * FROM wallets WHERE user_id = $1",
    [userId]
  );
  return result.rows[0];
}

async function topupWallet(userId, amount) {
  const result = await pool.query(
    `
    UPDATE wallets
    SET balance = balance + $1
    WHERE user_id = $2
    RETURNING *
    `,
    [amount, userId]
  );
  return result.rows[0];
}

module.exports = {
  createWallet,
  getWalletByUserId,
  topupWallet,
};