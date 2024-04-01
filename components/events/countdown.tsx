'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "4/14/2024";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="p-4 bg-gradient-to-br from-transparent to-transparent  rounded-3xl overflow-hidden ">
      <div className="w-full max-w-full mx-auto flex items-center bg- overflow-hidden">
        <CountdownItem num={remaining.days} text="days" />
        <CountdownItem num={remaining.hours} text="hours" />
        <CountdownItem num={remaining.minutes} text="minutes" /> 
        <CountdownItem num={remaining.seconds} text="seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="font-display sm:w-[120px] md:w-[200px] lg:w-[345px] h-20 md:h-full flex sm:mx-0 md:mx-5 lg:mx-10 flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px] mb-0 z-20 border-slate-200">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-4xl font-heading2 md:text-5xl mr-10 lg:text-6xl xl:text-[14.5rem] font-medium bg-gradient-to-tr from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            
            {num < 10 ? "0" + num : num} 
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-sm md:text-xl lg:text-3xl tracking-wide font-light font-heading text-black">
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;