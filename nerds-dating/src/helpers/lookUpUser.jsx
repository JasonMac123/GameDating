import axios from "axios";

export default function lookUpUser(user1) {
  return axios.get(`/api/users/${user1}`).then((res) => {
    let user = res.data;
    return user;
  });
}
