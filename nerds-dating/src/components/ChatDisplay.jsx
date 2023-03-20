import { useState, useEffect } from "react";
import ChatBar from "./ChatBar";
import MessageBox from "./MessageBox";
import ChatNavBar from "./ChatNavBar";
import axios from "axios";
import io from "socket.io-client";

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

  useEffect(() => {
    const socket = io.connect("/");
    socket.emit("user_connected", { id });
    socket.on("update_chat", (arg) => {
      console.log("helloworld");
    });

    return () => {
      socket.disconnect();
    };
  },[]);

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
