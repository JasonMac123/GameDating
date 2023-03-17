const db = require("../index")

// SELECT   interests.*           
// FROM     interests
// JOIN users
// ON interests.user_id = users.id
// WHERE    `color` = "black"
//    OR    `weight` = "heavy"
//    OR    `type` = "limo"
// ORDER BY (   (`color` = "black")
//            + (`weight` = "heavy")
//            + (`type` = "limo") 
//          ) DESC

const getCurrentInterests = (userID) => {

  const queryString = 
  `SELECT *
  FROM interests
  WHERE user_id = $1;`

  db.query(queryString, [userID])
  .then(res => {
    res.rows[0]
  })
}

const getMatches = (interests) => {

  const queryString = 
  `SELECT *
  FROM interests
  WHERE user_id = ${userID}
  OR
  OR
  OR
  OR
  OR
  
  ;`

  db.query(queryString)
  .then(res => {
    res.rows[0]
  })
}