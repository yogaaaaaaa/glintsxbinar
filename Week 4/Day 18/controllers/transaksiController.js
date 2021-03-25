//import mysql connection
const connection = require("../models");
const mysql = require("../models");

//get All data from transaksi
const getAll = (req, res) => {
  let sql =
    "select t.id, p.nama as nama_pelanggan, b.nama as nama_barang, pem.nama as nama_pemasok ,  b.harga,t.waktu, t.jumlah, t.total from transaksi t join barang b on t.id_barang = b.id join pelanggan p on t.id_pelanggan = p.id join pemasok pem on b.id_pemasok = pem.id";

  //run the sql query
  mysql.query(sql, (err, results) => {
    //if error
    if (err) {
      return res.status(500).json({
        message: "internal server error",
        error: err,
      });
    }
    //if success
    return res.status(200).json({
      message: "Success",
      data: results,
    });
  });
};

//Create

const create = (req, res) => {
  //find price of barang
  let sqlFindBarang = "SELECT * FROM barang WHERE id = ?";

  //run sqlFindBarang
  connection.query(sqlFindBarang, [req.body.id_barang], (err, results) => {
    let price = eval(results[0].harga);
    let total = eval(req.body.jumlah * price);

    //make sql query
    let sqlCreate =
      "insert into transaksi (id_barang, id_pelanggan, jumlah, total) values (?, ?, ?, ?)";

    //run query create
    connection.query(
      sqlCreate,
      [req.body.id_barang, req.body.id_pelanggan, req.body.jumlah, total],
      (err, results) => {
        //if error
        if (err) {
          return res.status(500).json({
            message: "Internal server Error",
            error: err,
          });
        }

        // if success
        let sqlSelect = `select t.id, p.nama as nama_pelanggan, b.nama as nama_barang, pem.nama as nama_pemasok ,  b.harga,t.waktu, t.jumlah, t.total from transaksi t join barang b on t.id_barang = b.id join pelanggan p on t.id_pelanggan = p.id join pemasok pem on b.id_pemasok = pem.id WHERE t.id = ${results.insertId}`;

        //run select query
        connection.query(sqlSelect, (err, results) => {
          //if error
          if (err) {
            return res.status(500).json({
              message: "internal server error",
              error: err,
            });
          }

          //if success
          return res.status(200).json({
            message: "success",
            data: results[0],
          });
        });
      }
    );
  });
};

module.exports = { getAll, create }; // export getAll function
