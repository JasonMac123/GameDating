import ChatBarItem from "./ChatBarItem";

const ChatBar = ({ matchList, setChat, userID }) => {
  return (
    <div className="flex flex-col">
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
