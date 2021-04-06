const express = require("express");

//import validator
const transaksiValidator = require("../middlewares/validators/transaksiValidator");

//import controller
const transaksiController = require("../controllers/transaksiController");
//make router
const router = express.Router();


router.get("/", transaksiController.getAll);
router.get("/:id",transaksiValidator.getOne, transaksiController.getOne);
router.post("/", transaksiValidator.create, transaksiController.create);
router.put("/:id", transaksiValidator.update, transaksiController.update);
router.delete("/:id", transaksiValidator.delete, transaksiController.delete);

module.exports = router;