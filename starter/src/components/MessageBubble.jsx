export default function MessageBubble({ message }) {
  const isUser = message.role === "user";
  const isLoading = message.isLoading === true;

  if (isLoading) {
    return (
      <div className="message-row message-row--assistant">
        <img
          src="https://i.pravatar.cc/40?img=47"
          alt="Assistant"
          className="message-avatar"
        />
        <div className="message-bubble message-bubble--assistant message-bubble--loading">
          <span className="typing-dot" />
          <span className="typing-dot" />
          <span className="typing-dot" />
        </div>
      </div>
    );
  }

  return (
    <div className={`message-row message-row--${isUser ? "user" : "assistant"}`}>
      {!isUser && (
        <img
          src="https://i.pravatar.cc/40?img=47"
          alt="Assistant"
          className="message-avatar"
        />
      )}
      <div className={`message-bubble message-bubble--${isUser ? "user" : "assistant"}`}>
        {message.content}
      </div>
    </div>
  );
}
