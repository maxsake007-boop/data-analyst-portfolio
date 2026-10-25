import React, { useState } from 'react';
import { Send, Github, Briefcase, FileText, Mail, Phone, MapPin, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = 'maxset.narbekov@gmail.com';
  const phone = '+998 90 123 45 67';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contacts" className="relative pt-16 pb-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1400px] mx-auto select-none">
      
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-white/90 shadow-glass">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-zinc-700 mb-3 shadow-2xs border border-white/80">
            <MessageSquare className="w-3.5 h-3.5 text-zinc-950" />
            <span>СВЯЗЬ И ПРИГЛАШЕНИЕ НА ИНТЕРВЬЮ</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight mb-3">
            Готов к диалогу и техническому интервью
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Открыт к предложениям о работе на позицию Data Analyst / BI Developer (в штат, удаленно или в офисе Ташкента). Буду рад выполнить тестовое задание или обсудить аналитические задачи вашей команды.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          
          {/* Telegram */}
          <a
            href="https://t.me/maxsake"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-subtle p-5 rounded-2xl border border-white/90 shadow-2xs hover:shadow-md transition-all hover:scale-[1.02] flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <Send className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 block mb-0.5">ОПЕРАТИВНАЯ СВЯЗЬ</span>
              <span className="font-semibold text-zinc-950 text-sm">Telegram</span>
              <span className="text-xs text-zinc-600 block mt-0.5">@maxsake</span>
            </div>
          </a>

          {/* HeadHunter */}
          <a
            href="https://hh.ru/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-subtle p-5 rounded-2xl border border-white/90 shadow-2xs hover:shadow-md transition-all hover:scale-[1.02] flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 block mb-0.5">ПРОФИЛЬ СОИСКАТЕЛЯ</span>
              <span className="font-semibold text-zinc-950 text-sm">HeadHunter</span>
              <span className="text-xs text-zinc-600 block mt-0.5">Резюме на hh.ru</span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/maxsake007-boop"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-subtle p-5 rounded-2xl border border-white/90 shadow-2xs hover:shadow-md transition-all hover:scale-[1.02] flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                <Github className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 block mb-0.5">РЕПОЗИТОРИИ С КОДОМ</span>
              <span className="font-semibold text-zinc-950 text-sm">GitHub</span>
              <span className="text-xs text-zinc-600 block mt-0.5">maxsake007-boop</span>
            </div>
          </a>

          {/* Resume Download */}
          <a
            href="/Текст/Resume.md"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-subtle p-5 rounded-2xl border border-white/90 shadow-2xs hover:shadow-md transition-all hover:scale-[1.02] flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <FileText className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 block mb-0.5">ТЕКСТОВЫЙ ФАЙЛ</span>
              <span className="font-semibold text-zinc-950 text-sm">Скачать резюме</span>
              <span className="text-xs text-zinc-600 block mt-0.5">Открыть файл CV</span>
            </div>
          </a>

        </div>

        {/* Direct Contacts Row (Email, Phone, Location) */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-zinc-200/70 text-xs font-mono text-zinc-600">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200/70 transition-colors cursor-pointer"
            title="Скопировать Email"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-800" />
            <span>{email}</span>
            {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-zinc-400" />}
          </button>

          <button
            onClick={handleCopyPhone}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200/70 transition-colors cursor-pointer"
            title="Скопировать Телефон"
          >
            <Phone className="w-3.5 h-3.5 text-zinc-800" />
            <span>{phone}</span>
            {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-zinc-400" />}
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1.5 text-zinc-500">
            <MapPin className="w-3.5 h-3.5" />
            <span>Навои / Ташкент (готов к переезду) / Удаленно</span>
          </div>
        </div>

      </div>

    </section>
  );
};
