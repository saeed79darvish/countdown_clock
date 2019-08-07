import React, { useState } from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("August 15, 2019");

  const onChange = e => {
    e.preventDefault();
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    setMessage(text);
    setText("");
  };
  return (
    <div className="App">
      <div style={{ fontSize: "20px" }}>Countdwon To {message}</div>
      <div style={{ marginTop: "5%" }}>
        <Clock message={message} />
        <div style={{ marginTop: "5%" }}>
          <input placeholder="New Date" value={text} onChange={onChange} />
          <button onClick={onSubmit}>submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
