import React, { FC, useState, useEffect } from 'react';

interface AnimationTextProps {
  text: string;
  duration: number;
  delay: number;
}

const AnimationText: FC<AnimationTextProps> = ({ text, duration, delay }) => {
    const [displayedText, setDisplayedText] = useState('');
  
    useEffect(() => {
      const totalChars = text.length;
      const charDuration = Math.floor(duration / totalChars);
      
      const typeCharacter = (index: number) => {
        if (index < totalChars) {
          setDisplayedText((prev) => prev + text[index]);
          setTimeout(() => typeCharacter(index + 1), charDuration);
        }
      };
  
      const delayTimer = setTimeout(() => typeCharacter(0), delay);
  
      return () => clearTimeout(delayTimer);
    }, [text, duration, delay]);
  
    return <>{displayedText}</>;
  }

export default AnimationText;