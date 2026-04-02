const pool = require("../config/db");

async function createOTP(email, otp) {
  const query = `
    INSERT INTO otps (email, otp, expires_at)
    VALUES ($1, $2, NOW() + INTERVAL '5 minutes')
  `;
  await pool.query(query, [email, otp]);
}

async function findLatestOTP(email, otp) {
  const query = `
    SELECT * FROM otps
    WHERE email = $1 AND otp = $2
    ORDER BY created_at DESC
    LIMIT 1
  `;
  const result = await pool.query(query, [email, otp]);
  return result.rows[0];
}

module.exports = {
  createOTP,
  findLatestOTP,
};