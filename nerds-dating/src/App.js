import axios from "axios";
import { useState } from "react";
import Login from './components/Login'
import Register from "./components/Register";
import Interests from "./components/Interests";

function App(props) {
  const [display, setDisplay] = useState(1)
  const [userID, setUserID] = useState(0)
  // axios
  //   .get("/api/users")
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((e) => console.log(e));

  // axios.post("/api/users", { username: "hello" }).then((data) => {
  //   console.log(data);
  // });

  return (
    <div className="text-sky-400 text-2xl underline decoration-solid">
      {display === 1 && <Login display={display} setDisplay={setDisplay} userID={userID} setUserID={setUserID}/>}
      {display === 2 && <Register display={display} setDisplay={setDisplay} userID={userID} setUserID={setUserID}/>}
      {display ==3 && <Interests display={display} setDisplay={setDisplay} userID={userID} setUserID={setUserID}/>}
    </div>
  );
}

export default App;
