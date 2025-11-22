"use client";

import { useState, useEffect } from 'react';
import { TimerIcon } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);

      const diff = midnight.getTime() - now.getTime();

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    }
    
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground h-6 w-28">
        <TimerIcon className="h-4 w-4" />
        <span className="font-mono">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono" aria-label="Time until daily reset">
      <TimerIcon className="h-4 w-4" />
      <span>{timeLeft} until reset</span>
    </div>
  );
};

export default CountdownTimer;
