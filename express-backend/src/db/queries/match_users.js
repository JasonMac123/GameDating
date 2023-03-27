const db = require("../index");

const getCurrentInterests = (userID) => {
  const queryString = `SELECT *
  FROM interests
  JOIN users ON users.id = user_id
  WHERE user_id = $1;`;

  return db.query(queryString, [userID]).then((res) => {
    return res.rows[0];
  });
};

const getMatches = (interests) => {
  let queryString = `SELECT interests.*,
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
  WHERE user_id != $15`;
  // comment out the below lines if database do not have too much test data
  // adding the validation for interests.gender_preference exists to avoid data errors
  if (interests && interests.gender_preference === "M") {
    queryString += `
    AND gender_identity = 'M' `
  };

  if (interests && interests.gender_preference === "F") {
    queryString += `
    AND gender_identity = 'F' `
  };

  queryString += `
  AND user_id NOT in (SELECT likes.receiving_user_id FROM likes WHERE giving_user_id = $15)

  `

  queryString += `
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
  
  ;`;
  if (interests) {
    const userInterests = [
      interests.strategy_games,
      interests.cooking_games,
      interests.puzzle_games,
      interests.mmos,
      interests.action_games,
      interests.rpg_games,
      interests.slice_of_life_anime,
      interests.isekai_anime,
      interests.shonen_anime,
      interests.sports_anime,
      interests.romance_anime,
      interests.manga,
      interests.books,
      interests.comic_books,
      interests.user_id,
    ];
    return db.query(queryString, userInterests).then((res) => {
      return res.rows;
    });
  }
  let emptyQuery = `select * from interests;`
  return db.query(emptyQuery).then(() => {
    return [];
  });
};

module.exports = { getCurrentInterests, getMatches };
