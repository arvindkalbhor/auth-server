//Import the mongoose module
var mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB =
  "mongodb+srv://arvindkalbhor:mbiuAvc06HH6CNyM@cluster0.6abox.mongodb.net/mongoTest?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true }, (err, data) => {
  if (!err) {
    console.log("Hey..DB Connection success!!");
  }
});

//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
