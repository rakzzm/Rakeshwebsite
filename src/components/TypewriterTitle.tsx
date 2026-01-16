'use client';

import { useState, useEffect } from 'react';
import styles from './TypewriterTitle.module.css';

interface TypewriterTitleProps {
  text: string;
  className?: string; // To inherit font sizes from parent h1
  typingSpeed?: number;
  startDelay?: number;
}

export const TypewriterTitle = ({ 
  text, 
  className = '', 
  typingSpeed = 50,
  startDelay = 200 
}: TypewriterTitleProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [hasStarted, text, typingSpeed]);

  return (
    <div className={`${styles.typewriterWrapper} ${className}`}>
      <span className={styles.typewriterText}>
        {displayedText}
      </span>
      <span 
        className={styles.cursor} 
        style={{ height: '0.8em', verticalAlign: 'baseline' }} 
      />
    </div>
  );
};
