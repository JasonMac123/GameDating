import axios from "axios";
import Login from './components/Login'
import Register from "./components/Register";

function App() {
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
      {<Register />}
    </div>
  );
}

export default App;
