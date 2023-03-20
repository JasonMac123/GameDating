import { useEffect } from "react";
import ChatBar from "./ChatBar";
import MessageBox from "./MessageBox";
import ChatNavBar from "./ChatNavBar";
import io from "socket.io-client";
import useChatList from "../hooks/useChatList";

const ChatDisplay = () => {
  const id = 1;
  const { chat, setChat, matchList } = useChatList(id);

  useEffect(() => {
    const socket = io.connect("/");
    socket.emit("user_connected", { id });
    socket.on("update_chat", (arg) => {
      console.log("helloworld");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
