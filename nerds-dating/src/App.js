
import Match from "./components/Match";
import Profile from "./components/Profile";
import addNewLike from "./helpers/addNewLikes";
import useCurrentUserMatches from "./hooks/useCurrentUserMatches"
import checkForMatch from "./helpers/checkForMatch";
import { useState } from "react";
import ChatDisplay from "./components/ChatDisplay";

function App() {
  const [display, setDisplay] = useState(0);
  const user = 1;
  const {potentialMatchList, next} = useCurrentUserMatches(1);
  const testUser = {"id":1,"name":"Jason","email":"testing@gmail.com","phone_number":"111-111-1111","profile_picture":"https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg","cover_picture":"https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80","gender_identity":"M","gender_preference":"M","summary":"testing","password":"password"}

  return (
    <>
    <div className="text-sky-400 text-2xl underline decoration-solid">Hi</div>
    <Match potentialMatches={potentialMatchList.potentialMatches} discard={next} addLike={addNewLike} checkMatch={checkForMatch} />
    {/* {<Profile currentUser={testUser} />} */}
    <ChatDisplay />
    
    </>
  )
}


export default App;
