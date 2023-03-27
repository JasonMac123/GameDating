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
        {chat && <ChatNavBar chat={chat} userID={userID} />}
        {chat && <MessageBox chat={chat} userID={userID} />}
        {!chat && (
          <div className="flex justify-center items-center mt-24 p-80 bg-gradient-to-r from-zinc-50 to-indigo-100 rounded-2xl text-4xl">
            No people to talk to :(
          </div>
        )}
      </div>
    </section>
  );
};

export default ChatDisplay;
