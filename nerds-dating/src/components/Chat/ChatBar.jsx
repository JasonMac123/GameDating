import ChatBarItem from "./ChatBarItem";

const ChatBar = ({ matchList, setChat, userID }) => {
  return (
    <div className="flex flex-col bg-red-100 w-1/3 h-screen pl-36 pr-12 pt-8 space-y-4 overflow-y-auto">
      {matchList &&
        matchList.map((item) => {
          return (
            <ChatBarItem
              key={item.id}
              profile={item}
              userID={userID}
              setChat={setChat}
            ></ChatBarItem>
          );
        })}
    </div>
  );
};

export default ChatBar;
