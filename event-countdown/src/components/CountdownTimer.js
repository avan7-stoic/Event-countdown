// components/CountdownTimer.js
import React, { useEffect, useState } from "react";

function CountdownTimer({ event }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = event.date - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      if (!updated) {
        clearInterval(timer);
        setTimeLeft(null);
      } else {
        setTimeLeft(updated);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [event]);

  if (!timeLeft) {
    return <h2>The event has started or passed!</h2>;
  }

  return (
    <div>
      <h2>Countdown to {event.name}</h2>
      <p>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
}

export default CountdownTimer;
