import Match from "./components/Match";
import Profile from "./components/Profile/Profile";
import addNewLike from "./helpers/addNewLikes";
import useCurrentUserMatches from "./hooks/useCurrentUserMatches";
import checkForMatch from "./helpers/checkForMatch";
import { useState } from "react";
import ChatDisplay from "./components/Chat/ChatDisplay";
import Login from "./components/Profile/Login";
import Register from "./components/Profile/Register";
import Interests from "./components/Profile/Interests";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [display, setDisplay] = useState(1);
  const [userID, setUserID] = useState(0);
  const { potentialMatchList, next } = useCurrentUserMatches(1);
  const testUser = {
    id: 1,
    name: "Jason",
    email: "testing@gmail.com",
    phone_number: "111-111-1111",
    profile_picture:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg",
    cover_picture:
      "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
    gender_identity: "M",
    gender_preference: "M",
    summary: "testing",
    password: "password",
  };

  return (
    <>
      {userID !== 0 && <SideBar setDisplay={setDisplay} />}
      {/* {<Profile currentUser={testUser} />} */}
      {display === 1 && (
        <Login
          display={display}
          setDisplay={setDisplay}
          userID={userID}
          setUserID={setUserID}
        />
      )}
      {display === 2 && (
        <Register
          display={display}
          setDisplay={setDisplay}
          userID={userID}
          setUserID={setUserID}
        />
      )}
      {display === 3 && (
        <Interests
          display={display}
          setDisplay={setDisplay}
          userID={userID}
          setUserID={setUserID}
        />
      )}
      {display === 6 && (
        <Match
          potentialMatches={potentialMatchList.potentialMatches}
          discard={next}
          addLike={addNewLike}
          checkMatch={checkForMatch}
        />
      )}
      {display === 5 && <ChatDisplay userID={userID} />}
    </>
  );
}

export default App;
