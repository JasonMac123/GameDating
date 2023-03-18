// import axios from "axios";
// import Match from "./components/Match";
import Profile from "./components/Profile";
import addNewLike from "./helpers/addNewLikes";
// import { useState, useEffect } from "react";
import useCurrentUserMatches from "./hooks/useCurrentUserMatches"

function App() {
  const {potentialMatchList, next} = useCurrentUserMatches(1);

  return (
    <>
    <div className="text-sky-400 text-2xl underline decoration-solid">Hi</div>
    {/* <Match /> */}
    {<Profile potentialMatches={potentialMatchList.potentialMatches} discard={next} addLike={addNewLike}/>}
    
    </>
  );
}

export default App;
