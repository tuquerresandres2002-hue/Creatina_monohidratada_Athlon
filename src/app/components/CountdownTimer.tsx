import React, { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center font-black">
      <div className="flex flex-col items-center">
        <span className="text-4xl bg-[#00A3FF] text-white px-4 py-3 rounded-2xl min-w-[70px] text-center shadow-lg shadow-[#00A3FF]/20 italic">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className="text-[9px] mt-2 uppercase tracking-[0.2em] text-zinc-500 font-black">Horas</span>
      </div>
      <span className="text-4xl text-[#00A3FF] animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <span className="text-4xl bg-[#00A3FF] text-white px-4 py-3 rounded-2xl min-w-[70px] text-center shadow-lg shadow-[#00A3FF]/20 italic">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-[9px] mt-2 uppercase tracking-[0.2em] text-zinc-500 font-black">Minutos</span>
      </div>
      <span className="text-4xl text-[#00A3FF] animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <span className="text-4xl bg-[#00A3FF] text-white px-4 py-3 rounded-2xl min-w-[70px] text-center shadow-lg shadow-[#00A3FF]/20 italic">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
        <span className="text-[9px] mt-2 uppercase tracking-[0.2em] text-zinc-500 font-black">Segundos</span>
      </div>
    </div>
  );
};
