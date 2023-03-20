const { Router } = require("express");
const app = require("express");
const router = app.Router();
const {
  getChatroomsFromUserID,
  getMessagesFromUsers,
  createMessage,
} = require("../db/queries/messages");
const { findUser } = require("../helpers/users");

router.get("/:id", (req, res) => {
  const userID = req.params.id;
  getChatroomsFromUserID(userID).then((data) => {
    res.json(data);
  });
});

router.get("/chatroom/:id", (req, res) => {
  const chatroomID = req.params.id;
  getMessagesFromUsers(chatroomID).then((data) => {
    res.json(data);
  });
});

router.post("/send", (req, res) => {
  createMessage(
    req.body.first_user,
    req.body.second_user,
    req.body.chatroomID,
    req.body.message
  ).then((data) => {
    res.json(data);
    const findUserSocketID = findUser(req.list, 1);
    console.log(findUserSocketID)
    if (findUserSocketID) {
      req.io.sockets.emit("update_chat", data);
    }
  });
});

module.exports = router;
