function InputBox({
  input,
  setInput,
  handleSend
}) {
  return (
    <div className="input-area">
      <input
        type="text"
        value={input}
        placeholder="Type message..."
        onChange={(e) =>
          setInput(e.target.value)
        }
      />

      <button onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

export default InputBox;