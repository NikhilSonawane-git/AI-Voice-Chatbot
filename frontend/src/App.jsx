import { useState } from "react";

import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

 const handleSend = async () => {
  if (input.trim() === "") return;

  const userMessage = {
    sender: "user",
    text: input,
  };

  const response = await fetch(
    "http://localhost:8000/chat",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: input,
      }),
    }
  );

  const data = await response.json();

  const botMessage = {
    sender: "bot",
    text: data.response,
  };

  setMessages([
    ...messages,
    userMessage,
    botMessage,
  ]);

  setInput("");
};

  return (
    <div className="chat-container">
      <Header />

      <ChatBox messages={messages} />

      <InputBox
        input={input}
        setInput={setInput}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;