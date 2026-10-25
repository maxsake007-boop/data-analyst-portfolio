import React from 'react';
import { MapPin, Mail, Send, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  isReady?: boolean;
  onUnconfirmedLink?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isReady = true, onUnconfirmedLink }) => {
  return (
    <section id="hero" className="relative pt-6 sm:pt-10 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 w-full max-w-[1720px] mx-auto select-none overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-end min-h-[640px] lg:min-h-[740px] xl:min-h-[820px]">
        
        {/* Left Column: Enlarged Typography, Role & Meta Contacts (6 cols, anchored left) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start justify-center z-10 pt-4 pb-12 lg:pb-20 max-w-[700px]">
          
          {/* Pre-title */}
          <span
            className={`text-sm sm:text-base font-mono font-bold tracking-[0.25em] text-zinc-400 uppercase mb-4 block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isReady ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-6 blur-xs'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            ПРИВЕТ, Я
          </span>

          {/* Heading: Махсет Нарбеков (Noticeably larger + entrance) */}
          <h1
            className={`text-6xl sm:text-7xl md:text-8xl xl:text-[96px] 2xl:text-[108px] font-black text-zinc-950 tracking-tighter leading-[0.92] mb-6 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isReady ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-10 blur-sm'
            }`}
            style={{ transitionDelay: '220ms' }}
          >
            Махсет<br />Нарбеков
          </h1>

          {/* Subtitle / Role (Enlarged + entrance) */}
          <div
            className={`text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold text-zinc-900 tracking-tight mb-6 flex flex-wrap items-center gap-3 transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isReady ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-8 blur-xs'
            }`}
            style={{ transitionDelay: '360ms' }}
          >
            <span>Начинающий Data Analyst</span>
            <span className="text-zinc-300 font-light">|</span>
            <span>Power BI</span>
          </div>

          {/* Short Bio Description (Enlarged + entrance) */}
          <p
            className={`text-lg sm:text-xl lg:text-[23px] text-zinc-600 font-normal leading-relaxed max-w-xl mb-10 transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isReady ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-8 blur-xs'
            }`}
            style={{ transitionDelay: '480ms' }}
          >
            Power BI-аналитик с портфолио корпоративных отчётов: звёздные схемы, DAX, RLS, What-If параметры, SQL и API. Работаю с данными от ETL и очистки до финального дашборда.
          </p>

          {/* Meta Contact Details Row (Icons + Info, Enlarged + entrance) */}
          <div
            className={`flex flex-wrap items-center gap-x-8 gap-y-4 text-sm sm:text-[15px] lg:text-base text-zinc-700 mb-12 font-medium transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isReady ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-6 blur-xs'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="inline-flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-zinc-900 shrink-0" />
              <span>Ташкент / Удалённо (готов к переезду)</span>
            </div>

            <a
              href="mailto:maxnarbekov39@gmail.com"
              className="inline-flex items-center gap-2.5 hover:text-zinc-950 transition-colors"
            >
              <Mail className="w-5 h-5 text-zinc-900 shrink-0" />
              <span>maxnarbekov39@gmail.com</span>
            </a>

            <a
              href="https://t.me/spacenmn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 hover:text-zinc-950 transition-colors"
            >
              <Send className="w-5 h-5 text-zinc-900 shrink-0" />
              <span>t.me/spacenmn</span>
            </a>

            <button
              type="button"
              onClick={onUnconfirmedLink}
              className="inline-flex items-center gap-2.5 hover:text-zinc-950 transition-colors cursor-pointer"
              title="GitHub профиль"
            >
              <svg className="w-5 h-5 fill-current text-zinc-900 shrink-0" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </button>
          </div>

          {/* Scroll Down Indicator with smooth scroll */}
          <div
            className={`transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '720ms' }}
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('about');
                if (el) {
                  const navHeight = 84;
                  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2.5 text-sm sm:text-[15px] font-semibold text-zinc-500 hover:text-zinc-950 transition-colors group cursor-pointer"
            >
              <ArrowDown className="w-4 h-4 animate-bounce-soft text-zinc-600 group-hover:text-zinc-950" />
              <span>Листайте вниз</span>
            </a>
          </div>

        </div>

        {/* Right Column: Makhset's REAL Photo Cutout + Anchored Right with clean separation (6 cols) */}
        <div className="lg:col-span-6 xl:col-span-6 relative flex items-end justify-center lg:justify-end self-end h-full min-h-[620px] sm:min-h-[680px] lg:min-h-[760px] xl:min-h-[840px] ml-auto w-full">

          {/* Hand-drawn SVG Pencil Doodles behind portrait matching reference */}
          <svg
            className={`absolute inset-0 w-full h-full pointer-events-none select-none z-0 transition-opacity duration-1000 ease-out ${
              isReady ? 'opacity-45' : 'opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
            viewBox="0 0 700 700"
            fill="none"
          >
            {/* Left organic swoop curve around left side/torso */}
            <path
              d="M 60 520 C 140 380, 160 220, 220 180 C 270 150, 310 220, 260 380 C 220 500, 150 560, 100 500 C 60 440, 100 320, 180 240"
              stroke="#71717a"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right tilted elliptical halo loop around shoulder */}
            <ellipse
              cx="560"
              cy="380"
              rx="190"
              ry="56"
              transform="rotate(-30 560 380)"
              stroke="#71717a"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

          {/* Authentic Handwritten Graphic: Data builds better decisions ↙ (Float + entrance animation) */}
          <div
            className={`absolute top-2 right-2 sm:right-6 lg:right-6 xl:right-8 z-20 select-none pointer-events-none transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isReady ? 'opacity-90 scale-100 rotate-0' : 'opacity-0 scale-85 rotate-[-5deg]'
            }`}
            style={{ transitionDelay: '520ms' }}
          >
            <div className="animate-float-slow">
              <img
                src="/data_builds_decisions.png"
                alt="Data builds better decisions"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="w-40 sm:w-48 lg:w-52 xl:w-60 h-auto object-contain opacity-90 drop-shadow-2xs select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Makhset's Real Photo Cutout (Anchored cleanly to the right + smooth entrance) */}
          <div
            className={`relative z-10 w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[740px] flex justify-center lg:justify-end transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
              isReady ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.96]'
            }`}
            style={{ transitionDelay: '280ms' }}
          >
            <img
              src="/makhset_cutout.png"
              alt="Махсет Нарбеков — Data Analyst"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              className="w-full h-auto max-h-[700px] sm:max-h-[760px] lg:max-h-[820px] xl:max-h-[880px] object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.06)] select-none pointer-events-auto"
              style={{
                maskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)',
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
