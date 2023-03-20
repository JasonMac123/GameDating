const { json } = require("body-parser");
const express = require("express");
const { getLikes, addLikes, getLikesForUsers } = require("../db/queries/likes");
const router = express.Router();
const { getUsers } = require("../db/queries/login");

// router.get("/:id", (req, res) => {
//   console.log(req.params.id)
//   getUsers().then((data) => {
//     res.json(data[req.params.id - 1]);
//   });
// });

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("a-ok!");
  addLikes(req.body.giver, req.body.receiver, req.body.status).then((data) => {
    console.log(data);
  });
  // getUsers().then((data) => {
  //   res.json(data[req.params.id - 1]);
  // });
});

router.get("/:id", (req, res) => {
  getLikesForUsers(req.params.id).then((data) => {
    res.json(data);
  });
});

router.get("/", (req, res) => {
  getLikes().then((data) => {
    res.json(data);
  });
});

// router.post("/", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });

module.exports = router;
