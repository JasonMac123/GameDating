import React from "react";

const ChatMessage = ({ message, users, details, userID }) => {
  const messagingUser = details.messaging_user_id;
  const firstUser = users.first_user_id;
  return (
    <div
      className={`flex h-16 w-full pb-4 ${
        (firstUser !== userID && messagingUser === firstUser) ||
        messagingUser !== userID
          ? "justify-end"
          : ""
      }`}
    >
      {messagingUser === firstUser ? (
        firstUser === userID ? (
          <div className="flex h-max w-full py-2">
            <div className="flex flex-col space-y-2 h-24 bg-slate-200">
              <div className="rounded-full w-12 h-12 overflow-hidden">
                <img
                  src={users.user1_coverpicture}
                  alt=""
                  className="object-cover h-14 w-14"
                />
              </div>
              <p className="pr-4 font-bold">{users.user1_name}</p>
            </div>
            <div className="flex bg-green-400 rounded-xl h-max py-4 px-4 break-all max-w-xs whitespace-prewrap">
              {message}
            </div>
          </div>
        ) : (
          <div className="flex h-16 space-x-4">
            <div className="bg-red-500 text-white rounded-xl h-max py-4 px-4 break-all max-w-xs whitespace-prewrap">
              {message}
            </div>
            <div className="flex flex-col space-y-2 h-24 bg-slate-200">
              <div className="rounded-full w-12 h-12 overflow-hidden">
                <img
                  src={users.user1_coverpicture}
                  alt=""
                  className="object-cover h-14 w-14"
                />
              </div>
              <p className="pr-4 font-bold">{users.user1_name}</p>
            </div>
          </div>
        )
      ) : messagingUser !== userID ? (
        <div className="flex h-16 space-x-4">
          <div className="bg-red-500 text-white rounded-xl h-max py-4 px-4 break-all max-w-xs whitespace-prewrap">
            {message}
          </div>
          <div className="flex flex-col space-y-2 h-24 bg-slate-200">
            <div className="rounded-full w-12 h-12 overflow-hidden">
              <img
                src={users.user2_coverpicture}
                alt=""
                className="object-cover h-14 w-14"
              />
            </div>
            <p className="pr-4 font-bold">{users.user2_name}</p>
          </div>
        </div>
      ) : (
        <div className="flex h-max w-1/2">
          <div className="flex flex-col space-y-2 h-24 bg-slate-200">
            <div className="rounded-full w-12 h-12 overflow-hidden">
              <img
                src={users.user2_coverpicture}
                alt=""
                className="object-cover h-14 w-14"
              />
            </div>
            <p className="pr-4 font-bold">{users.user2_name}</p>
          </div>
          <div className=" bg-green-400 rounded-xl h-max py-4 px-4 break-all max-w-xs whitespace-prewrap">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
