import axios from "axios";
import { useState, useEffect } from "react";

export default function useCurrentUserMatches(id) {
  const [potentialMatchList, setPotentialMatchList] = useState({
    potentialMatches: [],
  });

  // useEffect((id) => {
  //   axios
  //   .get(`/api/match/${id}`)
  //   .then((res) => {
  //     // console.log(res.data);
  //     setMatch(prev => ({ ...prev, matches: res.data }));
  //   })
  //   .catch((e) => console.log(e));
  // }, [])

  useEffect(() => {
    axios
      .get(`/api/match/${id}`)
      .then((res) => {
        setPotentialMatchList((prev) => ({
          ...prev,
          potentialMatches: res.data,
        }));
      })
      .catch((e) => console.log(e));
  }, [id]);

  const next = () => {
    const newMatchArray = [...potentialMatchList.potentialMatches];
    newMatchArray.splice(0, 1);
    setPotentialMatchList((prev) => ({
      ...prev,
      potentialMatches: newMatchArray,
    }));
  };

  return {
    potentialMatchList,
    setPotentialMatchList,
    next,
  };
}
