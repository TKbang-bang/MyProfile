const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "soytk",
  database: "users_db",
});

module.exports = db;
