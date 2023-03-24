const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const { getUsers } = require("../db/queries/login");
const { getNotifications } = require("../db/queries/create_notifications");
const { updateLocationById } = require("../db/queries/location")

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

router.put("/geo/:id", (req, res) => {
  updateLocationById(req.body.latitude, req.body.longitude, req.params.id)
  .then(results => {
    res.json(results);
  });
})

router.get("/geo/:id", (req, res) => {
})

module.exports = router;
