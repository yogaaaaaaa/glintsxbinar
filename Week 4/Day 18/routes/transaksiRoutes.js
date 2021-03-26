const express = require("express"); // import express
const router = express.Router(); //make router

//import controller
const transaksiController = require("../controllers/transaksiController");

//define routes
router.get("/", transaksiController.getAll);
router.post("/", transaksiController.create);
router.delete("/:id", transaksiController.deleteData);
router.put("/:id", transaksiController.update);
router.get("/:id", transaksiController.getOne);
router.patch("/", transaksiController.alterTransaksi);

module.exports = router; //to export router
