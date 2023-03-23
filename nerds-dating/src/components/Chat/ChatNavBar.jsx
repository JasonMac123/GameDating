import React from "react";

const ChatNavBar = ({ chat, userID }) => {
  return (
    <section className="flex my-8 py-4 bg-slate-200 w-full rounded-xl">
      <div className="flex flex-row pl-4 justify-start items-center space-x-4">
        {userID === chat.first_user_id ? (
          <>
            <div className="rounded-full w-30 h-30 overflow-hidden">
              <img
                src={chat.user2_coverpicture}
                alt=""
                className="w-20 h-20 object-cover"
              />
            </div>
            <p className="font-bold">{chat.user2_name}</p>
          </>
        ) : (
          <>
            <div className="rounded-full w-30 h-30 overflow-hidden">
              <img
                src={chat.user1_coverpicture}
                alt=""
                className="w-20 h-20 object-cover"
              />
            </div>
            <p className="font-bold">{chat.user1_name}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default ChatNavBar;
