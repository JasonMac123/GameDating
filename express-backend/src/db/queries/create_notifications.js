const db = require("..");

const addNotification = (userID) => {
  let queryString = `INSERT INTO notifications (user_id, message)
  VALUES ($1, 'you have matched with another user!')
  RETURNING *;`;

  return db.query(queryString, [userID]).then((res) => {
    return res.rows;
  });
};

const getNotifications = (userID) => {
  let queryString = `SELECT * FROM notifications 
  WHERE user_id = $1
  ORDER BY created_date DESC;`;

  return db.query(queryString, [userID]).then((res) => {
    return res.rows;
  });
};

module.exports = { addNotification, getNotifications };
