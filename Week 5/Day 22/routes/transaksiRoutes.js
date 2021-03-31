const express = require("express"); //import express

//import controller
const transaksiController = require("../controllers/transaksiController");
//make router
const router = express.Router();

//app get all data
router.get("/", transaksiController.getAll);

module.exports = router;
