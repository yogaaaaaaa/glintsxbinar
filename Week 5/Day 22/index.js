const doenv = require("dotenv"); // import dotenv
const express = require("express"); // import express

//configure env
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

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

//run server
app.listen(3000, () => console.log("server is running on 3000"));
