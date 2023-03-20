import axios from "axios";

export default function checkForMatch(user1, user2) {
  axios.get(`/api/likes/${user2}`).then((res) => {
    res.data.forEach((like) => {
      if (like.receiving_user_id === user1 && like.liked_status === true) {
        return axios.post(`/api/match`, { user1: user1, user2: user2 });
      }
    });
  });
}
