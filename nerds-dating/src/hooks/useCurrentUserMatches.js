import axios from "axios";
import { useState, useEffect } from "react";

export default function useCurrentUserMatches() {
  const [state, setState] = useState({
    matches: [],
  });

  useEffect(() => {
    axios
    .get("/api/match")
    .then((res) => {
      console.log(res.data);
      setState(prev => ({ ...prev, matches: res.data }));
    })
    .catch((e) => console.log(e));
  }, [])

  const next = () => {
    const newMatchArray = [...state.matches]
    newMatchArray.splice(0, 1);
    setState(prev => ({ ...prev, matches: newMatchArray }))
  } 

  return {
    state,
    setState, 
    next
  }
}