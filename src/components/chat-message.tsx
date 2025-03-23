import React from 'react';
import { Bot, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface ChatMessageProps {
  isBot?: boolean;
  message: string;
}

export function ChatMessage({ isBot = false, message }: ChatMessageProps) {
  return (
    <div className={cn(
      "flex gap-3 p-4 rounded-lg",
      isBot ? "bg-blue-50 dark:bg-blue-900/20" : "bg-gray-50 dark:bg-gray-800"
    )}>
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-700">
        {isBot ? <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-800 dark:text-gray-200">{message}</p>
      </div>
    </div>
  );
}