// import axios from "axios";
// import { useState, useEffect } from "react";

export default function Profile(props) {
  console.log(props);

  const user = props.currentUser;

  return (
    <div className="flex h-screen ">
      <>
      <div className="left-0 flex h-screen w-1/2 bg-blue-200  justify-center">
        <img
          className="object-scale-down"
          src={user?.cover_picture}
          alt="Cover Pic"
        />
      </div>
        <div className="flex flex-col bg-blue-200 right-0 w-1/2 gap-2">
          <div className=" bg-yellow-200">{user?.name}</div>
          <div className="flex bg-green-300 grow">{user?.summary}</div>
        </div>
      </>
    </div>
  );
}
