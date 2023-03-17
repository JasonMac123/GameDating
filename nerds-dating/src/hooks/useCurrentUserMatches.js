import axios from "axios";
import { useState, useEffect } from "react";

export default function useCurrentUserMatches() {
  const [matchList, setMatchList] = useState({
    matches: [],
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

  useEffect((id) => {
    axios
    .get(`/api/match/1`)
    .then((res) => {
      setMatchList(prev => ({ ...prev, matches: res.data }));
    })
    .catch((e) => console.log(e));
  }, [])

  const next = () => {
    const newMatchArray = [...matchList.matches]
    newMatchArray.splice(0, 1);
    setMatchList(prev => ({ ...prev, matches: newMatchArray }))
  } 

  return {
    matchList,
    setMatchList, 
    next
  }
}