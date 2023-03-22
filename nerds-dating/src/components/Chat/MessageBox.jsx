import React from "react";
import ChatMessage from "./ChatMessage";
import useMessageChat from "../../hooks/useMessageChat";
import { FaLongArrowAltRight } from "react-icons/fa";

const MessageBox = ({ chat, userID }) => {
  const { message, setMessage, chatHistory, addMessage } = useMessageChat(chat);

  return (
    <div className="h-2/3">
      <div className="overflow-y-auto space-y-8 bg-slate-200 p-4 h-full rounded-lg scroll-smooth">
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
      <div className="pt-4 pb-4">
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
          className="flex w-full space-x-4"
        >
          <textarea
            type="text"
            placeholder="Say something!"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-green-500 rounded-xl w-40 flex justify-center items-center">
            <FaLongArrowAltRight size={50} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageBox;
