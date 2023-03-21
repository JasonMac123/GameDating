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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProfile from "./hooks/useProfile";

function App() {
  const [display, setDisplay] = useState(66);
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
  const [userID, setUserID] = useState(0);
  const { potentialMatchList, next } = useCurrentUserMatches(1);
  const { profile, setProfile} = useProfile(3)
  const notify = (name) => toast(`You have a new match with ${name}!`)
  const testToast = (name) => toast(`You have a new match with ${name}!`)

  return (
    <>
      {/* <div className="text-sky-400 text-2xl underline decoration-solid">Hi</div> */}
      {display === 66 && <Match
        potentialMatches={potentialMatchList.potentialMatches}
        discard={next}
        addLike={addNewLike}
        checkMatch={checkForMatch}
        notify ={notify}
      />}
      <button onClick={()=>testToast(userID)}>Notify!</button>
      <ToastContainer />
      {display === 77 && <Profile currentUser={profile} />}
      {display === 55 && <Profile currentUser={testUser} />}
      {display === 5 && <ChatDisplay />}
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
    </>
  );
}

export default App;
