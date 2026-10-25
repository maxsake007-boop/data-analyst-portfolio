import React from 'react';
import { Send, Github, FileText, Briefcase, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1400px] mx-auto pointer-events-none">
      <div className="glass-card rounded-2xl px-5 py-3 flex items-center justify-between pointer-events-auto shadow-glass border border-white/80">
        
        {/* Brand & Status */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-xl bg-zinc-950 text-white flex items-center justify-center font-mono text-xs font-bold shadow-sm group-hover:scale-105 transition-transform">
              MN
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-zinc-950 leading-tight">
                Махсет Нарбеков
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Data Analyst / Power BI
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/90 border border-emerald-200/70 text-emerald-800 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Ищу работу на hh.ru</span>
          </div>
        </div>

        {/* Navigation Anchors for Recruiters */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-600">
          <a href="#about" className="px-3 py-1.5 rounded-lg hover:text-zinc-950 hover:bg-zinc-100/70 transition-colors">
            О кандидате
          </a>
          <a href="#skills" className="px-3 py-1.5 rounded-lg hover:text-zinc-950 hover:bg-zinc-100/70 transition-colors">
            Навыки
          </a>
          <a href="#experience" className="px-3 py-1.5 rounded-lg hover:text-zinc-950 hover:bg-zinc-100/70 transition-colors">
            Образование
          </a>
          <a href="#projects-showcase" className="px-3 py-1.5 rounded-lg hover:text-zinc-950 hover:bg-zinc-100/70 transition-colors font-semibold text-zinc-900">
            Проекты (7)
          </a>
          <a href="#contacts" className="px-3 py-1.5 rounded-lg hover:text-zinc-950 hover:bg-zinc-100/70 transition-colors">
            Контакты
          </a>
        </nav>

        {/* Quick Contacts */}
        <div className="flex items-center gap-2">
          <a
            href="https://t.me/maxsake"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-white/70 hover:bg-white border border-zinc-200/80 shadow-2xs transition-all hover:scale-[1.02]"
            title="Написать в Telegram"
          >
            <Send className="w-3.5 h-3.5 text-sky-600" />
            <span className="hidden sm:inline">Telegram</span>
          </a>

          <a
            href="https://hh.ru/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100/80 border border-red-200/60 shadow-2xs transition-all hover:scale-[1.02]"
            title="Резюме на HeadHunter"
          >
            <Briefcase className="w-3.5 h-3.5 text-red-600" />
            <span>hh.ru</span>
          </a>

          <a
            href="/Текст/Resume.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 shadow-sm hover:scale-[1.02] transition-all ml-1"
            title="Скачать резюме"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Резюме</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

      </div>
    </header>
  );
};
