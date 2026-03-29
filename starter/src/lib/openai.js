// TODO: conectar con la API de OpenAI
// En el curso vamos a reemplazar esta función con la llamada real

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-4o-mini";

/**
 * Sends a message to OpenAI and returns the assistant's reply.
 * @param {string} userMessage - The latest message from the user
 * @param {Array} conversationHistory - Previous messages [{role, content}]
 * @returns {Promise<string>} - The assistant's text response
 */
export async function sendMessageToOpenAI(userMessage, conversationHistory = []) {
  // TODO: obtener la API key desde import.meta.env.VITE_OPENAI_API_KEY
  // TODO: construir el array de messages con el system prompt + historial + mensaje nuevo
  // TODO: hacer el fetch a OPENAI_API_URL con método POST
  // TODO: retornar data.choices[0].message.content

  // Respuesta de ejemplo hasta conectar OpenAI
  await new Promise((resolve) => setTimeout(resolve, 800));
  return "¡Hola! Soy una respuesta de ejemplo. En el curso vamos a conectar esto con OpenAI para que el chatbot responda de verdad.";
}
