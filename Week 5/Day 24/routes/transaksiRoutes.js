const express = require("express");

//import validator

//import controller
const transaksiController = require("../controllers/transaksiController");
//make router
const router = express.Router();


router.get("/", transaksiController.getAll);

module.exports = router;