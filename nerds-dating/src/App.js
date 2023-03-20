import { useState } from "react";
import ChatDisplay from "./components/ChatDisplay";

function App() {
  const [display, setDisplay] = useState(0);
  const user = 1;

  return (
    <div className="text-sky-400 text-2xl underline decoration-solid">
      <ChatDisplay />
    </div>
  );
}

export default App;
