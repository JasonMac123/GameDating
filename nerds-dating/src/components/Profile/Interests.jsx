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
    <div className="bg-zinc-800 h-screen">
      <section className="gradient-form h-screen bg-gradient-to-r from-red-200 to-red-600 dark:bg-neutral-700 p-2 mr-[80px] w-10/12 float-right">

        <div className="flex flex-wrap items-center justify-center text-2xl">
          <h1>Interests</h1>
        </div>
        {/* <p>{props.userID}</p> */}
        <form autoComplete="off" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Choose your interests:</legend>
            <br />

            {/* <legend>Games:</legend> */}
            <ul className="grid w-full gap-6 md:grid-cols-4">

              <div>
                <input
                  type="checkbox"
                  id="strategy_games"
                  name="strategy_games"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="strategy_games" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Strategy Games</div>
                    <img
                      className="mx-auto w-24"
                      src="data:image/png;base64,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"
                      alt="" />

                  </div>
                </label>

              </div>

              <div>
                <input
                  type="checkbox"
                  id="cooking_games"
                  name="cooking_games"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="cooking_games" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Cooking Games</div>
                    <img
                      className="mx-auto w-24"
                      src="https://cdn-icons-png.flaticon.com/512/1830/1830767.png"
                      alt="" />
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="puzzle_games"
                  name="puzzle_games"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="puzzle_games" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Puzzle Games</div>
                    <img
                      className="mx-auto w-24"
                      src="https://cdn-icons-png.flaticon.com/512/4205/4205637.png"
                      alt="" />
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="mmos"
                  name="mmos"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="mmos" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">MMO's</div>
                    <img
                      className="mx-auto w-24"
                      src="data:image/png;base64,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"
                      alt="" />
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="action_games"
                  name="action_games"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"

                />
                <label htmlFor="action_games" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Action Games</div>
                    <img
                      className="mx-auto w-24"
                      src="data:image/png;base64,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"
                      alt="" />
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="rpg_games"
                  name="rpg_games"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="rpg_games" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">RPG Games</div>
                    <img
                      className="mx-auto w-24"
                      src="data:image/png;base64,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"
                      alt="" />
                  </div>
                </label>
              </div>
              {/* <legend>Anime:</legend> */}

              <div>
                <input
                  type="checkbox"
                  id="slice_of_life_anime"
                  name="slice_of_life_anime"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="slice_of_life_anime" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Slice of Life Anime</div>
                    <img
                      className="mx-auto object-contain h-24 w-24"
                      src="data:image/png;base64,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"
                      alt="" />
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="isekai_anime"
                  name="isekai_anime"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="isekai_anime" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Isekai Anime</div>
                    <img
                      className="mx-auto object-contain h-24 w-24"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB+CAMAAADGKhVOAAAAY1BMVEX///8AAAD8/Pypqanv7+/09PSfn58zMzMQEBDg4OD5+fnBwcEWFhaUlJS2trZfX196enomJibPz8/m5uZTU1Nubm7Y2Ng8PDxGRkawsLCNjY0rKytBQUGAgIBzc3PJyckeHh4v6nzvAAAGIElEQVRogcVb2YKqMAy17JuCgsC4gP//lZe9W1KKWO55Gsc2h6ZptuLpFJ2sHqdDMFJF3V9eQIIOybNoPLt0IhNskVP+eU3xTHomEnj9/+InWZA803Pr/JbTac/pM6Ecz3j8f1kRDlUWu7/idONMkP4Kl+cRviHEP/9kyc7ZFyVXjGBH/LJDFuLi9BBmgFhuOTdgAGl2EYcNJPPGD/KgMcHj6z12H5BA4gnDogIcdo2/Y71cQXGFdDxBNXd4f2FbzhsRdpPHpsjQutzKWtaIqBQYjC2XJH/bWP8STBKw2JMF726PxxZW2JZ6FKDjt9HxJNNnhc7qBBucUOITyF3zJLl3hRDYSNyXYkqjFZki0EVMeCGPjtnygLcOLXZwBkB23OOsmnSe1qN0mKCvEyRIUNgUqSYlR7A5TlCcBsyiOo+mmHOZxkSvRrXcWEOEiBafspiDlUruPGb0HmEOqkO7/VEpVbcTQlzyfPYDLgOLKoq9pUcu7z7VF4bYylgvFgaoDGxvcUuuh+/HWDQ4v2tztr2zF4fuoFfGEeBGhVkyfm7HGe9RTVx6VD3sbn0pNW9cy3eYFYn0Pdppne8QeTy6b7hdyjF+gMInjxN6k6vSew1kDnS5Fi4F9sm4RX3GAe5HR+QTHQPGbQvf2tmbKkydnjA8GqSQg1PoeDkgHpyZdSgWOYqTC/lzRXym2sml+mFCsIhUuFggioX4aMab4mr2NGiB5aqC7ULrSiXNgsTVoJVCriroUVr2UNZnm3vURoNWdJCh4mwwtIyVZp2rtLiHbax12g+nZhezlBGLSVEdT1FndOOP0f9n1irtki70iJRZFD1AFnUFs18fZsbOeyAOV7er296FN8cNZRo6K4Ue21nvg55enYx3QnxH2AgQVT7TXho1cSLTNtwz91VGdh3lqffLby4zbS+wVeXVZD4czNMtttHXTvd+oyZxKjn3VsqVb4oNnmsmJlN6cW7p4kxJgMrHpnAI+kNP0eyC2PzjY8/G4ZGkWAIuasgftHAMsUA/O3q+GC3mXDBkTiOms0KR17vYpGlOJNhLI22Vi8SoVF1DIZY1OzXpUIrpIJL0InkUfVpYz/W0LNmx8MpDcoVitU5FvPNsMqX09YddMGzHV40GF2yKS9oHfM3sMJwrYNUPB7iMWU4IkMTX82rgtkuBEPGAFeUvSwKsLpn8CWwYmh0meDJNhCBN3hBFELyKF4EcgqVQBJsc3bc3uOzS7R868JF/LqEDWlUSOnBiftXuHiK569I/AFPhF+JZ9XtaWIadTbzKIClCLP5xtFht3AwKU2dLAgKsdyAjRyOgb5elsvkk4ZOv8820aKmzHVd9Wmctp9uASr8NLl/QHEL7n5Sc/46VkA20do/Hfd+ir+mjF6NPSxHFZ1WXGUN1jnffzOa2qm8qI/1qgQCsm6LDICC7/fIGWFUzMLhvvjRaw9866bdXc0qEq/Xoj6+5J7iKHjXZeEm1BcqrAKxv+wMo6n5ja+2Btm3XipydQGK8/yMPgQFJPDbetW4HeE9aG3k3hQVY5mjVVvsAJeFm/AQHIEnWK+n2AWju6Wfg3wM4uiYigIT/srWnk/x+wxGswMk9hFaqvKpDaHOxHnwdQnsSU9iDaMUeQnAMrdRSOYZWqkOPoZVi/c+TYxiilo0H+RFi2a31vs0PIDiqY/yFfOt6SCw4SRcRZpMaarFC0FW+3rMXoU8TRN6onia1/GayF6HsNKjlnGvS8gmkwVqkjwDYcjd0nzbC4cVbfLFrTMvTffjymfeQprQ8dfKZmyQuT/cN2fLcUaf+l38RDHotdj9ojKXGw3lmM1GIliDUI3Hh3sjmsm+10OWyVxlG8jibFHZ+645t+0joLRabuvqK2d/CTfuO6W3QpPum1pOapXWG41GSZFAwvTf1zNKOCKU78dbw3g5wr+JLg0wjw2AwqEXfy1RhBkvrTHyTm5pUYrAfFhM+OT1GxyenL+SpVTlM7DPjkicMVYg3mVXIsJpN0Ee3VF9yJy/ZctNU2JsxR4SEr+h3/1BqDWCn0+jGjpAv0KtD6sxWKKq/+Z3SN2B/JZfc9a/e9xNf3n4QBNe7Z9yWROz7Nek/+g9EaDIlqXYAAAAASUVORK5CYII="
                      alt="" />
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="shonen_anime"
                  name="shonen_anime"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"

                />
                <label htmlFor="shonen_anime" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Shonen Anime</div>
                    <img
                      className="mx-auto w-24"
                      src="data:image/png;base64,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"
                      alt="" />
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="sports_anime"
                  name="sports_anime"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="sports_anime" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Sports Anime</div>
                    <img
                      className="mx-auto w-24"
                      src="https://cdn-icons-png.flaticon.com/512/2158/2158445.png"
                      alt="" />
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="romance_anime"
                  name="romance_anime"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="romance_anime" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Romance Anime</div>
                    <img
                      className="mx-auto object-contain h-24 w-24"
                      src="data:image/png;base64,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"
                      alt="" />
                  </div>
                </label>
              </div>
              {/* <legend>Reading:</legend> */}

              <div>
                <input
                  type="checkbox"
                  id="manga"
                  name="manga"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="manga" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Manga</div>
                    <img
                      className="mx-auto w-24"
                      src="data:image/png;base64,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"
                      alt="" />
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="books"
                  name="books"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="books" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Books</div>
                    <img
                      className="mx-auto w-24"
                      src="https://thumbs.dreamstime.com/b/book-icon-reading-concept-vector-graphic-book-icon-reading-concept-vector-graphic-book-icon-image-black-white-vector-158687730.jpg"
                      alt="" />
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="comic_books"
                  name="comic_books"
                  value="true"
                  onClick={handleChange}
                  className="hidden peer"
                />
                <label htmlFor="comic_books" className="inline-flex justify-center items-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Comic Books</div>
                    <img
                      className="mx-auto w-24"
                      src="https://static.thenounproject.com/png/2227044-200.png"
                      alt="" />
                  </div>
                </label>
              </div>
            </ul>

          </fieldset>
          <div className="mb-12 p-3 text-center">
            <button
              className="mb-3 bg-blue-800 inline-block w-1/4 rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
              type="submit"
              onClick={handleSubmit}
              data-te-ripple-init
              data-te-ripple-color="light"
            // style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
            >
              Set Preferences
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Interests;

// (user_id, strategy_games, cooking_games, puzzle_games, mmos, action_games, rpg_games, slice_of_life_anime, isekai_anime, shonen_anime, sports_anime, romance_anime, manga, books, comic_books)
