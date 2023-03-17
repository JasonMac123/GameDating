const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const { getUsers } = require("../db/queries/login");

router.get("/", (req, res) => {
  getUsers().then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
