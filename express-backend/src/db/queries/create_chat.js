const db = require("..")

const checkChatExists = (user1ID, user2ID) => {
  const queryString = 
  `SELECT * 
  FROM chat_rooms
  WHERE (first_user_id = $1
  AND second_user_id = $2)
  OR (first_user_id = $2
    AND second_user_id = $1)
  `
  return db.query(queryString, [user1ID, user2ID])
  .then(res => {
    console.log("14")
    console.log(res.rows.length)
    if (res.rows.length > 0) {
      return true;
    }
    return false;
  })

}



const addChat = (user1ID, user2ID) => {
  const queryString = `
  INSERT into chat_rooms (first_user_id, second_user_id)
  VALUES ($1, $2)
  RETURNING *;
  `

  return db.query(queryString, [user1ID, user2ID])
  .then(res => {
    return res.rows;
  })
}

module.exports = { checkChatExists, addChat };