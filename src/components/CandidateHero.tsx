import React from 'react';
import { ArrowDown, Send, Briefcase, FileText, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const CandidateHero: React.FC = () => {
  return (
    <section id="about" className="relative pt-28 pb-14 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1320px] mx-auto select-none">
      
      {/* 1. Recruiter Status Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-zinc-200/80">
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Ищу работу на HeadHunter</span>
          </div>
          <span className="text-xs font-mono text-zinc-400">•</span>
          <span className="text-xs font-mono text-zinc-600">Навои / Ташкент (готов к переезду) / Удаленно</span>
        </div>

        <div className="text-xs font-mono text-zinc-500 hidden sm:block">
          PROWEB (DATA SCIENCE) С ОТЛИЧИЕМ
        </div>
      </div>

      {/* 2. Main Profile Layout (Photo + Identity + About Me) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left: Professional Photo */}
        <div className="md:col-span-5 lg:col-span-4 flex justify-center">
          <div className="relative w-64 sm:w-72 md:w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden glass-card border border-white shadow-xl ring-1 ring-zinc-200/70 group">
            <img
              src="/makhset_avatar.jpg"
              alt="Махсет Нарбеков — Data Analyst"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
            />
            {/* Status chip over photo */}
            <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-zinc-950/80 backdrop-blur-md text-white text-[11px] font-mono flex items-center justify-between shadow-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-zinc-200">Open to Work</span>
              </span>
              <span className="text-zinc-400">Power BI / SQL</span>
            </div>
          </div>
        </div>

        {/* Right: Identity, "About Me" & Fast Actions */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col items-start text-left">
          
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1.5">
            РЕЗЮМЕ КАНДИДАТА
          </span>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight mb-2">
            Махсет Нарбеков
          </h1>

          <div className="text-base sm:text-xl font-semibold text-zinc-800 mb-4 flex items-center gap-2">
            <span>Начинающий Data Analyst | Power BI</span>
          </div>

          {/* Authentic, concise "About Me" directly from Resume.md */}
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed max-w-2xl mb-6 font-normal">
            Прошёл профильное обучение по Data Science в PROWEB (диплом с отличием) в январе 2026 года. Не останавливаюсь на поверхностном уровне — разбираюсь, как данные превращаются в понятные решения для бизнеса, а не просто в красивые графики. 
            Основной фокус: <strong>Power BI</strong> (продвинутый DAX, звёздные схемы, RLS) и <strong>SQL</strong> (PostgreSQL, оконные функции, CTE).
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects-showcase"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold shadow-md hover:scale-[1.02] active:scale-98 transition-all group"
            >
              <span>Смотреть проекты (7)</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://t.me/maxsake"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card hover:bg-white text-zinc-900 border border-zinc-200/90 text-xs sm:text-sm font-semibold shadow-2xs hover:scale-[1.02] active:scale-98 transition-all"
            >
              <Send className="w-4 h-4 text-sky-600" />
              <span>Написать в Telegram</span>
            </a>

            <a
              href="/Текст/Resume.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-pill hover:bg-zinc-100 text-zinc-800 text-xs sm:text-sm font-semibold border border-zinc-200/80 shadow-2xs transition-all hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4 text-zinc-700" />
              <span>Скачать CV</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
