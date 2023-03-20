const express = require("express");
const { json } = require("body-parser");
const { getInterests } = require("../db/queries/get_interests");
const router = express.Router();
// const { getUsers } = require("../db/queries/login");

router.get("/", (req, res) => {
  getInterests()
  .then(data => res.json(data[0]))
  // .then(data => {
  //   res.json(data[0].sports_anime === data[1].sports_anime)
  // })
});


module.exports = router;
