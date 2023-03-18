import axios from "axios";

export default function addNewLike(user1, user2) {
  console.log(typeof user1, typeof user2)
  axios.post("/api/likes", {giver: user1, receiver: user2})
  .then(res => console.log(res))
}