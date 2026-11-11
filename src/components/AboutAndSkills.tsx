import React from 'react';
import { Download, BarChart3, Database, Code2, Sparkles, Table, User, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const AboutAndSkills: React.FC = () => {
  const { lang } = useLanguage();

  const skillIcons: Record<string, React.ReactNode> = {
    sql: <Database className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
    python: <Code2 className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
    powerbi: <BarChart3 className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
    excel: <Table className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
    ai: <Sparkles className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
    softskills: <User className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
  };

  return (
    <section id="about" className="py-20 sm:py-24 px-8 sm:px-12 lg:px-16 w-full max-w-[1560px] mx-auto select-none border-t border-zinc-200/60 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: 01 Обо мне / About Me */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <RevealOnScroll direction="up" delay={50}>
              <div className="flex flex-col mb-8">
                <span className="text-xs font-mono font-medium text-zinc-400 mb-1.5">{TRANSLATIONS.about.number}</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
                  {TRANSLATIONS.about.title[lang]}
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={140}>
              <div className="space-y-6 text-base sm:text-lg lg:text-[19px] text-zinc-800 leading-[1.75] font-normal">
                <p>
                  <strong className="font-bold text-zinc-950">Junior Data Analyst</strong>
                  {lang === 'en'
                    ? ', graduate of the PROWEB Data Science program (Diploma with Honors, January 2026). I work with data across all stages of the analytical lifecycle: from extraction and preparation to exploratory analysis and visualization of insights. I use SQL for data exploration, Python for processing and transformation, and Power BI for designing analytical data models, building DAX measures, and creating interactive dashboards. My portfolio includes 5 business projects across Sales, Finance, HR, E-commerce, and SaaS.'
                    : ', выпускник программы Data Science в PROWEB (диплом с отличием, январь 2026 года). Работаю с данными на разных этапах аналитического процесса: от извлечения и подготовки до исследования и визуализации результатов. Использую SQL для анализа данных, Python для их обработки и Power BI для построения аналитических моделей, разработки DAX-мер и интерактивных дашбордов. В портфолио - 5 проектов в направлениях Sales, Finance, HR, E-commerce и SaaS.'}
                </p>
                <p>
                  {TRANSLATIONS.about.p2[lang]}
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll direction="up" delay={220}>
            <div className="pt-10">
              <a
                href={TRANSLATIONS.about.cvUrl[lang]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold shadow-sm hover:scale-[1.04] active:scale-95 transition-all duration-200 hover:shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>{TRANSLATIONS.about.downloadCv[lang]}</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column: 02 Навыки / Skills */}
        <div id="skills" className="lg:col-span-7 flex flex-col scroll-mt-24">
          <RevealOnScroll direction="up" delay={100}>
            <div className="flex items-end justify-between mb-8">
              <div className="flex flex-col">
                <span className="text-xs font-mono font-medium text-zinc-400 mb-1.5">{TRANSLATIONS.skills.number}</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
                  {TRANSLATIONS.skills.title[lang]}
                </h2>
              </div>

              <a
                href="#skills"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-500 hover:text-zinc-950 transition-colors pb-1 group"
              >
                <span>{TRANSLATIONS.skills.allSkills[lang]}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </RevealOnScroll>

          {/* 3x2 Skills Grid (Large readable cards + big icons + hover lift + staggered reveal) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {TRANSLATIONS.skills.cards.map((skill, index) => (
              <RevealOnScroll
                key={skill.id}
                direction="up"
                delay={120 + index * 70}
                duration={700}
                className="h-full"
              >
                <div className="group bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/90 hover:border-zinc-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] h-full cursor-default">
                  <div>
                    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]">
                      {skillIcons[skill.id]}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-zinc-950 mb-2 leading-snug group-hover:text-zinc-800 transition-colors">
                      {skill.title[lang]}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {skill.description[lang]}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
