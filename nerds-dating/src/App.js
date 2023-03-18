import axios from "axios";

function App() {
  axios
    .get("/api/users")
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => console.log(e));

  axios.post("/api/users", { username: "hello" }).then((data) => {
    console.log(data);
  });

  return (
    <div className="text-sky-400 text-2xl underline decoration-solid">
      
    </div>
  );
}

export default App;
