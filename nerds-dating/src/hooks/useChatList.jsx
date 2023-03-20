import { useState, useEffect } from "react";
import axios from "axios";

const useChatList = (id) => {
  const [chat, setChat] = useState({});
  const [matchList, setMatchList] = useState([]);

  useEffect(() => {
    if (!id) {
      setMatchList([]);
      return;
    }
    axios.get(`/api/chat/${id}`).then((res) => {
      setMatchList(res.data);
      setChat(res.data[0]);
    });
  }, [id]);

  return { chat, setChat, matchList };
};

export default useChatList;
