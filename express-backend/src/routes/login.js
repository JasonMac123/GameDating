const express = require("express");
const router = express.Router();
const { getUserWithEmail } = require("../db/queries/login");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.json("Login");
});

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    return res.json(1);
  }
  getUserWithEmail(email).then((data) => {
    if (!data) {
      return res.json(2);
    }
    if (bcrypt.compareSync(password, data.password) === false) {
      return res.json(3);
    }
    return res.json(data);
  });
});

module.exports = router;