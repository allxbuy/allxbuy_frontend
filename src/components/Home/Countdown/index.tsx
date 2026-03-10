"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Added for Next.js routing

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Updated to a future date so the timer actually works!
  const deadline = "December 31, 2026";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    // Safeguard: If the deadline has passed, keep the timer at 0
    if (time <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return;
    }

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    // Run it once immediately so there's no 1-second delay/flash of 0s on load
    getTime();
    
    // Fixed the interval call
    const interval = setInterval(getTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden py-16 lg:py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Container fixed Z-index context */}
        <div className="relative z-0 overflow-hidden rounded-2xl bg-[#D0E9F3] p-6 sm:p-10 lg:p-14 xl:p-16 shadow-sm">
          
          {/* Text Content (z-10 so it sits above the background images) */}
          <div className="relative z-10 max-w-[450px] w-full pb-48 lg:pb-0">
            <span className="block font-semibold text-sm text-blue-600 mb-3 uppercase tracking-wider">
              Don’t Miss!!
            </span>

            <h2 className="font-bold text-slate-900 text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4">
              Enhance Your Music Experience
            </h2>

            <p className="text-slate-700 text-lg mb-8">
              The Havit H206d is a premium wired PC headphone built for deep bass and comfort.
            </p>

            {/* */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-10">
              
              {/* */}
              <div className="flex flex-col items-center">
                <span className="w-16 h-16 sm:w-18 sm:h-18 font-bold text-2xl sm:text-3xl text-blue-600 rounded-xl flex items-center justify-center bg-white shadow-sm mb-2">
                  {days < 10 ? "0" + days : days}
                </span>
                <span className="block text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wide text-center">
                  Days
                </span>
              </div>

              {/* */}
              <div className="flex flex-col items-center">
                <span className="w-16 h-16 sm:w-18 sm:h-18 font-bold text-2xl sm:text-3xl text-blue-600 rounded-xl flex items-center justify-center bg-white shadow-sm mb-2">
                  {hours < 10 ? "0" + hours : hours}
                </span>
                <span className="block text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wide text-center">
                  Hours
                </span>
              </div>

              {/* */}
              <div className="flex flex-col items-center">
                <span className="w-16 h-16 sm:w-18 sm:h-18 font-bold text-2xl sm:text-3xl text-blue-600 rounded-xl flex items-center justify-center bg-white shadow-sm mb-2">
                  {minutes < 10 ? "0" + minutes : minutes}
                </span>
                <span className="block text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wide text-center">
                  Mins
                </span>
              </div>

              {/* */}
              <div className="flex flex-col items-center">
                <span className="w-16 h-16 sm:w-18 sm:h-18 font-bold text-2xl sm:text-3xl text-red-500 rounded-xl flex items-center justify-center bg-white shadow-sm mb-2 transition-colors duration-300">
                  {seconds < 10 ? "0" + seconds : seconds}
                </span>
                <span className="block text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wide text-center">
                  Secs
                </span>
              </div>
            </div>
            {/* */}

            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-semibold text-sm text-white bg-blue-600 py-3.5 px-10 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
            >
              Check it Out!
            </Link>
          </div>

          {/* */}
          <div className="absolute right-0 bottom-0 z-0 h-full w-full pointer-events-none">
            <Image
              src="/images/countdown/countdown-bg.png"
              alt="Background texture"
              className="hidden sm:block absolute right-0 bottom-0 object-cover opacity-60"
              width={737}
              height={482}
            />
            
            {/* Product image (position adjusted for mobile and desktop) */}
            <div className="absolute -bottom-10 -right-10 w-[250px] sm:w-[350px] lg:bottom-4 lg:right-10 xl:right-32 lg:w-[411px]">
              <Image
                src="/images/countdown/countdown-01.png"
                alt="Havit H206d Headphone"
                width={411}
                height={376}
                className="object-contain drop-shadow-xl transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CountDown;