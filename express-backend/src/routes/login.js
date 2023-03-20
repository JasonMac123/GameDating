const express = require("express");
const router = express.Router();
const { getUserWithEmail } = require("../db/queries/login");

router.get("/", (req, res) => {
  res.json("Login");
});

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  getUserWithEmail(email).then((data) => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
