const db = require("../index");


const getInterests = function () {
  const queryString = "SELECT * FROM interests";
  return db.query(queryString).then((data) => {
    return data.rows;
  });
};
const changeInterests = function (interests) {
  const queryString = "INSERT INTO interests (user_id, strategy_games, cooking_games, puzzle_games, mmos, action_games, rpg_games, slice_of_life_anime, isekai_anime, shonen_anime, sports_anime, romance_anime, manga, books, comic_books) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *"
  return db.query(queryString, [interests.userID, interests.strategy_games, interests.cooking_games, interests.puzzle_games, interests.mmos, interests.action_games, interests.rpg_games, interests.slice_of_life_anime, interests.isekai_anime, interests.shonen_anime, interests.sports_anime, interests.romance_anime, interests.manga, interests.books, interests.comic_books ])
  .then((result) => {
    return result.rows[0];
  })
};

module.exports = { changeInterests, getInterests };

// userID: props.userID,
// strategy_games: false,
// cooking_games: false,
// puzzle_games: false,
// mmos: false,
// action_games: false,
// rpg_games: false, 
// slice_of_life_anime: false, 
// isekai_anime: false,
// shonen_anime: false, 
// sports_anime: false,
// romance_anime: false,
// manga: false,
// books: false, 
// comic_books: false,