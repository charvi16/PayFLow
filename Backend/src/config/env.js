require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: Number(process.env.DB_PORT),
  jwtSecret: process.env.JWT_SECRET,
};

console.log("ENV LOADED:", process.env.DB_PASSWORD);