// import axios from "axios";
// import { useState, useEffect } from "react";

export default function Profile(props) {
  console.log(props);

  return (
    <>
      {props.potentialMatches?.length > 0 &&
        <>
          <img
            className="left-0"
            src={props.potentialMatches[0]?.cover_picture}
            alt="Cover Pic"
          />
          <div className="bg-blue-100">
            <div
              className="right-0 bg-yellow-200"
            >
              {props.potentialMatches[0]?.name}
            </div>
            <br>
            </br>
            <div className="bg-green-300">
              {props.potentialMatches[0]?.summary}
            </div>
            <div>
              <button
                className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  console.log("bye now")
                  props.discard()
                }}>
                ⛔
              </button>
              <button
                className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  console.log("gg")
                  props.discard()
                }} >
                ❤️
              </button>
            </div>
          </div>
        </>
      }
      {props.potentialMatches.length === 0 &&
        <div>
          <img
            src="https://media.tenor.com/n6XKuq5mXkIAAAAC/jigglypuff-sad.gif"
            alt="Sad Jigglypuff"
          >
          </img>
          We do not have anymore potential matches for you at the moment, please check back periodically for new potential matches
        </div>
      }
    </>
  )
}