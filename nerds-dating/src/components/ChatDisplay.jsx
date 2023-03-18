import { useState, useEffect } from "react";
import ChatBar from "./ChatBar";
import MessageBox from "./MessageBox";
import axios from "axios";
import ChatNavBar from "./ChatNavBar";

const ChatDisplay = () => {
  const [chat, setChat] = useState({});
  const [matchList, setMatchList] = useState([]);
  const id = 1;

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

  return (
    <div className="flex flex-row px-8">
      <ChatBar matchList={matchList} setChat={setChat} />
      <div className="px-32">
        <ChatNavBar chat={chat} />
        <MessageBox chat={chat} />
      </div>
    </div>
  );
};

export default ChatDisplay;
