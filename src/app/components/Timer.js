import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock } from '@fortawesome/free-solid-svg-icons';
const Timer = ({ nextDraw }) => {
  const [timeLeft, setTimeLeft] = useState(nextDraw);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m}:${s}`;
  };

  return <div style={{color:'white'}}>Next Draw: <FontAwesomeIcon style={{color:'white'}} icon={faClock} /> {formatTime(timeLeft)}</div>;
};

export default Timer;