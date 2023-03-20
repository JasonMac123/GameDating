import ChatBarItem from "./ChatBarItem";

const ChatBar = (props) => {
  const id = 1;
  const { matchList, setChat } = props;

  return (
    <div className="flex flex-col">
      {matchList &&
        matchList.map((item) => {
          return (
            <ChatBarItem
              key={item.id}
              profile={item}
              user={id}
              setChat={setChat}
            ></ChatBarItem>
          );
        })}
    </div>
  );
};

export default ChatBar;
