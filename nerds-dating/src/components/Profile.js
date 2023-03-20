// import axios from "axios";
// import { useState, useEffect } from "react";

export default function Profile(props) {
  console.log(props);

  const user = props.currentUser

  return (
    <>
        <>
          <img
            className="left-0 object-scale-down h-48 w-96"
            src={user.cover_picture}
            alt="Cover Pic"
          />
          <div className="bg-blue-100">
            <div
              className="right-0 bg-yellow-200"
            >
              {user.name}
            </div>
            <br>
            </br>
            <div className="bg-green-300">
              {user.summary}
            </div>
            
          </div>
        </>
    </>
  )
}