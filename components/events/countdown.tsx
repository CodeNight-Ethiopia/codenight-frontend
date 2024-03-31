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
    <div className="p-4 bg-gradient-to-br from-transparent to-transparent  rounded-3xl ">
      <div className="w-full max-w-full mx-auto flex items-center bg-">
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
    <div className="font-display w-[345px] h-20 md:h-full flex mx-10 flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px] mb-0 z-20 border-slate-200">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-2xl font-heading2 md:text-4xl mr-10 lg:text-6xl xl:text-[14rem] font-medium bg-gradient-to-tr from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            
            {num < 10 ? "0" + num : num} 
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-lg lg:text-2xl tracking-wide font-light font-heading text-black">
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;