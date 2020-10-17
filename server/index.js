const express = require("express");
let app = express();
let PORT = 3000;
const pet = require("../database/Pet.js");
const bodyParser = require("body-parser");
const cors = require("cors");
let user = require("../database/User.js");
const nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

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

app.post("/api/adoption", (req, res) => {
  console.log(req.body);
  pet.findAndChange(req.body).then((obj) => {
    nodemailer.createTestAccount((err, email) => {
      var transporter = nodemailer.createTransport(
        smtpTransport({
          service: "gmail",
          port: 465,
          secure: false,
          host: "smtp.gmail.com",
          auth: {
            user: "adoptanimalstn@gmail.com",
            pass: "258456357159Adopt",
          },
          tls: {
            rejectUnauthorized: false,
          },
        })
      );

      let mailOptions = {
        from: "adoptanimalstn@gmail.com",
        to: `${req.body.email}`,
        subject: "RBKAT Adoption",
        text: `We thank you from the bottom of our heart, You are the hope for ${req.body.name}, and we hope that he(she) will be your hope,
        we will contact you again for the adoption procedure.`,
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
        }
        res.send(info);
      });
    });
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
