const { ObjectId } = require("mongodb");
const connection = require("../models");

class TransaksiController {
  //get all datas
  async getAll(req, res) {
    try {
      // const transaksi = dbConnection.collection("transaksi"); // connect to table/collection transaksi
      const dbConnection = connection.db("penjualan_development"); // connect to db penjualan
      const transaksi = dbConnection.collection("transaksi"); // connect to db penjualan
      let data = await transaksi.find({}).toArray();

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
  // Get One Data
  async getOne(req, res) {
    try {
      const dbConnection = connection.db("penjualan_development"); // connect to db penjualan
      const transaksi = dbConnection.collection("transaksi"); // connect to db penjualan
      // Find one data
      let data = await transaksi.findOne({
        _id: new ObjectId(req.params.id),
      });

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
  // Create data
  async create(req, res) {
    try {
      const dbConnection = connection.db("penjualan_development"); // connect to db penjualan
      const transaksi = dbConnection.collection("transaksi"); // connect to db penjualan
      // Insert data transaksi
      let data = await transaksi.insertOne({
        barang: req.body.barang,
        pelanggan: req.body.pelanggan,
        jumlah: req.body.jumlah,
        total: req.body.total,
      });

      // If success
      return res.status(200).json({
        message: "Success",
        data: data.ops[0],
      });
    } catch (e) {
      console.log(e);
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
  // Update data
  async update(req, res) {
    try {
      // Update data transaksi
      await transaksi.updateOne(
        {
          _id: new ObjectId(req.params.id),
        },
        {
          $set: {
            barang: req.body.barang,
            pelanggan: req.body.pelanggan,
            jumlah: req.body.jumlah,
            total: req.body.total,
          },
        }
      );

      // Find data that updated
      let data = await transaksi.findOne({
        _id: new ObjectId(req.params.id),
      });

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Delete Data
  async delete(req, res) {
    try {
      const dbConnection = connection.db("penjualan_development"); // connect to db penjualan
      const transaksi = dbConnection.collection("transaksi"); // connect to db penjualan
      // delete data depends on req.params.id
      let data = await transaksi.deleteOne({
        _id: new ObjectId(req.params.id),
      });

      // If success
      return res.status(200).json({
        message: "Success to delete transaksi",
      });
    } catch (e) {
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new TransaksiController();
