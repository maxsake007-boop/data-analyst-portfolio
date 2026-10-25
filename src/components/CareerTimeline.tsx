import React from 'react';
import { GraduationCap, Briefcase, Award, Languages, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const CareerTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1400px] mx-auto select-none">
      
      {/* Section Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-2">
          ОПЫТ И КВАЛИФИКАЦИЯ
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
          Образование и практический трек
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 mt-2">
          Академическая база по Data Science и реальный опыт разработки сквозных аналитических систем.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Education & Diplomas (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200/80">
            <GraduationCap className="w-5 h-5 text-zinc-950" />
            <h3 className="font-display font-bold text-xl text-zinc-950">
              Профильное образование
            </h3>
          </div>

          {/* Education Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/90 shadow-glass">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-mono font-bold">
                ДИПЛОМ С ОТЛИЧИЕМ
              </span>
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Выпуск: Январь 2026</span>
              </span>
            </div>

            <h4 className="font-display font-bold text-lg text-zinc-950 mb-1">
              PROWEB — Направление Data Science
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 mb-4 leading-relaxed">
              Комплексная программа по анализу данных, проектированию реляционных баз данных, машинному обучению и бизнес-визуализации.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-zinc-200/60 text-xs text-zinc-700">
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Дипломный проект 1:</strong> YesCredit — сервис кредитного скоринга (FastAPI, Scikit-learn, Random Forest). Защищен на 100%.</span>
              </div>
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Дипломный проект 2:</strong> Аналитический дашборд каталога Netflix в Power BI с многостраничной аналитикой. Защищен с отличием.</span>
              </div>
            </div>
          </div>

          {/* Language Card */}
          <div className="glass-card-subtle rounded-3xl p-6 border border-white/90 shadow-2xs">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase text-zinc-500">
              <Languages className="w-4 h-4 text-zinc-900" />
              <span>Языковая компетенция</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-zinc-950 text-sm">Английский язык — IELTS 5.5</h4>
                <p className="text-xs text-zinc-600 mt-0.5">Speaking 6.0, Writing 6.0. Чтение технической документации, составление англоязычных отчетов.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Practical Projects & Experience (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200/80">
            <Briefcase className="w-5 h-5 text-zinc-950" />
            <h3 className="font-display font-bold text-xl text-zinc-950">
              Практический опыт
            </h3>
          </div>

          {/* Experience Card 1 */}
          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/90 shadow-glass">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-zinc-900 bg-zinc-100 px-3 py-1 rounded-xl">
                ПРАКТИКА И ПОРТФОЛИО
              </span>
              <span className="text-xs font-mono text-zinc-500">
                2025 — настоящее время
              </span>
            </div>

            <h4 className="font-display font-bold text-lg text-zinc-950 mb-1">
              Разработка корпоративной Power BI отчетности (5 сфер)
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 mb-4 leading-relaxed">
              Самостоятельное проектирование сквозных BI-решений для B2B продаж, SaaS, финансового учета, HR и ритейла.
            </p>

            <ul className="space-y-2 text-xs text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 mt-0.5 shrink-0" />
                <span>Построение моделей данных: таблицы фактов, снежинки и звездные схемы с разделением гранулярности.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 mt-0.5 shrink-0" />
                <span>Написание сложных DAX-мер: Time Intelligence (YoY, MoM, QTD), когортные матрицы и What-If сценарное моделирование.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 mt-0.5 shrink-0" />
                <span>Создание витрин данных в PostgreSQL (DBeaver) с оконными функциями и CTE.</span>
              </li>
            </ul>
          </div>

          {/* Experience Card 2 */}
          <div className="glass-card-subtle rounded-3xl p-6 border border-white/90 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-zinc-700">
                ФРИЛАНС-ПРАКТИКА
              </span>
              <span className="text-xs font-mono text-zinc-500">
                Upwork / Прямые клиенты
              </span>
            </div>

            <h4 className="font-bold text-zinc-950 text-sm mb-1">
              Разработка коммерческих отчетов и дашбордов
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Подготовка аналитических отчетов для розничной торговли и онлайн-сервисов (Superstore Sales, аналитика рекламных кампаний, ритейл-дашборды).
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
