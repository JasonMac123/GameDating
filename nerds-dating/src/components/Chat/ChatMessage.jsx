import React from "react";

const ChatMessage = ({ message, users, details, userID }) => {
  const messagingUser = details.messaging_user_id;
  const firstUser = users.first_user_id;
  return (
    <div className="flex h-16">
      {messagingUser === firstUser ? (
        firstUser === userID ? (
          <div className="flex h-16 bg-red-100">
            <img
              src={users.user1_coverpicture}
              alt=""
              className="objet-scale-down"
            />
            <p className="pr-4">{users.user1_name}</p>
            {message}
          </div>
        ) : (
          <div className="flex h-16 bg-red-500">
            {message}
            <img
              src={users.user1_coverpicture}
              alt=""
              className="objet-scale-down"
            />
            <p className="pr-4">{users.user1_name}</p>
          </div>
        )
      ) : messagingUser !== userID ? (
        <div className="flex h-16 bg-red-500">
          {message}
          <img
            src={users.user2_coverpicture}
            alt=""
            className="objet-scale-down"
          />
          <p className="pr-4">{users.user2_name}</p>
        </div>
      ) : (
        <div className="flex h-16 bg-red-500">
          <img
            src={users.user2_coverpicture}
            alt=""
            className="objet-scale-down"
          />
          <p className="pr-4">{users.user2_name}</p>
          <p className="text-red-500">{message}</p>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
