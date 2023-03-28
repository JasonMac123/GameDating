import Match from "./components/Match";
import useCurrentUserMatches from "./hooks/useCurrentUserMatches";
import { useState } from "react";
import ChatDisplay from "./components/Chat/ChatDisplay";
import Login from "./components/Profile/Login";
import Register from "./components/Profile/Register";
import Interests from "./components/Profile/Interests";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [display, setDisplay] = useState(1);
  const [userID, setUserID] = useState(0);
  const [regID, setRegID] = useState(0);
  const [distanceFilter, setDistanceFilter] = useState(50);
  const { potentialMatchList, setPotentialMatchList, next, removeUserByID } =
    useCurrentUserMatches(userID);
  const [userLatitude, setUserLatitude] = useState("");
  const [userLongitude, setUserLongitude] = useState("");

  return (
    <>
      <ToastContainer />
      {userID !== 0 && display === 6 && (
        <Match
          potentialMatches={potentialMatchList}
          useCurrentUserMatches={useCurrentUserMatches}
          setPotentialMatchList={setPotentialMatchList}
          discard={next}
          removeUserByID={removeUserByID}
          currentUser={userID}
          userLatitude={userLatitude}
          setUserLatitude={setUserLatitude}
          userLongitude={userLongitude}
          setUserLongitude={setUserLongitude}
          distanceFilter={distanceFilter}
          setDistanceFilter={setDistanceFilter}
        />
      )}
      {userID !== 0 && (
        <SideBar
          setDisplay={setDisplay}
          userID={userID}
          setUserID={setUserID}
        />
      )}
      {display === 1 && (
        <Login
          display={display}
          setDisplay={setDisplay}
          userID={userID}
          setUserID={setUserID}
          regID={regID}
          setRegID={setRegID}
        />
      )}
      {display === 2 && (
        <Register
          display={display}
          setDisplay={setDisplay}
          userID={userID}
          setUserID={setUserID}
          regID={regID}
          setRegID={setRegID}
        />
      )}
      {display === 3 && (
        <Interests
          display={display}
          setDisplay={setDisplay}
          userID={userID}
          setUserID={setUserID}
          regID={regID}
          setRegID={setRegID}
        />
      )}
      {display === 5 && <ChatDisplay userID={userID} />}
    </>
  );
}

export default App;
