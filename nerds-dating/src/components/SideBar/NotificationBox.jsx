import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NotificationMessage from "./NotificationMessage";

const NotificationBox = ({ userID }) => {
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/notifications/${userID}`).then((res) => {
      setNotificationList(res.data);
    });
  });

  return (
    <div className="absolute left-40 bottom-20 bg-red-500 w-80 h-60 p-4 rounded-xl space-y-4 overflow-y-auto">
      {notificationList &&
        notificationList.map((item) => {
          return (
            <NotificationMessage
              message={item.message}
              createdDate={item.created_date}
              key={item.id}
            />
          );
        })}
    </div>
  );
};

export default NotificationBox;
