import React from 'react';
import { CheckCircle2, TrendingUp, Sparkles, Database, Layers, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/projects';
import { SqlWorkbench } from './SqlWorkbench';

interface ProjectDetailCardProps {
  project: ProjectItem;
}

export const ProjectDetailCard: React.FC<ProjectDetailCardProps> = ({ project }) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 mt-8">
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/80 shadow-glass transition-all">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-200/70">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="font-mono text-xs font-bold text-zinc-500 tracking-wider">
                КЕЙС // {project.caseNumber} ИЗ 07
              </span>
              <span className="text-zinc-300">•</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                {project.category}
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight leading-snug">
              {project.title}
            </h2>
          </div>

          {/* Quick Metrics Badges */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="glass-pill px-4 py-2 rounded-2xl flex flex-col border border-white/90 shadow-2xs"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{m.label}</span>
                </div>
                <span className="font-mono font-bold text-lg sm:text-xl text-zinc-950 tabular-nums mt-0.5">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* IF SQL PROJECT: Interactive SQL Workbench embedded inside the card */}
        {project.isSqlProject && project.sqlQueries && (
          <div className="pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-600" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-800">
                  Интерактивный SQL Workbench (PostgreSQL / DBeaver)
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                Нажмите «Run Query» для проверки выполнения запроса на тестовых данных
              </span>
            </div>

            <SqlWorkbench queries={project.sqlQueries} />
          </div>
        )}

        {/* 2-Column Balanced Editorial Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-8">
          
          {/* Column 1: Business Context & Stack */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-zinc-800" />
                <span>Проблема бизнеса и предпосылки проекта</span>
              </h3>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                {project.businessProblem}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-200/60">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                Использованный стек & инструменты
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl text-xs font-mono font-medium text-zinc-800 bg-white/80 border border-zinc-200/70 shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Architecture & ROI Takeaway */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-zinc-800" />
                <span>Архитектурные и инженерные решения</span>
              </h3>
              
              <ul className="space-y-3">
                {project.architectureNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Оцифрованный бизнес-результат</span>
              </h3>

              <div className="rounded-2xl p-5 bg-emerald-50/70 border border-emerald-200/80 shadow-xs">
                <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                  {project.takeaway}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
