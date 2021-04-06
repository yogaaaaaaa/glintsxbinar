//configure env
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const express = require("express"); // import express

//import router
const transaksiRoutes = require("./routes/transaksiRoutes");
const barangRoutes = require("./routes/barangRoutes");

//make express app
const app = express();

//enable body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//make routes

app.use("/transaksi", transaksiRoutes);
app.use("/barang", barangRoutes);
//run server
app.listen(3000, () => console.log("server is running on 3000"));
