import React from "react";

const NotificationMessage = ({ message, createdTime }) => {
  return (
    <div className="bg-white text-black p-4 rounded-md">
      <div>{message}</div>
      <div>{createdTime}</div>
    </div>
  );
};

export default NotificationMessage;
