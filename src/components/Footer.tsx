import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-10 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-20 border-t border-zinc-200/60">
      <div className="w-full max-w-[1880px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          <span className="font-semibold text-zinc-900">Махсет Нарбеков</span> — Data Analyst & BI Developer
        </div>
        <div>
          Apple Liquid Glass Minimalist • 2026
        </div>
      </div>
    </footer>
  );
};
