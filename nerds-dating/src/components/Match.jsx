// import axios from "axios";
// import { useState, useEffect } from "react";

export default function Profile(props) {
  console.log(props);

  return (
    <div className="flex h-screen">
      {props.potentialMatches?.length > 0 && (
        <>
          <img
            className="left-0 w-1/2"
            src={props.potentialMatches[0]?.cover_picture}
            alt="Cover Pic"
          />
          <div className="flex flex-col bg-blue-200 w-1/2 gap-2" >
            <div className="bg-yellow-200">
              {props.potentialMatches[0]?.name}
            </div>
            <div className="bg-green-300 grow">
              {props.potentialMatches[0]?.summary}
            </div>
            <div className="flex  justify-between">
              <button
                className="bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  console.log("bye now");
                  props.addLike(1, props.potentialMatches[0]?.id, false);
                  props.discard();
                }}
              >
                ⛔
              </button>
              <button
                className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  console.log("gg");
                  props.addLike(1, props.potentialMatches[0]?.id, true);
                  props.checkMatch(1, props.potentialMatches[0], props.notify)
                  props.discard();
                }}
              >
                ❤️
              </button>
            </div>
          </div>
        </>
      )}
      {props.potentialMatches.length === 0 && (
        <div>
          <img
            src="https://media.tenor.com/n6XKuq5mXkIAAAAC/jigglypuff-sad.gif"
            alt="Sad Jigglypuff"
          ></img>
          We do not have anymore potential matches for you at the moment, please
          check back periodically for new potential matches
        </div>
      )}
    </div>
  );
}
