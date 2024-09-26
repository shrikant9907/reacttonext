'use client'

import { useEffect, useState } from "react"; 

export default function Home() {
  const [countdown, setCountdown] = useState({ days: 10, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); 
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
   
        <h2 className="text-3xl text-center">Welcome To "React To Next"</h2>
        {/* Countdown Timer */}
        <div className="text-center">
          <h2 className="text-lg font-semibold">Coming Soon with new updates in:</h2>
          <div className="flex gap-2 justify-center mt-4">
            <div className="text-xl text-yellow-500">{countdown.days} Days</div>
            <div className="text-xl text-yellow-500">{countdown.hours} Hours</div>
            <div className="text-xl text-yellow-500">{countdown.minutes} Minutes</div>
            <div className="text-xl text-yellow-500">{countdown.seconds} Seconds</div>
          </div>
        </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] mt-8">
          <li className="mb-2">
            Get started by checking out our free videos on YouTube!
          </li>
          <li>Subscribe to our channel for the latest updates.</li>
        </ol>

        <div className=" bg-red-600 p-3 px-5 rounded-3xl justify-center flex gap-4 items-center">
          <a
            className=""
            href="https://youtube.com/reacttonext" 
            target="_blank"
            rel="noopener noreferrer"
          >
      
            Watch Now on Youtube
          </a>
           
        </div>
      </main>
   
    </div>
  );
}
