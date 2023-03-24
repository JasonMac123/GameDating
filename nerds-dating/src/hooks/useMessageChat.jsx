import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useMessageChat = (chat) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        scrollToBottom();
      });
  };

  return {
    message,
    setMessage,
    chatHistory,
    setChatHistory,
    addMessage,
    messagesEndRef,
    scrollToBottom,
  };
};

export default useMessageChat;
