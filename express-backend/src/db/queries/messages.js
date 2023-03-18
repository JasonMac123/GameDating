const db = require("../index");

const getChatroomsFromUserID = (user) => {
  const queryString = `
  SELECT DISTINCT(chat_rooms.id), first_user_id, second_user_id, 
  user1.name AS user1_name, user2.name AS user2_name, 
  user1.cover_picture as user1_coverpicture, 
  user2.cover_picture as user2_coverpicture FROM chat_rooms
  JOIN users user1 on user1.id = first_user_id
  JOIN users user2 on user2.id = second_user_id
  WHERE first_user_id = $1 or second_user_id = $1;
  `;
  return db.query(queryString, [user]).then((data) => {
    return data.rows;
  });
};

const getMessagesFromUsers = (chatroomID) => {
  const queryString = `
  SELECT * FROM messages
  WHERE chat_room_id = $1
  `;
  return db.query(queryString, [chatroomID]).then((data) => {
    return data.rows;
  });
};

const createMessage = (sendingUser, receivingUser, chatroomID, message) => {
  const queryString = `
  INSERT INTO messages (messaging_user_id, receiving_user_id, chat_room_id, message)
  VALUES ($1, $2, $3, $4) 
  RETURNING *;
  `;
  return db
    .query(queryString, [sendingUser, receivingUser, chatroomID, message])
    .then((data) => {
      return data.rows;
    });
};

module.exports = {
  getChatroomsFromUserID,
  getMessagesFromUsers,
  createMessage,
};
