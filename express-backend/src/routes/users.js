const express = require("express");
const router = express.Router();
const { getUsers } = require("../db/queries/login");

router.get("/", (req, res) => {
  res.json(getUsers);
});

module.exports = router;
