import axios from "axios";
import { useState, useEffect } from "react";

export default function useCurrentUserMatches(id) {
  const [potentialMatchList, setPotentialMatchList] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/match/${id}`)
      .then((res) => {
        setPotentialMatchList(res.data);
      })
      // if we wish to implement a default value instead of user-input value the following code will filter for a value
      // .then((res) => {
      //   axios.get(`api/users/geo/${id}`)
      //     .then((userGeo) => {
      //       let filteredList = res.data.filter((element) => {
      //         if(getDistanceFromLatLonInKm(element["latitude"], element["longitude"], userGeo.data[0].latitude, userGeo.data[0].longitude) < 50) {
      //         return element;
      //       }})
      //       setPotentialMatchList(filteredList);
      //     })
      // })
      .catch((e) => console.log(e));
  }, [id]);

  const next = () => {
    const newMatchArray = [...potentialMatchList];
    newMatchArray.splice(0, 1);
    setPotentialMatchList(newMatchArray);
  };

  const removeUserByID = (id) => {
    const newMatchArray = [...potentialMatchList];
    setPotentialMatchList(newMatchArray.filter((match) => match.id !== id));
  };

  return {
    potentialMatchList,
    setPotentialMatchList,
    next,
    removeUserByID,
  };
}
