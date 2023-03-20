const db = require("../index");


const addUser = function (user) {
  const queryString = "INSERT INTO users (name, email, password, phone_number, profile_picture, cover_picture, gender_identity, gender_preference, summary) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *"
  return db.query(queryString, [user.name, user.email, user.password, user.phone_number, user.profile_picture, user.cover_picture, user.gender_identity, user.gender_preference, user.summary])
  .then((result) => {
    return result.rows[0];
  })
};

module.exports = { addUser };

// (name, email, password, phone_number, profile_picture, cover_picture, gender_identity, gender_preference, summary)