import React, { useState } from "react";
import axios from "axios";

function Interests(props) {
  const [interests, setInterests] = useState({
    userID: props.userID,
    strategy_games: false,
    cooking_games: false,
    puzzle_games: false,
    mmos: false,
    action_games: false,
    rpg_games: false,
    slice_of_life_anime: false,
    isekai_anime: false,
    shonen_anime: false,
    sports_anime: false,
    romance_anime: false,
    manga: false,
    books: false,
    comic_books: false,
  });

  const handleChange = (event) => {
    setInterests({ ...interests, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return axios.post("/api/interests", interests).then((result) => {
      props.setDisplay(1);
    });
  };

  return (
    <div>
      <h1>Interests</h1>
      <p>{props.userID}</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Choose your interests:</legend>
          <br />
          <legend>Games:</legend>

          <div>
            <input
              type="checkbox"
              id="strategy_games"
              name="strategy_games"
              value="true"
              onClick={handleChange}
            />
            <label for="strategy_games">Strategy Games</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="cooking_games"
              name="cooking_games"
              value="true"
              onClick={handleChange}
            />
            <label for="cooking_games">Cooking Games</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="puzzle_games"
              name="puzzle_games"
              value="true"
              onClick={handleChange}
            />
            <label for="puzzle_games">Puzzle Games</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="mmos"
              name="mmos"
              value="true"
              onClick={handleChange}
            />
            <label for="mmos">Massive Multiplayer Online Games</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="action_games"
              name="action_games"
              value="true"
              onClick={handleChange}
            />
            <label for="action_games">Action Games</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="rpg_games"
              name="rpg_games"
              value="true"
              onClick={handleChange}
            />
            <label for="rpg_games">Role Playing Games</label>
          </div>
          <br />
          <legend>Anime:</legend>

          <div>
            <input
              type="checkbox"
              id="slice_of_life_anime"
              name="slice_of_life_anime"
              value="true"
              onClick={handleChange}
            />
            <label for="slice_of_life_anime">Slice of Life Anime</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="isekai_anime"
              name="isekai_anime"
              value="true"
              onClick={handleChange}
            />
            <label for="isekai_anime">Isekai Anime</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="shonen_anime"
              name="shonen_anime"
              value="true"
              onClick={handleChange}
            />
            <label for="shonen_anime">Shonen Anime</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="sports_anime"
              name="sports_anime"
              value="true"
              onClick={handleChange}
            />
            <label for="sports_anime">Sports Anime</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="romance_anime"
              name="romance_anime"
              value="true"
              onClick={handleChange}
            />
            <label for="romance_anime">Romance Anime</label>
          </div>
          <br />
          <legend>Reading:</legend>

          <div>
            <input
              type="checkbox"
              id="manga"
              name="manga"
              value="true"
              onClick={handleChange}
            />
            <label for="manga">Manga</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="books"
              name="books"
              value="true"
              onClick={handleChange}
            />
            <label for="books">Books</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="comic_books"
              name="comic_books"
              value="true"
              onClick={handleChange}
            />
            <label for="comic_books">Comic Books</label>
          </div>
        </fieldset>
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Interests;

// (user_id, strategy_games, cooking_games, puzzle_games, mmos, action_games, rpg_games, slice_of_life_anime, isekai_anime, shonen_anime, sports_anime, romance_anime, manga, books, comic_books)
