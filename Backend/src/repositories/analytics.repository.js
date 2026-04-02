const pool = require("../config/db");

async function getTransactionSummaryByUserId(userId) {
  const result = await pool.query(
    `
    SELECT
      COUNT(t.id) AS total_transactions,
      COALESCE(SUM(t.amount), 0) AS total_amount
    FROM wallets w
    LEFT JOIN transactions t
      ON w.id = t.sender_wallet_id OR w.id = t.receiver_wallet_id
    WHERE w.user_id = $1
    `,
    [userId]
  );

  return result.rows[0];
}

module.exports = {
  getTransactionSummaryByUserId,
};