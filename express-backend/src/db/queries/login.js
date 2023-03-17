const db = require("../index");

const getUsers = function () {
  const queryString = "SELECT * FROM users";
  return db.query(queryString).then((data) => {
    return data.res[0];
  });
};

module.exports = { getUsers };
