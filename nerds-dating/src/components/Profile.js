import axios from "axios";
import { useState, useEffect } from "react";
// import FontAwesomeIcon

export default function Profile(props) {
  // const [state, setState] = useState({
  //   matches: [],
  // });
  // useEffect(() => {

  //   axios
  //     .get("/api/match")
  //     .then((res) => {
  //       console.log(res.data);
  //       setState(prev => ({ ...prev, matches: res.data }));
  //     })
  //     .catch((e) => console.log(e));
  // }, [])
  console.log(props);

  return (
    <>
      {props.matches?.length > 0 &&
        <>
          <img
            className="left-0"
            src={props.matches[0]?.cover_picture}
            alt="Cover Pic"
          />
          <div>
            <div
              className="right-0"
            >
              {props.matches[0]?.name}
            </div>
            <br>
            </br>
            <div>
              {props.matches[0]?.summary}
            </div>
            <div>
              <button
                className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  console.log("bye now")
                  props.discard()
                }}>
                x
              </button>
              <button
                className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  console.log("gg")
                  props.discard()
                }} >
                Heart
              </button>
            </div>
          </div>
        </>
      }
      {props.matches.length === 0 &&
        <div>
          <img
            src="https://media.tenor.com/n6XKuq5mXkIAAAAC/jigglypuff-sad.gif"
            alt="Sad Jigglypuff"
          >
          </img>
          We do not have anymore potentital matches for you at the moment, please check back periodically for new potential matches
        </div>
      }
    </>
  )
}