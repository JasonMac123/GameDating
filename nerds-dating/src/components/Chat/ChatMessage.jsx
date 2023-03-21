import React from "react";

const ChatMessage = ({ message, users, details }) => {
  return (
    <div className="flex h-16">
      {details.messaging_user_id === users.first_user_id ? (
        <>
          <img
            src={users.user1_coverpicture}
            alt=""
            className="objet-scale-down"
          />
          <p className="pr-4">{users.user1_name}</p>
        </>
      ) : (
        <>
          <img
            src={users.user2_coverpicture}
            alt=""
            className="objet-scale-down"
          />
          <p className="pr-4">{users.user2_name}</p>
        </>
      )}
      {message}
    </div>
  );
};

export default ChatMessage;
