const express = require("express");
const router = express.Router();
const { addUser } = require("../db/queries/register");
const bcrypt = require('bcryptjs');
const { getUserWithEmail } = require("../db/queries/login");


// ('Randy', 'games@testing.com', 'password', '333-333-3333', 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8b43d3f6ca573fd85afe0c6df608062c.jpg', 'https://www.hindustantimes.com/ht-img/img/2023/02/15/1600x900/Death_Note_is_usually_the_first_anime__1676437361142_1676437361490_1676437361490.jpg', 'F', 'M', 'hello, there anime is my anme');

router.get("/", (req, res) => {
  res.json("Hello");
});

router.post("/", (req, res) => {
  const encryptedPassword = bcrypt.hashSync(req.body.password, 12)
  const details = {
    name: req.body.name,
    email: req.body.email,
    password: encryptedPassword,
    phone_number: req.body.phone_number,
    profile_picture: req.body.profile_picture,
    cover_picture: req.body.cover_picture,
    gender_identity: req.body.gender_identity,
    gender_preference: req.body.gender_preference,
    distance_limit: req.body.distance_limit,
    summary: req.body.summary,
  };

  if (!details.name|| !details.email || !details.password || !details.phone_number || !details.profile_picture || !details.cover_picture || !details.gender_identity || !details.gender_preference || !details.summary) {
    // console.log(req.body.name)
    return res.json(1);
  }

  getUserWithEmail(req.body.email).then((data) => {
    if (data) {
      // console.log("juniper")
      return res.json(2)
    }

    else {
      addUser(details).then((data) => {
        res.json(data)
      })
    }
  });


});

module.exports = router;
// (name, email, password, phone_number, profile_picture, cover_picture, gender_identity, gender_preference, summary)
