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
      <img
        className="left-0"
        src={props.matches[0].cover_picture}
        alt="Cover Pic"
      />

      <div>

        <div
          className="right-0"
        >

          You're viewing the profile of {props.matches[0].name}
        </div>
        <br>
        </br>
        <div>

          {props.matches[0].summary}
        </div>
        <div>
          <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            x
          </button>             
          <button className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=> {
            console.log("gg")
            props.discard()}}>
            Heart
          </button>
        </div>

      </div>
    </>
  )
}