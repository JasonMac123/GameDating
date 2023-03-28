import { toast } from "react-toastify";
import axios from "axios";

export default function matchHelpers() {
  const addNewLike = (user1, user2, doesLike) => {
    return axios
      .post("/api/likes", { giver: user1, receiver: user2, status: doesLike })
      .then((res) => console.log(res));
  };

  const checkForMatch = (user1, user2, callback) => {
    return axios.get(`/api/likes/${user2.id}`).then((res) => {
      res.data.forEach((like) => {
        if (like.receiving_user_id === user1 && like.liked_status === true) {
          return axios
            .post(`/api/match`, { user1: user1, user2: user2.id })
            .then(() => {
              return callback(user2.name);
            })
            .catch((err) => console.log(err));
        }
      });
    });
  };

  const removeFirst = (array) => {
    let newArray = [...array];
    newArray.splice(0, 1);
    return newArray;
  };

  const updateLocation = (latitude, longitude, userID) => {
    if (latitude && longitude) {
      return axios
        .put(`/api/users/geo/${userID}`, {
          latitude: latitude,
          longitude: longitude,
        })
        .then((res) => {
          return res.data;
        });
    }
  };

  const lookUpUser = (user1) => {
    return axios.get(`/api/users/${user1}`).then((res) => {
      let user = res.data;
      return user;
    });
  };

  const notify = (name) => {
    toast(
      `Congrats, you have matched with ${name}!  Why don't you go say hi to them?`
    );
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  };

  return {
    notify,
    addNewLike,
    checkForMatch,
    removeFirst,
    updateLocation,
    lookUpUser,
    getDistanceFromLatLonInKm,
  };
}
