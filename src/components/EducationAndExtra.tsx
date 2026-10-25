import React from 'react';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const EducationAndExtra: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-24 px-8 sm:px-12 lg:px-16 w-full max-w-[1560px] mx-auto select-none border-t border-zinc-200/60 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: 04 Образование (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <RevealOnScroll direction="up" delay={50}>
            <div className="mb-8">
              <span className="text-xs font-mono font-medium text-zinc-400 mb-1.5 block">04</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Образование
              </h2>
            </div>
          </RevealOnScroll>

          {/* Unified Large White Card matching reference */}
          <RevealOnScroll direction="up" delay={120} duration={750}>
            <div className="group bg-white rounded-3xl p-7 sm:p-8 border border-zinc-200/90 shadow-2xs hover:border-zinc-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 min-h-[160px]">
              {/* Left: Icon Badge & Degree */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-950 shrink-0 shadow-2xs group-hover:scale-105 group-hover:rotate-[-3deg] transition-transform duration-300">
                  <GraduationCap className="w-8 h-8" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-zinc-950 leading-snug group-hover:text-zinc-800 transition-colors">
                    Data Science, PROWEB
                  </h3>
                  <span className="text-xs sm:text-sm text-zinc-500 font-semibold block mt-1">
                    Диплом с отличием
                  </span>
                </div>
              </div>

              {/* Subtle Divider Line */}
              <div className="hidden sm:block w-[1px] h-20 bg-zinc-200 shrink-0" />

              {/* Right: Narrative Description */}
              <p className="text-xs sm:text-sm lg:text-[14.5px] text-zinc-700 leading-relaxed font-normal flex-1">
                Защитил обе дипломные работы: YesCredit (скоринг кредитоспособности, FastAPI) и дашборд по анализу данных Netflix. После завершения курса разработал серию комплексных отраслевых дашбордов для бизнеса: SaaS Analytics, Finance & Accounting и E-commerce & Retail.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column: 05 Дополнительно (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <RevealOnScroll direction="up" delay={80}>
            <div className="mb-8">
              <span className="text-xs font-mono font-medium text-zinc-400 mb-1.5 block">05</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Дополнительно
              </h2>
            </div>
          </RevealOnScroll>

          {/* Two White Pill Cards matching reference with hover lift */}
          <div className="flex flex-col gap-4 sm:gap-5">
            
            <RevealOnScroll direction="up" delay={140} duration={700}>
              <div className="group bg-white rounded-2xl sm:rounded-full border border-zinc-200/90 p-2.5 sm:p-3 pr-7 flex items-center gap-4 hover:border-zinc-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 min-h-[72px]">
                <div className="w-13 h-13 rounded-xl sm:rounded-full bg-zinc-100 flex items-center justify-center text-zinc-950 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <Briefcase className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <span className="text-sm sm:text-[15px] text-zinc-800 font-medium leading-snug group-hover:text-zinc-950 transition-colors">
                  Веду фриланс-практику на Upwork с фокусом на международных клиентов (US/EU)
                </span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={220} duration={700}>
              <div className="group bg-white rounded-2xl sm:rounded-full border border-zinc-200/90 p-2.5 sm:p-3 pr-7 flex items-center gap-4 hover:border-zinc-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 min-h-[72px]">
                <div className="w-13 h-13 rounded-xl sm:rounded-full bg-zinc-100 flex items-center justify-center text-zinc-950 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <span className="text-sm sm:text-[15px] text-zinc-800 font-medium leading-snug group-hover:text-zinc-950 transition-colors">
                  Базируюсь в Навои, готов к переезду в Ташкент при подходящем предложении
                </span>
              </div>
            </RevealOnScroll>

          </div>
        </div>

      </div>
    </section>
  );
};
