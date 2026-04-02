const pool = require("../config/db");

// async function createUser(name, email, passwordHash) {
//   const query = `
//     INSERT INTO users (name, email, password_hash)
//     VALUES ($1, $2, $3)
//     RETURNING id, name, email, created_at
//   `;
//   const values = [name, email, passwordHash];
//   const result = await pool.query(query, values);
//   return result.rows[0];
// }

async function createUser(name, email, passwordHash) {
  try {
    console.log("INSERTING USER:", name, email);

    const query = `
      INSERT INTO users (name, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, name, email
    `;

    const values = [name, email, passwordHash];

    const result = await pool.query(query, values);

    console.log("USER CREATED:", result.rows[0]);

    return result.rows[0];

  } catch (err) {
    console.error("DB ERROR:", err);
    throw err;
  }
}

async function findUserByEmail(email) {
  try{
    console.log("Hit Service findUser By Email");
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  console.log("Query result:", result.rows);
  console.log("Query result:", result.rows[0]);

  return result.rows[0];
  } catch(error){
    console.error("❌ ERROR in findUserByEmail:", error);
    throw error; 
  }
}

async function findUserById(id) {
  const result = await pool.query(
    "SELECT id, name, email FROM users WHERE id = $1",
    [id]
  );
  return result.rows[0];
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};