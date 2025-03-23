import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChatMessage } from '../components/chat-message';
import { ChatInput } from '../components/chat-input';
import { ArrowLeft } from 'lucide-react';

export function ChatPage() {
  const [messages, setMessages] = useState([
    {
      isBot: true,
      message: "Hello! I'm your LoanSense AI advisor. To help you find the best loan options, could you describe your situation? For example, are you looking for a home loan, personal loan, or business loan?"
    }
  ]);

  const handleSendMessage = (message: string) => {
    setMessages(prev => [...prev, { isBot: false, message }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        isBot: true,
        message: "I understand your needs. Let me analyze the best loan options for your situation..."
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <div className="w-full bg-white dark:bg-gray-800 p-4 shadow-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 flex flex-col gap-4">
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              isBot={msg.isBot}
              message={msg.message}
            />
          ))}
        </div>
        <div className="sticky bottom-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}