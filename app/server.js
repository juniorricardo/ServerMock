"use strict";

// Cargar modulos y crear nueva aplicacion
let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//GetAll
//Ejemplo: GET http://localhost:8080/item
app.get("/item", function (req, res, next) {
  if (req.query.filter) {
    next();
    return;
  }
  res.send("Get all");
  console.log("Get all");
});

//GetById
//Ejemplo: GET http://localhost:8080/item/10
app.get("/item/:id", function (req, res, next) {
  var itemId = req.params.id;
  res.send("Get " + req.params.id);
  console.log("Get " + req.params.id);
});

//GetFiltered
//Ejemplo: GET http://localhost:8080/item?filter=ABC
app.get("/item", function (req, res) {
  let filter = req.query.filter;
  res.send("Get filter " + filter);
  console.log("Get filter " + filter);
});

//Create
//Ejemplo: POST http://localhost:8080/item
app.post("/item", function (req, res) {
  let data = req.body.data;
  res.send("Add " + data);
  console.log("Add " + data);
});

app.post("/OpenServer/Execute", function (req, res) {
  let data = req.body.data;

  res.setHeader("Content-Type", "application/json");
  let jsonModel = require("./mocks/res.user.json");
  //let jsonData = require('./student.json');
  res.send(JSON.stringify(jsonModel));
});

let server = app.listen(8080, function () {
  console.log("Server is running..");
});
