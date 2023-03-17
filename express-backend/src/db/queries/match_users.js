const db = require("../index")
const { getInterests } = require("./get_interests");

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
  JOIN users ON users.id = user_id
  WHERE user_id = $1;`

  return db.query(queryString, [userID])
  .then(res => {
    return res.rows[0];
  })
}

const getMatches = (interests) => {

  const queryString = 
  `SELECT interests.*,
  users.*,
  CASE WHEN strategy_games = $1 THEN 1 ELSE 0 END +
  CASE WHEN cooking_games = $2 THEN 1 ELSE 0 END +
  CASE WHEN puzzle_games= $3 THEN 1 ELSE 0 END +
  CASE WHEN mmos= $4 THEN 1 ELSE 0 END +
  CASE WHEN action_games= $5 THEN 1 ELSE 0 END +
  CASE WHEN rpg_games= $6 THEN 1 ELSE 0 END +
  CASE WHEN slice_of_life_anime= $7 THEN 1 ELSE 0 END +
  CASE WHEN isekai_anime= $8 THEN 1 ELSE 0 END +
  CASE WHEN shonen_anime= $9 THEN 1 ELSE 0 END +
  CASE WHEN sports_anime= $10 THEN 1 ELSE 0 END +
  CASE WHEN romance_anime= $11 THEN 1 ELSE 0 END +
  CASE WHEN manga= $12 THEN 1 ELSE 0 END +
  CASE WHEN books= $13 THEN 1 ELSE 0 END +
  CASE WHEN comic_books= $14 THEN 1 ELSE 0 END
  AS rank
  FROM interests
  JOIN users ON users.id = user_id
  WHERE user_id != $15
  AND
  (strategy_games = $1
  OR cooking_games = $2
  OR puzzle_games= $3
  OR mmos= $4
  OR action_games= $5
  OR rpg_games= $6
  OR slice_of_life_anime= $7
  OR isekai_anime= $8
  OR shonen_anime= $9
  OR sports_anime= $10
  OR romance_anime= $11
  OR manga= $12
  OR books= $13
  OR comic_books= $14)
  ORDER BY rank DESC
  
  ;`
  ;

  const userInterests = [interests.strategy_games, interests.cooking_games, interests.puzzle_games, interests.mmos, interests.action_games, interests.rpg_games, interests.slice_of_life_anime, interests.isekai_anime, interests.shonen_anime, interests.sports_anime, interests.romance_anime, interests.manga, interests.books, interests.comic_books, interests.user_id];
  /*
    const userInterests = [interests.strategy_games, interests.cooking_games, interests.puzzle_games, interests.mmos, interests.action_games, interests.rpg_games, interests.slice_of_life_anime, interests.isekai_anime, interests.shonen_anime, interests.sports_anime, interests.romance_anime, interests.manga, interests.books, interests.comic_books, interests.user_id, interests.gender_preference, interests.gender_identity];
  */
  return db.query(queryString, userInterests)
  .then(res => {
    return res.rows;
  })
}

module.exports = { getCurrentInterests, getMatches };