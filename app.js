const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var db = require("./dbControllers/db");
const userController = require("./controllers/userController");
const port = 7000;
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,x-access-token"
  );

  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/:id", userController.getUser);

app.post("/createuser", userController.createUser);

app.put("/user/:id", (req, res) => {
  res.send("Hello World!");
});

app.delete("/user/:id", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
