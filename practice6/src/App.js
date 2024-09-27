import { useState, useEffect } from "react";
import Input from "./Input";

function App() {
  const [startEnd, changeBtn] = useState("Start");
  useEffect(() => {
    const startEndBtn = document.querySelector("#startEndBtn");
    if (startEndBtn) {
      const handleClick = () => {
        console.log(startEndBtn);
      };
      startEndBtn.addEventListener("click", handleClick);
      return () => {
        startEndBtn.removeEventListener("click", handleClick);
      };
    }
  }, []);

  function btnState() {
    if (startEnd === "Start") {
      changeBtn("End");
    } else {
      changeBtn("Start");
    }
  }

  return (
    <>
      <h1>React 연습</h1>
      <div>숫자가 들어갑니다.</div>
      <br />
      <Input btnState={btnState} startEnd={startEnd} />
    </>
  );
}

export default App;
