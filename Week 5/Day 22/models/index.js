const { MongoClient } = require("mongodb"); //import mongo client

const uri = process.env.MONGO_URI; // address of cluster/server in mongodb
const connection = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}); //makes new connection

//Run the connection
try {
  connection.connect();

  //if connection estabilished
  console.log("MongoDB connected");
} catch (e) {
  //if connection is failed
  console.log(e);
}

//export the connection
module.exports = connection;
