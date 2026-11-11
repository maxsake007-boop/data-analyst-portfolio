import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface SiteHeaderProps {
  activeSection?: string;
  isReady?: boolean;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ isReady = true }) => {
  const { lang, setLang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'hero' | 'about' | 'skills' | 'projects' | 'education' | 'contact'>('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Section scrollspy
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'] as const;
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPos >= top) {
            setActiveTab(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: TRANSLATIONS.header.nav.hero[lang], href: '#hero' },
    { id: 'about', label: TRANSLATIONS.header.nav.about[lang], href: '#about' },
    { id: 'skills', label: TRANSLATIONS.header.nav.skills[lang], href: '#skills' },
    { id: 'projects', label: TRANSLATIONS.header.nav.projects[lang], href: '#projects' },
    { id: 'education', label: TRANSLATIONS.header.nav.education[lang], href: '#education' },
    { id: 'contact', label: TRANSLATIONS.header.nav.contact[lang], href: '#contact' },
  ] as const;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveTab(id as any);

    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#hero');
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 84;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-xs py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-zinc-100/60 py-4'
      }`}
    >
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-4">
        
        {/* Left: M Studio Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero', 'hero')}
          className="flex items-center group cursor-pointer select-none shrink-0"
        >
          <img
            src="/logo_m_studio.png"
            alt="M Studio"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none pointer-events-none"
          />
        </a>

        {/* Center: Navigation Links with smooth transition */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className={`relative py-1 text-sm font-medium transition-all duration-200 hover:text-zinc-950 ${
                  isActive ? 'text-zinc-950 font-semibold' : 'text-zinc-500'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-950 rounded-full transition-all duration-300 animate-fade-in-up" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Language Switcher + Contact Button */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          
          {/* Minimalist Liquid Glass Language Switcher */}
          <div className="flex items-center p-0.5 sm:p-1 rounded-full bg-zinc-100/90 border border-zinc-200/80 shadow-2xs">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                lang === 'en'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-950'
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('ru')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                lang === 'ru'
                  ? 'bg-zinc-950 text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-950'
              }`}
              title="Переключить на русский"
            >
              RU
            </button>
          </div>

          <a
            href="https://t.me/spacenmn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-medium shadow-sm hover:scale-[1.04] active:scale-95 transition-all duration-200 hover:shadow-md"
          >
            <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            <span className="hidden xs:inline sm:inline">{TRANSLATIONS.header.contactBtn[lang]}</span>
          </a>

        </div>

      </div>
    </motion.header>
  );
};
