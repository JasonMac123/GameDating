import axios from "axios";
import { useState, useEffect } from "react";

export default function Match(props) {
  // const [state, setState] = useState({
  //   matches: [],
  // });
  // useEffect(() => {

  //   axios
  //   .get("/api/match")
  //   .then((res) => {
  //     console.log(res.data);
  //     setState(prev => ({ ...prev, matches: res.data }));
  //   })
  //   .catch((e) => console.log(e));
  // }, [])

  return (
    <>
    {/* <img
    src={state.matches[0].profile_picture}
    alt="Profile Pic"
    /> */}
    Hello Neighbour
    </>
  )
}