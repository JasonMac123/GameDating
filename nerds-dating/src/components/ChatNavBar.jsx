import React from "react";

const ChatNavBar = (props) => {
  const { chat } = props;
  const user = 1;
  return (
    <div>
      <div className="flex w-16">
        {user === chat.first_user_id ? (
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
            <p>{chat.user1cover_picture}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatNavBar;
