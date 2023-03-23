const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const { getUsers } = require("../db/queries/login");
const { getNotifications } = require("../db/queries/create_notifications");

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  getUsers().then((data) => {
    res.json(data[req.params.id - 1]);
  });
});

router.get("/", (req, res) => {
  getUsers().then((data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

router.get("/notifications/:id", (req, res) => {
  getNotifications(req.params.id).then((data) => {
    res.json(data);
  });
});

module.exports = router;
