import React from 'react';
import { BarChart3, Database, Binary, LineChart, CheckCircle2 } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="relative py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1400px] mx-auto select-none">
      
      {/* Section Title */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-2">
          ЧЕК-ЛИСТ НАВЫКОВ ДЛЯ ВАКАНСИИ
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
          Подтвержденный технический стек
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 mt-2">
          Инструменты, применяемые на практике в пяти отраслях: от сырого SQL до интерактивных дашбордов и ML-микросервисов.
        </p>
      </div>

      {/* 4-Column Competence Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Block 1: Power BI & DAX */}
        <div className="glass-card rounded-3xl p-6 border border-white/90 shadow-glass flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4 border border-amber-500/20">
              <BarChart3 className="w-5 h-5" />
            </div>

            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 mb-1">
              01 // ОСНОВНОЙ ФОКУС
            </div>
            
            <h3 className="font-display font-bold text-lg text-zinc-950 mb-3">
              Power BI & DAX
            </h3>

            <ul className="space-y-2.5 text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                <span>Продвинутый DAX (CALCULATE, Time Intelligence, What-If)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                <span>Звёздная схема (Star Schema), нормализация и связи 1:N</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                <span>Dynamic Row-Level Security (RLS) для филиалов</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                <span>Drill-through, закладки (bookmarks), Field Parameters</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                <span>Дизайн канваса в Figma, принципы гештальта</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200/60 text-[11px] font-mono text-zinc-500">
            ИНСТРУМЕНТ: Power BI Desktop / Service
          </div>
        </div>

        {/* Block 2: SQL & DWH */}
        <div className="glass-card rounded-3xl p-6 border border-white/90 shadow-glass flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4 border border-blue-500/20">
              <Database className="w-5 h-5" />
            </div>

            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-1">
              02 // АНАЛИТИКА ДАННЫХ
            </div>
            
            <h3 className="font-display font-bold text-lg text-zinc-950 mb-3">
              PostgreSQL & SQL
            </h3>

            <ul className="space-y-2.5 text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                <span>Оконные функции (ROW_NUMBER, DENSE_RANK, LAG, LEAD)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                <span>Многоуровневые CTE для витрин данных</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                <span>Агрегации, фильтрация, JOIN, GROUP BY</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                <span>Оптимизация запросов через EXPLAIN ANALYZE</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                <span>Построение баз данных как источников для BI</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200/60 text-[11px] font-mono text-zinc-500">
            ИНСТРУМЕНТ: PostgreSQL, DBeaver IDE
          </div>
        </div>

        {/* Block 3: Python & Machine Learning */}
        <div className="glass-card rounded-3xl p-6 border border-white/90 shadow-glass flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4 border border-emerald-500/20">
              <Binary className="w-5 h-5" />
            </div>

            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-1">
              03 // ПРОД И АВТОМАТИЗАЦИЯ
            </div>
            
            <h3 className="font-display font-bold text-lg text-zinc-950 mb-3">
              Python & FastAPI
            </h3>

            <ul className="space-y-2.5 text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>Pandas, NumPy: очистка и предобработка данных</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>Scikit-learn: обучение моделей классификации</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>Random Forest 98.1% (ROC-AUC 0.99)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>FastAPI: асинхронные REST-микросервисы скоринга</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>Pydantic: строгая валидация входящих схем</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200/60 text-[11px] font-mono text-zinc-500">
            ИНСТРУМЕНТ: Python 3.11, Scikit-learn, FastAPI
          </div>
        </div>

        {/* Block 4: Business Analysis & Metrics */}
        <div className="glass-card rounded-3xl p-6 border border-white/90 shadow-glass flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 mb-4 border border-purple-500/20">
              <LineChart className="w-5 h-5" />
            </div>

            <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-1">
              04 // БИЗНЕС-МЕТРИКИ
            </div>
            
            <h3 className="font-display font-bold text-lg text-zinc-950 mb-3">
              Бизнес-анализ
            </h3>

            <ul className="space-y-2.5 text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 shrink-0" />
                <span>Когортный анализ удержания (Cohort Retention & LTV)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 shrink-0" />
                <span>Юнит-экономика: CAC, LTV, MRR, ARR, Churn Rate</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 shrink-0" />
                <span>Управленческий P&L, Cash Flow, OPEX/CAPEX</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 shrink-0" />
                <span>RFM-сегментация клиентской базы</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 shrink-0" />
                <span>План-факт отклонения, сценарный What-If анализ</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200/60 text-[11px] font-mono text-zinc-500">
            МЕТОДОЛОГИЯ: Анализ сквозных воронок
          </div>
        </div>

      </div>

    </section>
  );
};
