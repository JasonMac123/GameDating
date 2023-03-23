const express = require("express");
const router = express.Router();
const { getUserWithEmail } = require("../db/queries/login");
const bcrypt = require('bcryptjs');


router.get("/", (req, res) => {
  res.json("Login");
});

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    console.log("Password and login fields cannot be blank")
    return res.json(1);
  }
  getUserWithEmail(email).then((data) => {
    if (!data) {
      console.log("no user")
      return res.json(2)
    }
    if (bcrypt.compareSync(password, data.password) === false) {
      console.log("Incorrect password")
      return res.json(3)
    }
    return res.json(data);
  });
});

module.exports = router;
