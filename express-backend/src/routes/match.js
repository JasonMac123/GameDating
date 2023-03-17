const express = require("express");
const { json } = require("body-parser");
const { getCurrentInterests, getMatches } = require("../db/queries/match_users");
const router = express.Router();

router.get("/:id", (req, res) => {
  let interestsSet = {};
  getCurrentInterests(req.params.id)
  .then(data => {
    interestsSet = data;
    getMatches(interestsSet)
    .then(results => {
      res.json(results);
    })

  })
});

router.get("/", (req, res) => {
  let interestsSet = {};
  getCurrentInterests(2)
  .then(data => {
    interestsSet = data;
    getMatches(interestsSet)
    .then(results => {
      res.json(results);
    })

  })
});

module.exports = router;
