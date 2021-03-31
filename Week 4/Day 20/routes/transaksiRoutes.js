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
router.delete("/:id", transaksiController.delete); 
router.post("/", transaksiValidator.create, transaksiController.create);
router.put("/:id", transaksiValidator.update, transaksiController.update);

module.exports = router; // Export router


