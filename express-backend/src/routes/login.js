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
  getUserWithEmail(email).then((data) => {
    if (bcrypt.compareSync(password, data.password) === true) {
      res.json(data);
    }
    else {
      console.log("bad password")
    }
  });
});

module.exports = router;
