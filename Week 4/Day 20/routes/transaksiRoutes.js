const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import validator
const transaksiValidator = require("../middlewares/validators/transaksiValidator");

// Import controller
const transaksiController = require("../controllers/transaksiController");

// Import controller
// const transaksiController = require("../controllers/transaksiController");

router.get("/", transaksiController.getAll); // If GET (/transaksi), will go to getAll function in transaksiController class
router.get("/:id", transaksiController.getOne); // If GET (/transaksi), will go to getAll function in transaksiController class
router.post("/", transaksiValidator.create, transaksiController.create);
router.delete("/:id", transaksiController.delete); 
router.put("/:id", transaksiValidator.update, transaksiController.update);

module.exports = router; // Export router


// // If GET (/transaksi), will go to getAll function in transaksiController class
// router.get("/", transaksiController.getAll);

// // If GET (/transaksi/:id), will go to getOne function in transaksiController
// router.get("/:id", transaksiController.getOne);

// // If POST (/transaksi), will go to transaksiValidator.create first
// // If in the transaksiValidator.create can run the next(), it will go to transaksiController.create
// router.post("/", transaksiValidator.create, transaksiController.create);

// // If POST (/transaksi), will go to transaksiValidator.create first
// // If in the transaksiValidator.create can run the next(), it will go to transaksiController.create
// router.put("/:id", transaksiValidator.update, transaksiController.update);

// // If DELETE (/transaksi/:id), will go to transaksiController.delete
// router.delete("/:id", transaksiController.delete);

