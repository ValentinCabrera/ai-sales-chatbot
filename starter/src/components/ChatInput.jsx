import { useState } from "react";

export default function ChatInput({ onSend, isLoading }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setInputValue("");
  }

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <input
        className="chat-input"
        type="text"
        placeholder="Escribí tu mensaje..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isLoading}
        autoComplete="off"
      />
      <button
        className="chat-send-btn"
        type="submit"
        disabled={isLoading || !inputValue.trim()}
        aria-label="Enviar mensaje"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  );
}
