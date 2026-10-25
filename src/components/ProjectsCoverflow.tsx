import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Layers } from 'lucide-react';
import { ProjectItem, ProjectScreen } from '../data/projects';

interface ProjectsCoverflowProps {
  projects: ProjectItem[];
  activeIndex: number;
  onSelectProject: (index: number) => void;
  activeScreen: ProjectScreen;
  onSelectScreen: (screen: ProjectScreen) => void;
  onOpenZoom: (image: string, title: string) => void;
}

export const ProjectsCoverflow: React.FC<ProjectsCoverflowProps> = ({
  projects,
  activeIndex,
  onSelectProject,
  activeScreen,
  onSelectScreen,
  onOpenZoom,
}) => {
  const activeProject = projects[activeIndex];

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + projects.length) % projects.length;
    onSelectProject(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % projects.length;
    onSelectProject(nextIdx);
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 3D Coverflow Stage */}
      <div className="relative w-full h-[400px] sm:h-[480px] md:h-[580px] lg:h-[660px] flex items-center justify-center perspective-1200 overflow-hidden select-none px-4">
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Предыдущий проект"
          className="absolute left-3 sm:left-8 lg:left-14 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center text-zinc-800 hover:text-black hover:scale-105 active:scale-95 transition-all shadow-lg border border-white/90"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Следующий проект"
          className="absolute right-3 sm:right-8 lg:right-14 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center text-zinc-800 hover:text-black hover:scale-105 active:scale-95 transition-all shadow-lg border border-white/90"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 3D Carousel Cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          {projects.map((project, idx) => {
            const offset = idx - activeIndex;
            // Circular offset normalization
            let normalizedOffset = offset;
            if (offset < -Math.floor(projects.length / 2)) normalizedOffset += projects.length;
            if (offset > Math.floor(projects.length / 2)) normalizedOffset -= projects.length;

            const isCenter = normalizedOffset === 0;
            const isLeft = normalizedOffset === -1;
            const isRight = normalizedOffset === 1;
            const isVisible = Math.abs(normalizedOffset) <= 1;

            if (!isVisible) return null;

            // Smooth, calm 3D positioning
            let transformStyle = '';
            let zIndex = 10;
            let opacity = 0.55;

            if (isCenter) {
              transformStyle = 'translateX(0%) translateZ(40px) rotateY(0deg) scale(1)';
              zIndex = 30;
              opacity = 1;
            } else if (isLeft) {
              transformStyle = 'translateX(-62%) translateZ(-60px) rotateY(18deg) scale(0.88)';
              zIndex = 15;
              opacity = 0.65;
            } else if (isRight) {
              transformStyle = 'translateX(62%) translateZ(-60px) rotateY(-18deg) scale(0.88)';
              zIndex = 15;
              opacity = 0.65;
            }

            // Image to show on card
            const displayImg = isCenter ? activeScreen.image : project.screens[0].image;

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (!isCenter) onSelectProject(idx);
                }}
                className={`absolute w-[92%] sm:w-[84%] md:w-[74%] lg:w-[62%] max-w-[1040px] aspect-video rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-glass transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isCenter 
                    ? 'ring-2 ring-white/95 shadow-2xl bg-white' 
                    : 'hover:opacity-85 bg-zinc-100 ring-1 ring-zinc-200/60'
                }`}
                style={{
                  transform: transformStyle,
                  zIndex,
                  opacity,
                }}
              >
                {/* Image Stage: 16:9 exact ratio, matching dashboard screenshot perfectly */}
                <div className="relative w-full h-full bg-white flex items-center justify-center group overflow-hidden">
                  <img
                    src={displayImg}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  />

                  {/* Dark subtle overlay for side cards to focus attention on center */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[0.5px] transition-opacity" />
                  )}

                  {/* Fullscreen zoom trigger button (small, top-right, unobtrusive) */}
                  {isCenter && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenZoom(displayImg, `${project.title} — ${activeScreen.title}`);
                      }}
                      className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950/80 hover:bg-zinc-950 text-white text-xs font-medium backdrop-blur-md transition-all shadow-md hover:scale-105"
                      title="Открыть скриншот в полном размере"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Во весь экран</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Screen Selector Filmstrip Underneath the Card */}
      <div className="w-full max-w-[1040px] px-4 mt-4 space-y-2">
        
        {/* Screen Caption Bar (Clean, Unobtrusive) */}
        <div className="px-3 py-1 flex items-center justify-between text-xs text-zinc-600">
          <div className="line-clamp-1">
            <strong className="font-semibold text-zinc-950 font-mono mr-1.5">{activeScreen.title}:</strong>
            <span>{activeScreen.caption}</span>
          </div>
          <span className="shrink-0 pl-4 font-mono text-[11px] text-zinc-400 hidden sm:inline">
            {activeProject.caseNumber} • {activeProject.badge}
          </span>
        </div>

        <div className="glass-card-subtle rounded-2xl p-2.5 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-3 border border-white/80 shadow-xs">
          
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 pl-2 shrink-0">
            <Layers className="w-4 h-4 text-zinc-900" />
            <span className="font-semibold">Страницы ({activeProject.screens.length}):</span>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto gap-2 py-0.5 w-full sm:w-auto justify-center sm:justify-end scrollbar-none">
            {activeProject.screens.map((screen, idx) => {
              const isScreenActive = screen.id === activeScreen.id;
              return (
                <button
                  key={screen.id}
                  onClick={() => onSelectScreen(screen)}
                  className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all font-medium ${
                    isScreenActive
                      ? 'bg-zinc-950 text-white shadow-sm font-semibold scale-102'
                      : 'bg-white/70 hover:bg-white text-zinc-700 hover:text-zinc-950 border border-zinc-200/70'
                  }`}
                >
                  <span className="opacity-50 font-mono mr-1.5">{String(idx + 1).padStart(2, '0')}</span>
                  {screen.title}
                </button>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
};
