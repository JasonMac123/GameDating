const db = require("../index")

const getLikes = () => {
  const queryString = `select * from likes;`
  return db.query(queryString)
  .then(res => {
    return res.rows;
  })
}

const addLikes = (user1ID, user2ID, status) => {
  let queryString = 
  `INSERT into LIKES (giving_user_id, receiving_user_id, liked_status)
  VALUES ($1, $2, $3) RETURNING *;`

  return db.query(queryString, [user1ID, user2ID, status])
  .then(res => {
    return res.rows;
  })
}



module.exports = { getLikes, addLikes };