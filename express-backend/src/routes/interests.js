const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { changeInterests, getInterests } = require("../db/queries/interests");

router.get("/", (req, res) => {
  getInterests().then((data) => res.json(data[0]));
});

router.post("/", (req, res) => {
  const details = {
    userID: req.body.userID,
    strategy_games: req.body.strategy_games,
    cooking_games: req.body.cooking_games,
    puzzle_games: req.body.puzzle_games,
    mmos: req.body.mmos,
    action_games: req.body.action_games,
    rpg_games: req.body.rpg_games,
    slice_of_life_anime: req.body.slice_of_life_anime,
    isekai_anime: req.body.isekai_anime,
    shonen_anime: req.body.shonen_anime,
    sports_anime: req.body.sports_anime,
    romance_anime: req.body.sports_anime,
    manga: req.body.manga,
    books: req.body.books,
    comic_books: req.body.comic_books,
  };

  changeInterests(details).then((data) => {
    // console.log(data)
    res.json(data);
  });
});

module.exports = router;
