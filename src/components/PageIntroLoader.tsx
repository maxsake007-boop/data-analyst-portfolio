import React, { useEffect, useState } from 'react';
import { MorphingSpinner } from './ui/morphing-spinner';

interface PageIntroLoaderProps {
  onComplete?: () => void;
}

export const PageIntroLoader: React.FC<PageIntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Disable body scroll during entrance
    document.body.style.overflow = 'hidden';

    // Smoothly increment progress
    const timer1 = setTimeout(() => setProgress(35), 90);
    const timer2 = setTimeout(() => setProgress(75), 320);
    const timer3 = setTimeout(() => setProgress(100), 700);

    // Start curtain lifting animation
    const liftTimer = setTimeout(() => {
      setIsLifting(true);
      if (onComplete) onComplete();
    }, 1000);

    // Complete transition and restore scroll
    const cleanupTimer = setTimeout(() => {
      setIsRemoved(true);
      document.body.style.overflow = '';
    }, 1750);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(liftTimer);
      clearTimeout(cleanupTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090a0c] text-white transition-all duration-[750ms] select-none ${
        isLifting ? '-translate-y-full opacity-90' : 'translate-y-0 opacity-100'
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)',
      }}
    >
      {/* Background subtle atmospheric radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[140px]" />
      </div>

      {/* Main Content: shifted slightly below center (translate-y-10 sm:translate-y-14) */}
      <div
        className={`relative z-10 flex flex-col items-center max-w-xl px-6 text-center translate-y-8 sm:translate-y-12 transition-all duration-500 ${
          isLifting ? 'scale-95 opacity-0 -translate-y-4' : 'scale-100 opacity-100 translate-y-8 sm:translate-y-12'
        }`}
      >
        {/* Beautiful Word Arrangement: Two-tier Editorial Hierarchy */}
        <div className="flex flex-col items-center gap-1 sm:gap-2 select-none mb-6 sm:mb-8">
          <span className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl text-zinc-400 tracking-normal leading-tight">
            Привет,
          </span>
          <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none flex items-baseline">
            <span>Я</span>
            <span className="text-zinc-500 font-light tracking-widest ml-1 animate-pulse">...</span>
          </h1>
        </div>

        {/* Morphing Spinner Animation */}
        <div className="flex items-center justify-center mb-5 sm:mb-6">
          <MorphingSpinner
            size="lg"
            className="w-12 h-12 sm:w-14 sm:h-14"
            shapeClassName="bg-white shadow-[0_0_30px_rgba(255,255,255,0.45)]"
          />
        </div>

        {/* Progress Bar & Refined Percentage Indicator */}
        <div className="flex flex-col items-center gap-2.5">
          <div className="w-64 sm:w-80 md:w-96 h-2 sm:h-2.5 bg-white/10 rounded-full overflow-hidden relative shadow-inner">
            <div
              className="h-full bg-white rounded-full transition-all duration-300 ease-out shadow-[0_0_20px_rgba(255,255,255,0.65)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

