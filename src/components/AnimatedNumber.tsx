import React, { FC, useState, useEffect } from 'react';

interface AnimatedNumberProps {
  target: number;
  duration: number;
  delay: number;
}

const AnimatedNumber: FC<AnimatedNumberProps> = ({ target, duration, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    if (start === target) return;

    const handleStartCount = () => {
      const stepTime = Math.abs(Math.floor(duration / (target - start)));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === target) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer); // Cleanup interval on component unmount
    };

    const delayTimer = setTimeout(handleStartCount, delay); // Delay before starting the count

    return () => clearTimeout(delayTimer); // Cleanup delay timer on component unmount
  }, [target, duration, delay]);

  return count;
}

export default AnimatedNumber;