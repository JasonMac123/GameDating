const express = require("express");
const {
  getCurrentInterests,
  getMatches,
} = require("../db/queries/match_users");
const router = express.Router();
const { checkChatExists, addChat } = require("../db/queries/create_chat");
const { addNotification } = require("../db/queries/create_notifications")

router.post("/", (req, res) => {
  checkChatExists(req.body.user1, req.body.user2)
  .then((exists) => {
    if (exists === false) {
      addChat(req.body.user1, req.body.user2).then((response) => {
        console.log("new chatroom created");
        addNotification(req.body.user1);
        addNotification(req.body.user2);
        res.send(`${response[0].second_user_id}`);
      }
      );
    }
  }).catch(e => console.log(e));
});

router.get("/:id", (req, res) => {
  let interestsSet = {};
    getCurrentInterests(req.params.id)
    .then((data) => {
      interestsSet = data;
      getMatches(interestsSet)
      .then((results) => {
        res.json(results);
      }).catch(e => console.log(e));
    }).catch(e => console.log(e));

});

router.get("/", (req, res) => {
  let interestsSet = {};
  getCurrentInterests(2).then((data) => {
    interestsSet = data;
    getMatches(interestsSet).then((results) => {
      res.json(results);
    });
  });
});

module.exports = router;
