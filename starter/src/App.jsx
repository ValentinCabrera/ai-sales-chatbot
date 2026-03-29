import { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import SuggestionChips from "./components/SuggestionChips";
// TODO: importar sendMessageToOpenAI desde "./lib/openai"
import { sendMessageToOpenAI } from "./lib/openai";

const INITIAL_MESSAGES = [
  {
    id: "welcome",
    role: "assistant",
    content: "¡Hola! Bienvenido a Urban Style 👋 Soy tu asistente virtual y estoy acá para ayudarte con productos, precios, envíos y pedidos. ¿Qué estás buscando hoy?",
  },
];

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export default function App() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSend(userText) {
    const userMessage = { id: generateId(), role: "user", content: userText };
    const loadingMessage = { id: `loading-${generateId()}`, role: "assistant", isLoading: true };

    let historySnapshot;
    setMessages((prev) => {
      historySnapshot = [...prev, userMessage];
      return [...historySnapshot, loadingMessage];
    });
    setIsLoading(true);

    try {
      const history = historySnapshot.map(({ role, content }) => ({ role, content }));

      // TODO: reemplazar esta llamada con la función real de OpenAI
      const assistantText = await sendMessageToOpenAI(userText, history);

      const assistantMessage = {
        id: generateId(),
        role: "assistant",
        content: assistantText,
      };

      setMessages((prev) =>
        prev.filter((m) => !m.isLoading).concat(assistantMessage)
      );
    } catch {
      const errorMessage = {
        id: generateId(),
        role: "assistant",
        content: "No pude responder en este momento. Probá de nuevo en unos segundos.",
      };
      setMessages((prev) =>
        prev.filter((m) => !m.isLoading).concat(errorMessage)
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app">
      <div className="chat-container">
        <ChatHeader />
        <MessageList messages={messages} />
        <div className="chat-footer">
          <SuggestionChips onSelect={handleSend} isLoading={isLoading} />
          <ChatInput onSend={handleSend} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
