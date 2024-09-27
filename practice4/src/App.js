import { useState } from "react";
import Input from "./Input";
import Output from "./Output";

function App() {
  const [message, setMessage] = useState("Hello world");

  function eventHandler() {
    setMessage("안녕 세계");
    console.log("버튼 클릭", message);
  }

  return (
    <>
      <h1>Hello React world</h1>
      <Input handler={eventHandler} greeting={message} />
      <Output greeting={message} />
    </>
  );
}

export default App;
