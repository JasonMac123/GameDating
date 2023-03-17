const db = require("../index");

const getInterests = function () {
  const queryString = "SELECT * FROM interests";
  return db.query(queryString).then((data) => {
    return data.rows;
  });
};

module.exports = { getInterests };
