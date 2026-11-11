import React, { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { getLocalizedProjects } from '../data/bilingualProjects';

export interface ProjectCardData {
  id: string;
  category: 'Power BI' | 'Looker Studio' | 'Python' | 'SQL';
  tags: string[];
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  linkText?: string;
  githubUrl?: string;
  screens?: { title: string; image: string }[];
  architecture?: {
    sources: string;
    model: string;
  };
  features?: string[];
  insights?: string[];
}

interface ProjectsGridProps {
  onOpenProject?: (project: ProjectCardData) => void;
  onUnconfirmedLink?: () => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onOpenProject, onUnconfirmedLink }) => {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'All' | 'Power BI' | 'Python' | 'SQL'>('All');

  const filterTabs = [
    { id: 'All' as const, label: TRANSLATIONS.projects.filterAll[lang] },
    { id: 'Power BI' as const, label: 'Power BI' },
    { id: 'Python' as const, label: 'Python' },
    { id: 'SQL' as const, label: 'SQL' },
  ];

  const projects = useMemo(() => getLocalizedProjects(lang), [lang]);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-24 px-8 sm:px-12 lg:px-16 w-full max-w-[1560px] mx-auto select-none border-t border-zinc-200/60 scroll-mt-24">
      
      {/* Section Header */}
      <RevealOnScroll direction="up" delay={50}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col">
            <span className="text-xs font-mono font-medium text-zinc-400 mb-1.5">{TRANSLATIONS.projects.number}</span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
                {TRANSLATIONS.projects.title[lang]}
              </h2>
              <p className="text-sm sm:text-base text-zinc-500 max-w-xl font-normal leading-relaxed">
                {TRANSLATIONS.projects.subtitle[lang]}
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-xs'
                      : 'bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200/80'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {filteredProjects.map((project, index) => (
          <RevealOnScroll
            key={project.id}
            direction="up"
            delay={100 + (index % 3) * 100}
            duration={700}
            className="h-full"
          >
            <div className="group bg-white rounded-2xl border border-zinc-200/80 hover:border-zinc-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden h-full">
              {/* Project Image Preview (Aspect 16:9) */}
              <div
                onClick={() => onOpenProject && onOpenProject(project)}
                className="relative aspect-video w-full overflow-hidden bg-zinc-100 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[10px] font-mono font-medium tracking-tight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-sm sm:text-base text-zinc-950 mb-2 leading-snug group-hover:text-zinc-800">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-zinc-500 leading-relaxed font-normal mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-2 border-t border-zinc-100">
                  <button
                    onClick={() => onOpenProject && onOpenProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors cursor-pointer"
                  >
                    <span>{project.linkText || (lang === 'en' ? 'View Project' : 'Посмотреть проект')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}

        {/* GitHub Card */}
        <RevealOnScroll
          direction="up"
          delay={200}
          duration={700}
          className="h-full"
        >
          <div className="bg-zinc-50/70 rounded-2xl border border-zinc-200/80 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-zinc-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full min-h-[280px]">
            
            <div className="flex items-center justify-center mb-3">
              <svg
                className="w-12 h-12 text-zinc-500 rotate-[-10deg] group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M25 80 C40 65, 55 50, 75 25" />
                <path d="M48 24 L76 24 L78 52" />
              </svg>
            </div>

            <div className="font-handwriting text-2xl sm:text-3xl text-zinc-700 leading-tight mb-6 max-w-[180px] select-none group-hover:text-zinc-950 transition-colors">
              {TRANSLATIONS.projects.moreOnGithub[lang]}
            </div>

            <button
              type="button"
              onClick={onUnconfirmedLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold shadow-sm hover:scale-[1.04] active:scale-95 transition-all duration-200 hover:shadow-md cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>{TRANSLATIONS.projects.goToGithub[lang]}</span>
            </button>

          </div>
        </RevealOnScroll>

      </div>

    </section>
  );
};
