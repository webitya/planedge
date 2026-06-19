"use client";

import { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showSplash) return null;

  return (
    <div className={`fixed inset-0 bg-white z-[9999] flex justify-center items-center transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center py-8 px-12 relative">
        <div className="relative p-8 after:content-[''] after:absolute after:inset-0 after:border after:border-[#2C3539] after:origin-center after:animate-box-reveal">
          <h1 className="font-heading text-5xl font-extrabold text-[#2C3539] tracking-[4px] opacity-0 animate-text-reveal">
            PLANEDGE <span className="font-normal opacity-80 text-[2.5rem] block mt-2">ARCHITECT</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
