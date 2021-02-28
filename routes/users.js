var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let UserseModel = require("../models/UserModel");



//login

router.post("/login", (req, res, next) => {
  let user = req.body;
  console.log(user.email, user.password);
  UserModel.find(user)
    .then((result) => {
      if (result.length) {
        console.log(result);
        res.send({
          logged: true,
        });
      } else {
        res.send({ logged: false });
      }
      console.log(result);
    })
    .catch((err) => res.send(err));
});


module.exports = router;