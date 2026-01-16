"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './VideoBot.module.css';
import { useVideoBotAI } from './useVideoBotAI';

export default function VideoBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { ready, messages, isGenerating, sendMessage } = useVideoBotAI();

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className={styles.botContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.videoHeader}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className={styles.avatarVideo}
            >
              <source src="/AI_Profile.mp4" type="video/mp4" />
            </video>
            <div className={styles.videoOverlay}>
              <div className={styles.botInfo}>
                <span className={styles.botName}>Rakesh's AI Assistant</span>
                <div className={styles.botStatus}>
                  <div className={styles.statusDot}></div>
                  <span>{ready ? 'Online' : 'Initializing Model...'}</span>
                </div>
              </div>
            </div>
            <button 
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className={styles.messagesArea}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`${styles.message} ${msg.role === 'bot' ? styles.botMessage : styles.userMessage}`}
              >
                {msg.content}
              </div>
            ))}
            {isGenerating && (
              <div className={`${styles.message} ${styles.loadingMessage}`}>
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.inputArea} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              placeholder={ready ? "Ask me about AI, VOIP..." : "Loading AI Model..."}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={!ready || isGenerating}
            />
            <button 
              type="submit" 
              className={styles.sendButton}
              disabled={!ready || isGenerating || !inputValue.trim()}
            >
              ➤
            </button>
          </form>
        </div>
      )}

      <button 
        className={styles.toggleButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
      >
        <img src="/chatbot-avatar.png" alt="AI Assistant" className={styles.avatarImage} />
      </button>
    </div>
  );
}
