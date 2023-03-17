import axios from "axios";

function App() {
  axios
    .get("/api/users")
    .then((res) => {
      console.log(res);
    })
    .catch((e) => console.log(e));
  return (
    <div className="text-sky-400 text-2xl underline decoration-solid"></div>
  );
}

export default App;
