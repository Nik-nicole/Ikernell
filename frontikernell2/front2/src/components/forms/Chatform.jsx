import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const API_URL = 'https://api-inference.huggingface.co/models/gpt2'; // Endpoint para el modelo GPT-2
console.log('API Key:', apiKey);

export default function Chatform() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (text, sender) => {
    setMessages(prevMessages => [...prevMessages, { text, sender }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    addMessage(input, 'user');
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(API_URL, {
        inputs: input
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json' // Asegúrate de especificar el tipo de contenido
        }
      });

      const reply = response.data?.generated_text || 'No response from model'; // Ajustar según el formato de respuesta
      addMessage(reply, 'bot');
    } catch (error) {
      console.error('Error during chat completion:', error);
      addMessage('Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.', 'bot');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <main ref={containerRef} className="w-full max-w-md h-[70vh] bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4 overflow-y-auto">
        <ul className="space-y-2">
          {isLoading ? (
            <li className="flex flex-col items-center justify-center h-full">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <h4 className="mt-4 text-gray-700">Cargando...</h4>
              <h5 className="text-xs text-gray-500">Esto puede tardar un poco. Paciencia.</h5>
            </li>
          ) : (
            messages.map((message, index) => (
              <li key={index} className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${message.sender === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
                  {message.sender === 'user' ? 'Tú' : 'GPT'}
                </span>
                <p className={`mt-1 px-3 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
                  {message.text}
                </p>
              </li>
            ))
          )}
        </ul>
      </main>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow rounded-l-full border border-gray-300 px-4 py-2"
          placeholder="Escribe tu mensaje aquí..."
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-blue-500 text-white rounded-r-full px-4 py-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
