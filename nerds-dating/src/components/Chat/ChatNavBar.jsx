import React from "react";

const ChatNavBar = ({chat, userID}) => {
  return (
    <div>
      <div className="flex w-16">
        {userID === chat.first_user_id ? (
          <>
            <img
              src={chat.user2_coverpicture}
              alt=""
              className="objet-scale-down"
            />
            <p>{chat.user2_name}</p>
          </>
        ) : (
          <>
            <img
              src={chat.user1_coverpicture}
              alt=""
              className="objet-scale-down"
            />
            <p>{chat.user1_name}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatNavBar;
