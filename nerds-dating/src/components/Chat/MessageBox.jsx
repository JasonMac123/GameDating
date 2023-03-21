import React from "react";
import ChatMessage from "./ChatMessage";
import useMessageChat from "../../hooks/useMessageChat";

const MessageBox = ({ chat, userID }) => {
  const { message, setMessage, chatHistory, addMessage } = useMessageChat(chat);

  return (
    <div className="h-[85vh]">
      <div className="overflow-y-auto h-3/4">
        {chatHistory.map((item) => {
          return (
            <ChatMessage
              key={item.id}
              message={item.message}
              details={item}
              users={chat}
              userID={userID}
            />
          );
        })}
      </div>
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
          className="w-full px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default MessageBox;
