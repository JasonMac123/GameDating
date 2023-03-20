import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ChatMessage from "./ChatMessage";

const MessageBox = (props) => {
  const { chat } = props;
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const id = 1;

  useEffect(() => {
    if (!chat.id) return;
    axios.get(`/api/chat/chatroom/${chat.id}`).then((res) => {
      setChatHistory(res.data);
    });
  }, [chat]);

  const addMessage = (text, first_user, second_user, chatroomID) => {
    if (!text) return;
    axios
      .post("/api/chat/send", {
        first_user,
        second_user,
        chatroomID,
        message: text,
      })
      .then((res) => {
        setChatHistory([...chatHistory, res.data[0]]);
        setMessage("");
      });
  };

  return (
    <div>
      {chatHistory.map((item) => {
        return <ChatMessage key={item.id} message={item.message} />;
      })}
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addMessage(
              message,
              id,
              chat.first_user_id === id
                ? chat.second_user_id
                : chat.first_user_id,
              chat.id
            );
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button>Enter</button>
        </form>
      </div>
    </div>
  );
};

export default MessageBox;
