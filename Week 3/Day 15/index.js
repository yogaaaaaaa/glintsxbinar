const express = require("express");
const app = express();
const helloRouter = require("./routes/helloRoute.js")

app.use("/", helloRouter);
  
app.listen(3000, () => console.log("server nyala at 3000"));
