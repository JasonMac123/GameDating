import axios from "axios";
import { useState, useEffect } from "react";

export default function useProfile(id) {
  const [profile, setProfile] = useState();

  useEffect(() => {
    axios
      .get(`/api/users/${id}`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  return {
    profile,
    setProfile,
  };
}
