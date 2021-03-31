const connection = require("../models");

class TransaksiController {
  //get all datas
  async getAll(req, res) {
    try {
      const dbConnection = connection.db("penjualan"); // connect to db penjualan
      const transaksi = dbConnection.collection("transaksi"); // connect to table/collection transaksi

      let data = transaksi.find({}).toArray();

      //if no data
      if (data.length === 0) {
        return res.status(404).json({
          mesage: "Transaksi not found",
        });
      }

      //if success
      return res.status(200).json({
        message: "success",
        data,
      });
    } catch (e) {
      //if failed
      return res.status(500).json({
        message: "internal server error",
        error: e,
      });
    }
  }
}

module.exports = new TransaksiController();
