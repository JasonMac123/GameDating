import Match from "./components/Match";
import Profile from "./components/Profile/Profile";
import useCurrentUserMatches from "./hooks/useCurrentUserMatches";
import { useState } from "react";
import ChatDisplay from "./components/Chat/ChatDisplay";
import Login from "./components/Profile/Login";
import Register from "./components/Profile/Register";
import Interests from "./components/Profile/Interests";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useProfile from "./hooks/useProfile";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [display, setDisplay] = useState(1);
  const [userID, setUserID] = useState(0);
  const [regID, setRegID] = useState(0);
  const [distanceFilter, setDistanceFilter] = useState(50);
  const { potentialMatchList, setPotentialMatchList, next, removeUserByID } = useCurrentUserMatches(userID);
  const { profile, setProfile} = useProfile(userID)
  const [userLatitude, setUserLatitude] = useState("");
  const [userLongitude, setUserLongitude] = useState("");

  return (
    <>
      {/* <div className="text-sky-400 text-2xl underline decoration-solid">Hi</div> */}

      {/* several buttons for ease of testing and switching between profiles */}
      {/* <div>
        <button onClick={()=>lookUpUser(2).then(res=> setProfile(res))}>Left!</button>
        <button onClick={()=>lookUpUser(3).then(res=> setProfile(res))}>Right!</button>
        <button onClick={()=>display === 66? setDisplay(77) : setDisplay(66)}>switch!</button>
        <button onClick={()=>setPotentialMatchList([])}>empty matches!</button>
              <button className="flex px-64" onClick={()=>display === 6? setDisplay(77) : setDisplay(6)}>switch!</button>
      </div> */}
      <ToastContainer />
      {userID !== 0 && display === 6 && <Match
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
      />}
      {/* {display === 77 && <Profile currentUserID={userID} />} */}
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
