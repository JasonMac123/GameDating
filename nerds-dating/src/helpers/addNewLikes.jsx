import axios from "axios";

export default function addNewLike(user1, user2, doesLike) {
  return axios
    .post("/api/likes", { giver: user1, receiver: user2, status: doesLike })
    .then((res) => console.log(res));
}
