import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

interface SiteHeaderProps {
  activeSection?: string;
  isReady?: boolean;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ isReady = true }) => {
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
    { id: 'hero', label: 'Главная', href: '#hero' },
    { id: 'about', label: 'Обо мне', href: '#about' },
    { id: 'skills', label: 'Навыки', href: '#skills' },
    { id: 'projects', label: 'Проекты', href: '#projects' },
    { id: 'education', label: 'Образование', href: '#education' },
    { id: 'contact', label: 'Контакты', href: '#contact' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isReady ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-xs py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-zinc-100/60 py-4'
      }`}
    >
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* Left: M Studio Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero', 'hero')}
          className="flex items-center group cursor-pointer select-none"
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
        <nav className="hidden md:flex items-center gap-7">
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

        {/* Right: Contact Button */}
        <div className="flex items-center">
          <a
            href="https://t.me/spacenmn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-medium shadow-sm hover:scale-[1.04] active:scale-95 transition-all duration-200 hover:shadow-md"
          >
            <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            <span>Связаться</span>
          </a>
        </div>

      </div>
    </header>
  );
};
