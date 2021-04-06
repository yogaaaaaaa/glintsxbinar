const express = require("express"); //import express
// const validator = require("validator"); // Import validator

//import controller
const transaksiController = require("../controllers/transaksiController");
//make router
const router = express.Router();
const transaksiValidator = require("../middlewares/validators/transaksiValidator");


// Get All Data
router.get("/", transaksiController.getAll);

// Create data
router.post("/", transaksiValidator.create, transaksiController.create);
// router.post("/", transaksiController.create);

// Get One Data
router.get("/:id", transaksiController.getOne);

// Update Data
router.put("/:id", transaksiValidator.update, transaksiController.update);

// Delete One Data
router.delete("/:id", transaksiController.delete);


module.exports = router;
