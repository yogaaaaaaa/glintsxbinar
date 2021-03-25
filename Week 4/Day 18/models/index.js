const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "yogaadhi",
  password: "yoga1234",
  database: "penjualan",
});

module.exports = connection;
