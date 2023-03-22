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

  useEffect(() => {
    axios
      .get(`/api/match/${id}`)
      .then((res) => { setPotentialMatchList(res.data) })
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