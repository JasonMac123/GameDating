import axios from "axios";
import Match from "./components/Match";
import Profile from "./components/Profile";
import { useState, useEffect } from "react";
import useCurrentUserMatches from "./hooks/useCurrentUserMatches"

function App() {
  const {matchList, next} = useCurrentUserMatches();

  // axios
  //   .get("/api/users")
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((e) => console.log(e));

  // axios.post("/api/users", { username: "hello" }).then((data) => {
  //   console.log(data);
  // });
  console.log(matchList)

  return (
    <>
    <div className="text-sky-400 text-2xl underline decoration-solid">Hi</div>
    {/* <Match /> */}
    {<Profile matches={matchList.matches} discard={next} />}
    
    </>
  );
}

export default App;
