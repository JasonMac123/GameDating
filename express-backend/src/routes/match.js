const express = require("express");
const { json } = require("body-parser");
const { getCurrentInterests, getMatches } = require("../db/queries/match_users");
const router = express.Router();
const { checkChatExists, addChat} = require("../db/queries/create_chat");

router.post("/", (req, res) => {
  checkChatExists(req.body.user1, req.body.user2)
  .then(res => {
    if (res === false) {
      addChat(req.body.user1, req.body.user2)
      .then(console.log("new chatroom created"));
    }
  })

})

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
