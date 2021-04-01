require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

//express
const express = require("express");
const fileUpload = require("express-fileupload");

//import routes
const transaksiRoutes = require("./routes/transaksiRoutes");

//make express app
const app = express();


//body parser to read  req.body

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
)
//to read form-data request
app.use(fileUpload());


//set static file directory
app.use(express.static("public"));

//make routes
app.use("/transaksi", transaksiRoutes);
//running server
app.listen(3000, () => console.log("server running on 3000"));