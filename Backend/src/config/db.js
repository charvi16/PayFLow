const { Pool } = require("pg");
const env = require("./env");

const pool = new Pool({
  user: env.dbUser,
  password: env.dbPass,
  database: env.dbName,
  host: env.dbHost,
  port: env.dbPort,
});

pool.connect()
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.error("❌ DB Connection Error:", err));

module.exports = pool;