import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Monitor, Maximize2, Sparkles, Database, Sliders, TrendingUp } from 'lucide-react';
import { ProjectCardData } from './ProjectsGrid';
import ThumbnailCarousel, { CarouselItem } from './ui/thumbnail-carousel';
import { LightboxModal } from './LightboxModal';

interface ProjectModalProps {
  project: ProjectCardData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reset index when project changes
  useEffect(() => {
    setActiveScreenIndex(0);
    setIsLightboxOpen(false);
  }, [project?.id]);

  const screens = project?.screens && project.screens.length > 0
    ? project.screens
    : project
    ? [{ title: project.title, image: project.image }]
    : [];

  // Keyboard navigation: Escape to close, ArrowLeft / ArrowRight to switch screens
  useEffect(() => {
    if (!project || screens.length === 0) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveScreenIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveScreenIndex((prev) => Math.min(screens.length - 1, prev + 1));
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, screens.length, onClose, isLightboxOpen]);

  if (!project) return null;

  const currentScreen = screens[activeScreenIndex] || screens[0];

  const carouselItems: CarouselItem[] = screens.map((scr, idx) => ({
    id: `${project.id}-${idx}`,
    url: scr.image,
    title: scr.title,
  }));

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
        
        {/* Click outside to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Two Separate Floating Cards Container (Широкий контейнер, сбалансированный) */}
        <div className="relative w-full max-w-[1580px] z-10 flex flex-col lg:flex-row gap-5 lg:gap-6 items-stretch max-h-[92vh] overflow-y-auto lg:overflow-visible transition-transform duration-200">

          {/* ======================================================== */}
          {/* КАРТОЧКА 1 (СЛЕВА): Увеличенная часть с фото (~58%)       */}
          {/* ======================================================== */}
          <div className="w-full lg:w-[58%] xl:w-[59%] bg-white rounded-3xl p-5 border border-zinc-200/90 shadow-2xl flex flex-col justify-between shrink-0 min-w-0 max-h-[85vh] lg:max-h-[88vh]">
            
            {/* Верхняя шапка: Название текущей страницы + подсказка стрелок + кнопка развернуть */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-zinc-100">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 shrink-0">
                  <Monitor className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold leading-none mb-1">
                    Страница дашборда
                  </p>
                  <h4 className="text-sm sm:text-base font-bold text-zinc-950 truncate tracking-tight">
                    {currentScreen.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Подсказка управления с клавиатуры */}
                {screens.length > 1 && (
                  <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-zinc-100 text-zinc-500 text-[10px] font-mono" title="Листайте стрелками на клавиатуре">
                    <kbd className="px-1 py-0.5 bg-white border border-zinc-200 rounded text-[9px] font-semibold shadow-2xs">←</kbd>
                    <kbd className="px-1 py-0.5 bg-white border border-zinc-200 rounded text-[9px] font-semibold shadow-2xs">→</kbd>
                  </div>
                )}

                {screens.length > 1 && (
                  <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-mono font-medium">
                    {activeScreenIndex + 1} / {screens.length}
                  </span>
                )}
                
                {/* Кнопка открыть на полный экран */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-medium transition-colors cursor-pointer"
                  title="Развернуть скриншот на весь экран для детального просмотра"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Во весь экран</span>
                </button>
              </div>
            </div>

            {/* Интерактивная карусель скриншотов */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <ThumbnailCarousel
                items={carouselItems}
                index={activeScreenIndex}
                onIndexChange={setActiveScreenIndex}
              />
            </div>

          </div>

          {/* ======================================================== */}
          {/* КАРТОЧКА 2 (СПРАВА): Расширенное описание проекта (~42%)  */}
          {/* ======================================================== */}
          <div className="w-full lg:w-[42%] xl:w-[41%] bg-white rounded-3xl p-6 sm:p-7 md:p-8 border border-zinc-200/90 shadow-2xl flex flex-col justify-between overflow-y-auto min-w-0 max-h-[85vh] lg:max-h-[88vh]">
            
            <div className="flex flex-col">
              {/* Header карточки: Категория + Кнопка закрытия */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-100">
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-mono font-medium">
                  {project.category}
                </span>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
                  aria-label="Закрыть модальное окно"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Название проекта */}
              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight leading-snug mb-3">
                {project.title}
              </h3>

              {/* Краткая выжимка (Lead summary) */}
              {project.description && (
                <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 mb-5 text-sm sm:text-[14.5px] font-medium text-zinc-800 leading-relaxed flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                  <span>{project.description}</span>
                </div>
              )}

              {/* 3 Структурированных блока проекта */}
              {project.architecture ? (
                <div className="space-y-4 mb-6">
                  
                  {/* БЛОК 1: Архитектура данных */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 border border-zinc-200/80">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-6 h-6 rounded-lg bg-zinc-200/70 flex items-center justify-center text-zinc-800 shrink-0">
                        <Database className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                        01 / Архитектура данных
                      </span>
                    </div>
                    <div className="space-y-2 text-sm sm:text-[14.5px] text-zinc-700 leading-relaxed">
                      <p>
                        <strong className="text-zinc-950 font-semibold">Источники:</strong>{' '}
                        {project.architecture.sources}
                      </p>
                      <p>
                        <strong className="text-zinc-950 font-semibold">Модель:</strong>{' '}
                        {project.architecture.model}
                      </p>
                    </div>
                  </div>

                  {/* БЛОК 2: Инструменты отчёта */}
                  {project.features && project.features.length > 0 && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 border border-zinc-200/80">
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="w-6 h-6 rounded-lg bg-zinc-200/70 flex items-center justify-center text-zinc-800 shrink-0">
                          <Sliders className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[11px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                          02 / Инструменты отчёта
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm sm:text-[14.5px] text-zinc-700 leading-relaxed">
                        {project.features.map((item, idx) => {
                          const colonIdx = item.indexOf(':');
                          if (colonIdx > 0 && colonIdx < 45) {
                            const prefix = item.substring(0, colonIdx);
                            const rest = item.substring(colonIdx + 1);
                            return (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-zinc-400 select-none mt-0.5">•</span>
                                <span>
                                  <strong className="text-zinc-950 font-semibold">{prefix}:</strong>
                                  {rest}
                                </span>
                              </li>
                            );
                          }
                          return (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-zinc-400 select-none mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {/* БЛОК 3: Результаты анализа */}
                  {project.insights && project.insights.length > 0 && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 border border-zinc-200/80">
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="w-6 h-6 rounded-lg bg-zinc-200/70 flex items-center justify-center text-zinc-800 shrink-0">
                          <TrendingUp className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[11px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                          03 / Результаты анализа
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm sm:text-[14.5px] text-zinc-700 leading-relaxed">
                        {project.insights.map((item, idx) => {
                          const colonIdx = item.indexOf(':');
                          if (colonIdx > 0 && colonIdx < 45) {
                            const prefix = item.substring(0, colonIdx);
                            const rest = item.substring(colonIdx + 1);
                            return (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-zinc-400 select-none mt-0.5">•</span>
                                <span>
                                  <strong className="text-zinc-950 font-semibold">{prefix}:</strong>
                                  {rest}
                                </span>
                              </li>
                            );
                          }
                          return (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-zinc-400 select-none mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                </div>
              ) : (
                /* Fallback на fullDescription если 3 блока не заданы */
                <div className="text-sm sm:text-[14.5px] text-zinc-700 leading-relaxed space-y-3 mb-6">
                  <p>{project.fullDescription}</p>
                </div>
              )}
            </div>

            {/* Нижняя часть карточки: Технологии и ссылки */}
            <div className="pt-4 border-t border-zinc-100 mt-auto">
              <div className="mb-4">
                <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  Использованные технологии
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-800 text-xs font-mono font-medium border border-zinc-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Внешние ссылки если есть */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>Исходный код / Репозиторий</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-zinc-400" />
                </a>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Полноэкранный Lightbox для детального просмотра */}
      <LightboxModal
        isOpen={isLightboxOpen}
        image={currentScreen.image}
        title={currentScreen.title}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
};
