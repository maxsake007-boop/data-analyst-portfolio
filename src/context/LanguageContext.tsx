import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ru';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'ru' || saved === 'en') {
        return saved;
      }
    }
    // Default to English as the primary language upon first visit
    return 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', newLang);
      document.documentElement.lang = newLang;
      document.title =
        newLang === 'en'
          ? 'Makhset Narbekov - Data Analyst & BI Specialist'
          : 'Махсет Нарбеков - Data Analyst / BI-аналитик';
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ru' : 'en');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = lang;
      document.title =
        lang === 'en'
          ? 'Makhset Narbekov - Data Analyst & BI Specialist'
          : 'Махсет Нарбеков - Data Analyst / BI-аналитик';
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
