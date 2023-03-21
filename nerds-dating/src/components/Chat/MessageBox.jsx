import React from "react";
import ChatMessage from "./ChatMessage";
import useMessageChat from "../../hooks/useMessageChat";

const MessageBox = ({ chat, userID }) => {
  const { message, setMessage, chatHistory, addMessage } = useMessageChat(chat);

  return (
    <div>
      {chatHistory.map((item) => {
        return (
          <ChatMessage
            key={item.id}
            message={item.message}
            details={item}
            users={chat}
          />
        );
      })}
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addMessage(
              message,
              userID,
              chat.first_user_id === userID
                ? chat.second_user_id
                : chat.first_user_id,
              chat.id
            );
          }}
        >
          <input
            type="text"
            placeholder="Say something!"
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
