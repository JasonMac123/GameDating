const express = require("express");
const router = express.Router();
const { getUserWithEmail } = require("../db/queries/login");


router.get("/", (req, res) => {
  res.json("Login");
});

router.post("/", (req, res) => {
  // const details = {
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password,
  //   phone_number: req.body.phone_number,
  //   profile_picture: req.body.profile_picture,
  //   cover_picture: req.body.cover_picture,
  //   gender_identity: req.body.gender_identity,
  //   gender_preference: req.body.gender_preference,
  //   summary: req.body.summary,
  //  }; 
  const email = req.body.email
  const password = req.body.password
  getUserWithEmail(email)
  .then((data) => {
    console.log(data)
    res.json(data)
  })
  
  // getUserWithEmail(email)
  // .then((data) => {
  //   console.log(data)
  //   res.json(data)
  // })
  
});



module.exports = router;
