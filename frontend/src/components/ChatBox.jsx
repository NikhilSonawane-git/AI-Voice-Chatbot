import Message from "./Message";

function ChatBox({ messages }) {
  return (
    <div className="chat-box">
      {messages.map((msg, index) => (
        <Message
          key={index}
          message={msg}
        />
      ))}
    </div>
  );
}

export default ChatBox;