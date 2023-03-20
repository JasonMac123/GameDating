const db = require("../index");

const getInterests = function () {
  const queryString = "SELECT * FROM interests";
  return db.query(queryString).then((data) => {
    return data.rows;
  });


};

const getInterestsByUserID = function (user_id) {
  return db.query("SELECT * FROM interests WHERE user_id = $1", [user_id]).then((data) => {
    return data.rows[0];
  });

};

const changeInterests = function (interests) {
  const queryString = "UPDATE interests SET  strategy_games = $1, cooking_games = $2, puzzle_games = $3, mmos = $4, action_games =$5, rpg_games =$6, slice_of_life_anime = $7, isekai_anime = $8, shonen_anime = $9, sports_anime = $10, romance_anime = $11, manga = $12, books = $13, comic_books = $14 WHERE user_id = $15"
  return db
    .query(
      queryString,
      [
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
        interests.userID,
      ]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const makeInterests = function (interests) {
  const queryString = `INSERT INTO interests (user_id, strategy_games, cooking_games, puzzle_games, mmos, action_games, rpg_games, slice_of_life_anime, isekai_anime, shonen_anime, sports_anime, romance_anime, manga, books, comic_books)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) 
  RETURNING *`;
  return db
    .query(queryString, [
      interests.userID,
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
    ])
    .then((result) => {
      return result.rows[0];
    });
};

module.exports = { changeInterests, getInterests, getInterestsByUserID, makeInterests};

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
