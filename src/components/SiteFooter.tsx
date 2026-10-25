import React from 'react';
import { ArrowUp } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-1 pb-10 px-6 sm:px-10 lg:px-14 max-w-[1520px] mx-auto select-none">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        
        {/* Left: Copyright */}
        <div>
          <span>© 2026 Махсет Нарбеков</span>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-zinc-950 transition-colors cursor-pointer p-1 font-medium"
          title="Наверх"
        >
          <span>Наверх</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
