const express = require("express"); // import express
const router = express.Router(); //make router

//import controller
const transaksiController = require("../controllers/transaksiController");

//define routes
router.get("/", transaksiController.getAll);
router.post("/", transaksiController.create);

module.exports = router; //to export router
