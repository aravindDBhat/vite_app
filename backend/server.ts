var express = require("express");
var bodyparser = require("body-parser");
var data = require("./routers/data.js");
var createServer = require("http").createServer;
var cors = require("cors");

var app = express();
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json);
app.use("/api/data", data);
app.listen("3000", function () {
  console.log("Server is running on port 3000");
});
