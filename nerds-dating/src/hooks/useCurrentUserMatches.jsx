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
      .catch((e) => console.log(e));
  }, [id]);

  const removeUserByID = (id) => {
    const newMatchArray = [...potentialMatchList];
    setPotentialMatchList(newMatchArray.filter((match) => match.id !== id));
  };

  return {
    potentialMatchList,
    setPotentialMatchList,
    removeUserByID,
  };
}
