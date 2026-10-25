import React from 'react';
import { Send } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface ContactBannerProps {
  onUnconfirmedLink?: () => void;
}

export const ContactBanner: React.FC<ContactBannerProps> = ({ onUnconfirmedLink }) => {
  return (
    <section id="contact" className="pt-4 pb-6 px-6 sm:px-10 lg:px-14 w-full max-w-[1520px] mx-auto select-none scroll-mt-24">
      <RevealOnScroll direction="zoom" delay={80} duration={750}>
        <div className="bg-[#111214] text-white rounded-2xl sm:rounded-3xl py-5 sm:py-6 px-6 sm:px-10 border border-zinc-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
        
        {/* Left: Artistic M Monogram + Title */}
        <div className="flex items-center gap-5 shrink-0 self-start lg:self-auto group">
          {/* M monogram image */}
          <div className="w-11 h-11 flex items-center justify-center shrink-0">
            <img
              src="/logo_m_calligraphy_white.png"
              alt="M Monogram"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 select-none pointer-events-none"
            />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight text-white">
              Давайте<br />свяжемся
            </h2>
          </div>
        </div>

        {/* Center: Friendly Note */}
        <div className="text-left lg:text-center text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-sm">
          Буду рад обсудить новые возможности, проекты и сотрудничество.
        </div>

        {/* Right: Telegram Button & Social Links in one line */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-6 shrink-0 self-start lg:self-auto">
          <a
            href="https://t.me/spacenmn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 text-xs sm:text-sm font-bold shadow-md hover:shadow-xl hover:scale-[1.04] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            <span>Написать в Telegram</span>
          </a>

          <div className="flex items-center gap-4 text-xs font-semibold text-zinc-300">
            <button
              type="button"
              onClick={onUnconfirmedLink}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              title="GitHub профиль"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </button>

            <button
              type="button"
              onClick={onUnconfirmedLink}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              title="LinkedIn профиль"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </button>
          </div>
        </div>

      </div>
    </RevealOnScroll>
  </section>
  );
};
