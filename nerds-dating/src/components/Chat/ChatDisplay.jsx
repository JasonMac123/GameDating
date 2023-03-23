import ChatBar from "./ChatBar";
import MessageBox from "./MessageBox";
import ChatNavBar from "./ChatNavBar";
import useChatList from "../../hooks/useChatList";

const ChatDisplay = ({ userID }) => {
  const { chat, setChat, matchList } = useChatList(userID);
  return (
    <section className="flex flex-row px-8">
      <ChatBar matchList={matchList} setChat={setChat} userID={userID} />
      <div className="px-32 w-screen h-screen">
        <ChatNavBar chat={chat} userID={userID} />
        <MessageBox chat={chat} userID={userID} />
      </div>
    </section>
  );
};

export default ChatDisplay;
