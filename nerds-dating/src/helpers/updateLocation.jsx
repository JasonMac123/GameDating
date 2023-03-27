import axios from "axios";

export default function updateLocation(latitude, longitude, userID) {
  if (latitude && longitude) {
    return axios.put(`/api/users/geo/${userID}`, {latitude: latitude, longitude: longitude}).then((res) => {
      console.log("updating")
      console.log(res)
      return res.data;
    })
    ;
  }
}
