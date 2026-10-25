import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';
import { InteractiveBackground } from './components/InteractiveBackground';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { AboutAndSkills } from './components/AboutAndSkills';
import { ProjectsGrid, ProjectCardData } from './components/ProjectsGrid';
import { EducationAndExtra } from './components/EducationAndExtra';
import { ContactBanner } from './components/ContactBanner';
import { SiteFooter } from './components/SiteFooter';
import { ProjectModal } from './components/ProjectModal';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);
  const [isIntroReady, setIsIntroReady] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Trigger smooth entrance choreography immediately on initial page mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroReady(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const handleUnconfirmedLink = () => {
    showToast('Извините, пока что ссылка не подтверждена');
  };

  return (
    <div className="relative min-h-screen bg-[#fcfcfd] text-zinc-900 font-sans selection:bg-zinc-200 selection:text-zinc-950 overflow-x-hidden">
      
      {/* 1. Subtle Interactive Particle Canvas Background */}
      <InteractiveBackground gridGap={36} interactionRadius={130} />

      {/* 2. Top Header Navigation (slides down into view) */}
      <SiteHeader isReady={isIntroReady} />

      {/* 3. Main Content Flow */}
      <main className="relative z-10 flex flex-col w-full pt-20 sm:pt-22">
        {/* Hero Section (choreographed staggered entrance) */}
        <HeroSection
          isReady={isIntroReady}
          onUnconfirmedLink={handleUnconfirmedLink}
        />

        {/* 01 Обо мне & 02 Навыки (Side-by-side) */}
        <AboutAndSkills />

        {/* 03 Проекты (3x2 Grid + Filters) */}
        <ProjectsGrid
          onOpenProject={(proj) => setSelectedProject(proj)}
          onUnconfirmedLink={handleUnconfirmedLink}
        />

        {/* 04 Образование & 05 Дополнительно */}
        <EducationAndExtra />

        {/* Давайте свяжемся CTA Banner */}
        <ContactBanner onUnconfirmedLink={handleUnconfirmedLink} />
      </main>

      {/* 4. Footer */}
      <SiteFooter />

      {/* 5. Project Detail / Screenshots Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 6. Sleek Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full bg-zinc-950 text-white shadow-2xl border border-zinc-800 animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-none select-none">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium tracking-tight">{toastMessage}</span>
        </div>
      )}

    </div>
  );
};

export default App;
