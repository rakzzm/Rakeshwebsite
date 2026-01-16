import { useState, useEffect, useRef } from 'react';

// Define message type
export interface Message {
  role: 'user' | 'bot';
  content: string;
}

export function useVideoBotAI() {
  const [ready, setReady] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: "Hi! I'm Rakesh's AI Assistant. Ask me anything about his expertise in VOIP, AI, or Cloud technologies!" }
  ]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Worker reference
  const worker = useRef<Worker | null>(null);

  // Initialize Web Worker
  useEffect(() => {
    if (!worker.current) {
      // Create a worker to run the heavy AI model off the main thread
      worker.current = new Worker(new URL('./videoBotWorker.ts', import.meta.url), {
        type: 'module'
      });

      // Listen for messages from the worker
      const onMessageReceived = (e: MessageEvent) => {
        const { status, output, type } = e.data;
        
        if (status === 'ready') {
          setReady(true);
        } else if (status === 'complete') {
          setIsGenerating(false);
          setMessages(prev => {
            const newMessages = [...prev];
            // Replace the last loading message or append new one
            if (newMessages.length > 0 && newMessages[newMessages.length - 1].role === 'bot') {
               newMessages[newMessages.length - 1].content = output;
            } else {
               newMessages.push({ role: 'bot', content: output });
            }
            return newMessages;
          });
        }
      };

      worker.current.addEventListener('message', onMessageReceived);

      return () => {
        worker.current?.removeEventListener('message', onMessageReceived);
        worker.current?.terminate();
      };
    }
  }, []);

  const sendMessage = (text: string) => {
    if (!text.trim() || isGenerating) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsGenerating(true);
    
    // Add placeholder bot message
    setMessages(prev => [...prev, { role: 'bot', content: "Thinking..." }]);

    // Send to worker
    worker.current?.postMessage({ text });
  };

  return {
    ready,
    messages,
    isGenerating,
    sendMessage
  };
}
