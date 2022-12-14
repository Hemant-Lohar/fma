const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "remotemysql.com",
  user: "tohhqARa3H",
  password: "LzB7KEqCO6",
  database: "tohhqARa3H",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/registration", (req, res) => {
  const name = req.body.name;
  const gender = req.body.gender;
  const age = req.body.age;
  const batch = req.body.batch;

  const sqlinsert =
    "INSERT INTO fma (name,gender,age, batch) VALUE (?,?,?,?);";
  db.query(sqlinsert, [name, gender, age, batch], (err, result) => {
    res.send();
  });
});

app.get("/api/get", (req, res) => {
  const sqlselect = "SELECT * FROM fma;";
  db.query(sqlselect, (err, result) => {
    res.send(result);
  });
});

app.listen("3001", () => {
  console.log(`running`);
});
