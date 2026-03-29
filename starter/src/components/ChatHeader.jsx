export default function ChatHeader() {
  return (
    <header className="chat-header">
      <div className="chat-header-avatar">
        <img
          src="https://i.pravatar.cc/40?img=47"
          alt="Urban Style Assistant"
          className="chat-header-avatar-img"
        />
        <span className="chat-header-avatar-dot" />
      </div>
      <div className="chat-header-text">
        <h1 className="chat-header-title">Urban Style — Asistente</h1>
        <p className="chat-header-subtitle">Automated customer assistant powered by AI</p>
      </div>
      <div className="chat-header-badge">Live</div>
    </header>
  );
}
