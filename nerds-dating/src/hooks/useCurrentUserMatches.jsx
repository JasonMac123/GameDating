import axios from "axios";
import { useState, useEffect } from "react";

// export default function useCurrentUserMatches(id) {
//   const [potentialMatchList, setPotentialMatchList] = useState({
//     potentialMatches: [],
//   });

//   useEffect(() => {
//     axios
//       .get(`/api/match/${id}`)
//       .then((res) => {
//         setPotentialMatchList((prev) => ({
//           ...prev,
//           potentialMatches: res.data,
//         }));
//       })
//       .catch((e) => console.log(e));
//   }, [id]);

//   const next = () => {
//     const newMatchArray = [...potentialMatchList.potentialMatches];
//     newMatchArray.splice(0, 1);
//     setPotentialMatchList((prev) => ({
//       ...prev,
//       potentialMatches: newMatchArray,
//     }));
//   };

//   return {
//     potentialMatchList,
//     setPotentialMatchList,
//     next,
//   };
// }

export default function useCurrentUserMatches(id) {
  const [potentialMatchList, setPotentialMatchList] = useState(
    [],
  );
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }

  useEffect(() => {
    axios
      .get(`/api/match/${id}`)
      .then((res) => { setPotentialMatchList(res.data) })
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

  return {
    potentialMatchList,
    setPotentialMatchList,
    next,
  };
}