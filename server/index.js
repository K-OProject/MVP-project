const express = require("express");
let app = express();
let PORT = 3030;
const pet = require("../database/Pet.js");
const bodyParser = require("body-parser");
const cors = require("cors");
let user = require("../database/User.js");

app.use(express.static(__dirname + "/../public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/Pet", function (req, res) {
  let obj = req.body;
  pet.create(obj).then((data) => {
    str = JSON.stringify(data);
    res.send(data);
  });
});

app.post("/api/user", (req, res) => {
  let obj = req.body;
  user.create(obj).then((user) => {
    str = JSON.stringify(user);
    res.send(str);
  });
});

app.get("/api/Pet", (req, res) => {
  pet.findAll().then((data) => {
    res.send(data);
  });
});

app.post("/api/login", (req, res) => {
  console.log(req.body);
  user.findUser(req.body).then((user) => {
    if (user === null) {
      res.send("does not exists");
    } else {
      res.send(user);
    }
  });
});

app.listen(PORT, () => {
  console.log("server is connected");
});
