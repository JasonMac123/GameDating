const db = require("..");

const getLocationById = (userID) => {
  const queryString = `SELECT id, latitude, longitude FROM users WHERE id = $1;`;
  return db.query(queryString, [userID]).then((res) => {
    return res.rows;
  });
}

const updateLocationById = (latitude, longitude, userID) => {
  const queryString = 'UPDATE users set latitude = $1, longitude = $2 WHERE id = $3 RETURNING *'

  return db.query(queryString, [latitude, longitude, userID]).then((res) => {
    return res.rows;
  });
}

module.exports = { getLocationById, updateLocationById };