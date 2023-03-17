const db = require("../index");

const getUsers = function () {
  const queryString = "SELECT * FROM users";
  return db.query(queryString).then((data) => {
    return data.rows;
  });
};

module.exports = { getUsers };
