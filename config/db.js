const mysql = require("mysql2");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const connection = mysql.createConnection({
  host: isProduction
    ? process.env.MYSQLHOST
    : process.env.DB_HOST,

  user: isProduction
    ? process.env.MYSQLUSER
    : process.env.DB_USER,

  password: isProduction
    ? process.env.MYSQLPASSWORD
    : process.env.DB_PASSWORD,

  database: isProduction
    ? process.env.MYSQLDATABASE
    : process.env.DB_NAME,

  port: isProduction
    ? process.env.MYSQLPORT
    : process.env.DB_PORT
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Database connected successfully");
  }
});

module.exports = connection;