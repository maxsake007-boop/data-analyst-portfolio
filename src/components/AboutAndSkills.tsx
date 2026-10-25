import React from 'react';
import { Download, BarChart3, Database, Code2, Sparkles, Globe, User, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const AboutAndSkills: React.FC = () => {
  const skills = [
    {
      icon: <BarChart3 className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
      title: 'BI и визуализация',
      description: 'Power BI (DAX, Power Query, RLS, drill-through, bookmarks, decomposition tree, field parameters, forecast, anomaly detection, What-If), Looker Studio',
    },
    {
      icon: <Database className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
      title: 'Данные и базы',
      description: 'SQL (SELECT, JOIN, GROUP BY, оконные функции), PostgreSQL',
    },
    {
      icon: <Code2 className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
      title: 'Data Science (базовый уровень)',
      description: 'Python (pandas, NumPy, Matplotlib, Seaborn, Plotly, scikit-learn), FastAPI, Jupyter Notebook',
    },
    {
      icon: <Sparkles className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
      title: 'ИИ-инструменты',
      description: 'Активно использую в рабочих процессах (создаю собственного ИИ-ассистента со знаниями в сфере Data Analytics для помощи в работе)',
    },
    {
      icon: <Globe className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
      title: 'Английский язык',
      description: 'IELTS 5.5 (Speaking 6, Writing 6, Listening 5, Reading 5)',
    },
    {
      icon: <User className="w-7 h-7 text-zinc-950" strokeWidth={1.9} />,
      title: 'Soft skills',
      description: 'Быстро обучаюсь, легко адаптируюсь, коммуникабелен, открыт к обратной связи. Не боюсь выступлений, есть опыт презентаций перед аудиторией.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 px-8 sm:px-12 lg:px-16 w-full max-w-[1560px] mx-auto select-none border-t border-zinc-200/60 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: 01 Обо мне */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <RevealOnScroll direction="up" delay={50}>
              <div className="flex flex-col mb-8">
                <span className="text-xs font-mono font-medium text-zinc-400 mb-1.5">01</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
                  Обо мне
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={140}>
              <div className="space-y-6 text-base sm:text-lg lg:text-[19px] text-zinc-800 leading-[1.75] font-normal">
                <p>
                  Начинающий Data Analyst, прошёл профильное обучение по Data Science в PROWEB (диплом с отличием) в январе 2026 года. После выпуска собрал портфолио первых практических проектов, параллельно пробовал развивать фриланс-практику на Upwork и продолжал наращивать опыт работы в Power BI.
                </p>
                <p>
                  Осваивал возможности Power BI, SQL и Python не в теории, а через реальные проекты: подключал источники, преобразовывал и чистил данные, работал в pgAdmin 4, DBeaver и Jupyter Notebook. SQL и Python (pandas, NumPy) — на базовом уровне: понимаю принципы, знаю инструменты и быстро адаптируюсь под задачи команды. Активно использую ИИ-инструменты в работе, это часть современного подхода к аналитике.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll direction="up" delay={220}>
            <div className="pt-10">
              <a
                href="/Текст/Resume.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-11 px-6 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold shadow-sm hover:scale-[1.04] active:scale-95 transition-all duration-200 hover:shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>Скачать резюме</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column: 02 Навыки */}
        <div id="skills" className="lg:col-span-7 flex flex-col scroll-mt-24">
          <RevealOnScroll direction="up" delay={100}>
            <div className="flex items-end justify-between mb-8">
              <div className="flex flex-col">
                <span className="text-xs font-mono font-medium text-zinc-400 mb-1.5">02</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
                  Навыки
                </h2>
              </div>

              <a
                href="#skills"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-500 hover:text-zinc-950 transition-colors pb-1 group"
              >
                <span>Все навыки</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </RevealOnScroll>

          {/* 3x2 Skills Grid (Large readable cards + big icons + hover lift + staggered reveal) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <RevealOnScroll
                key={index}
                direction="up"
                delay={120 + index * 70}
                duration={700}
                className="h-full"
              >
                <div className="group bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/90 hover:border-zinc-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] h-full cursor-default">
                  <div>
                    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-zinc-950 mb-2 leading-snug group-hover:text-zinc-800 transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {skill.description}
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
