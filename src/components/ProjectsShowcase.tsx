import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  Database, 
  Play, 
  Copy, 
  Check 
} from 'lucide-react';
import { ProjectItem, ProjectScreen, SqlQueryItem } from '../data/projects';

interface ProjectsShowcaseProps {
  projects: ProjectItem[];
  activeIndex: number;
  onSelectProject: (index: number) => void;
  activeScreen: ProjectScreen;
  onSelectScreen: (screen: ProjectScreen) => void;
  onOpenZoom: (image: string, title: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  projects,
  activeIndex,
  onSelectProject,
  activeScreen,
  onSelectScreen,
  onOpenZoom,
}) => {
  const activeProject = projects[activeIndex];

  // SQL Workbench state for SQL project
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [executionMessage, setExecutionMessage] = useState<string | null>(null);

  const currentQuery: SqlQueryItem | undefined = activeProject.sqlQueries?.[activeQueryIndex];

  // Handle SQL run query
  const handleRunQuery = () => {
    if (!currentQuery) return;
    setIsRunning(true);
    setExecutionMessage(null);

    setTimeout(() => {
      setIsRunning(false);
      setExecutionMessage(`Запрос выполнен за ${currentQuery.time} • возвращено ${currentQuery.rows.length} строк`);
    }, 200);
  };

  const handleCopyCode = () => {
    if (!currentQuery) return;
    navigator.clipboard.writeText(currentQuery.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + projects.length) % projects.length;
    onSelectProject(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % projects.length;
    onSelectProject(nextIdx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <section id="projects-showcase" className="relative pt-6 pb-20 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1320px] mx-auto select-none">
      
      {/* 1. Section Title */}
      <div className="mb-6 text-center max-w-2xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-1.5">
          ПРАКТИЧЕСКИЕ КЕЙСЫ // 7 ПРОЕКТОВ
        </span>

        <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
          Портфолио аналитических систем
        </h2>

        <p className="text-xs sm:text-sm text-zinc-600 mt-2">
          Листайте проекты в табах сверху. Переключайте страницы отчетов прямо под экраном дашборда.
        </p>
      </div>

      {/* 2. Horizontal Project Selector Tabs */}
      <div className="mb-6">
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-zinc-200/80">
          
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none w-full">
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => onSelectProject(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-sm font-semibold'
                      : 'bg-white/80 hover:bg-white text-zinc-700 hover:text-zinc-950 border border-zinc-200/70 shadow-2xs'
                  }`}
                >
                  <span className={`font-mono text-xs ${isActive ? 'text-zinc-400' : 'text-zinc-400'}`}>
                    {project.caseNumber.split('/')[0].trim()}
                  </span>
                  <span>{project.shortTitle}</span>
                  {project.isSqlProject && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Предыдущий проект"
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-zinc-800 hover:text-black hover:bg-white transition-all shadow-2xs border border-zinc-200/80 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Следующий проект"
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-zinc-800 hover:text-black hover:bg-white transition-all shadow-2xs border border-zinc-200/80 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* 3. The 16:9 Dashboard Stage Frame */}
      <div className="glass-card rounded-2xl overflow-hidden border border-white/90 shadow-glass bg-white mb-6">
        
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100/90 border-b border-zinc-200/70">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs font-mono text-zinc-600 pl-2 hidden sm:inline font-semibold">
              {activeProject.caseNumber} • {activeProject.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-medium text-zinc-600 bg-white px-2 py-0.5 rounded border border-zinc-200/60 shadow-2xs">
              {activeProject.category}
            </span>

            {!activeProject.isSqlProject && (
              <button
                onClick={() => onOpenZoom(activeScreen.image, `${activeProject.title} — ${activeScreen.title}`)}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-950 hover:bg-zinc-800 text-white text-[11px] font-medium transition-all"
                title="Открыть в полном размере"
              >
                <Maximize2 className="w-3 h-3" />
                <span className="hidden sm:inline">Во весь экран</span>
              </button>
            )}
          </div>
        </div>

        {/* Viewport Area */}
        {activeProject.isSqlProject && activeProject.sqlQueries ? (
          
          /* SQL WORKBENCH VIEWPORT */
          <div className="p-4 sm:p-5 bg-zinc-950 text-zinc-100">
            <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-zinc-800">
              <div className="flex flex-wrap gap-1.5">
                {activeProject.sqlQueries.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      setActiveQueryIndex(idx);
                      setExecutionMessage(null);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                      idx === activeQueryIndex
                        ? 'bg-zinc-800 text-emerald-400 font-semibold border border-zinc-700'
                        : 'bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    <span>{q.name}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-xs font-mono text-zinc-300 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                  <span>{copied ? 'Скопировано' : 'Копировать'}</span>
                </button>

                <button
                  onClick={handleRunQuery}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold shadow-sm transition-all disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : 'fill-white'}`} />
                  <span>{isRunning ? 'Запрос...' : 'Run Query'}</span>
                </button>
              </div>
            </div>

            <div className="my-3 rounded-lg bg-zinc-900 border border-zinc-800 p-3.5 font-mono text-xs overflow-x-auto max-h-[220px] leading-relaxed text-zinc-300">
              <pre>
                <code>{currentQuery?.code}</code>
              </pre>
            </div>

            <div className="pt-1">
              <div className="flex items-center justify-between mb-1.5 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Результат выполнения (Live Table):</span>
                </div>
                {executionMessage && (
                  <span className="text-emerald-400 font-medium">
                    {executionMessage}
                  </span>
                )}
              </div>

              <div className="rounded-lg border border-zinc-800 overflow-x-auto bg-zinc-900/50">
                <table className="w-full text-left font-mono text-xs divide-y divide-zinc-800">
                  <thead className="bg-zinc-900 text-zinc-400 uppercase text-[10px] tracking-wider">
                    <tr>
                      {currentQuery?.headers.map((h, i) => (
                        <th key={i} className="px-3.5 py-2 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60 text-zinc-200">
                    {currentQuery?.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className="hover:bg-zinc-800/40 transition-colors">
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="px-3.5 py-2 whitespace-nowrap">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        ) : (
          
          /* STANDARD 16:9 DASHBOARD VIEWPORT */
          <div className="relative w-full aspect-video bg-zinc-50 flex items-center justify-center overflow-hidden">
            <img
              src={activeScreen.image}
              alt={`${activeProject.title} — ${activeScreen.title}`}
              className="w-full h-full object-cover object-top transition-all duration-200"
            />
          </div>
        )}

        {/* Power BI Style Page Switcher Tabs */}
        {!activeProject.isSqlProject && (
          <div className="px-4 py-2.5 bg-zinc-50/90 border-t border-zinc-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            
            <div className="flex items-center gap-2 text-xs text-zinc-700 min-w-0">
              <Layers className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
              <div className="truncate">
                <strong className="font-semibold text-zinc-950 font-mono mr-1">{activeScreen.title}:</strong>
                <span className="text-zinc-600">{activeScreen.caption}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
              {activeProject.screens.map((screen, idx) => {
                const isScreenActive = screen.id === activeScreen.id;
                return (
                  <button
                    key={screen.id}
                    onClick={() => onSelectScreen(screen)}
                    className={`px-3 py-1 rounded-lg text-xs whitespace-nowrap transition-all font-medium ${
                      isScreenActive
                        ? 'bg-zinc-950 text-white shadow-2xs font-semibold'
                        : 'bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200/80 shadow-2xs'
                    }`}
                  >
                    <span className="opacity-40 font-mono mr-1">{String(idx + 1).padStart(2, '0')}</span>
                    {screen.title.split('.')[1]?.trim() || screen.title}
                  </button>
                );
              })}
            </div>

          </div>
        )}

      </div>

      {/* 4. Streamlined Case Summary (No Bloated Walls of Text) */}
      <div className="glass-card rounded-2xl p-5 sm:p-7 border border-white/90 shadow-glass">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Col 1: Business Problem & Stack (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase text-zinc-400 block mb-1">
                ЗАДАЧА БИЗНЕСА
              </span>
              <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-normal">
                {activeProject.businessProblem}
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono font-bold uppercase text-zinc-400 block mb-1.5">
                ПРИМЕНЕННЫЙ СТЕК
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-medium text-zinc-800 bg-zinc-100 border border-zinc-200/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Business ROI & Metrics (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase text-emerald-700 block mb-1">
                РЕЗУЛЬТАТ И ВЫВОДЫ
              </span>
              <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-xs sm:text-sm text-emerald-950 font-normal leading-relaxed">
                {activeProject.takeaway}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {activeProject.metrics.map((m, i) => (
                <div key={i} className="px-3 py-1.5 rounded-xl bg-white border border-zinc-200/70 shadow-2xs text-xs">
                  <span className="text-zinc-500 font-mono text-[10px] block">{m.label}:</span>
                  <span className="font-mono font-bold text-zinc-950 text-sm">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
