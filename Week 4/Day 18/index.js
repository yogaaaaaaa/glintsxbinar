const express = require("express"); //import express
const app = express(); //create express app

//import routes
const transaksiRoutes = require("./routes/transaksiRoutes");
app.use(express.urlencoded({ extended: true })); // used to read req.body

//define route
app.use("/transaksi", transaksiRoutes);
app.listen(3000, () => console.log("nyala at 3000!")); //running on port 3000
