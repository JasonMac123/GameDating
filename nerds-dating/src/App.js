import { useState, useEffect } from "react";
import ChatDisplay from "./components/ChatDisplay";
import io from "socket.io-client";

function App() {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const socket = io.connect("/");

    return () => {
      socket.disconnect();
    };
  });

  return (
    <div className="text-sky-400 text-2xl underline decoration-solid">
      <ChatDisplay />
    </div>
  );
}

export default App;
