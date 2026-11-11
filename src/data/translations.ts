export interface TranslatedProject {
  id: string;
  category: 'Power BI' | 'Looker Studio' | 'Python' | 'SQL';
  tags: string[];
  image: string;
  githubUrl?: string;
  screens: { title: { en: string; ru: string }; image: string }[];
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  fullDescription: { en: string; ru: string };
  linkText: { en: string; ru: string };
  architecture?: {
    sources: { en: string; ru: string };
    model: { en: string; ru: string };
  };
  features?: { en: string; ru: string }[];
  insights?: { en: string; ru: string }[];
}

export const TRANSLATIONS = {
  header: {
    nav: {
      hero: { en: 'Home', ru: 'Главная' },
      about: { en: 'About', ru: 'О себе' },
      skills: { en: 'Skills', ru: 'Навыки' },
      projects: { en: 'Projects', ru: 'Проекты' },
      education: { en: 'Education', ru: 'Образование' },
      contact: { en: 'Contact', ru: 'Контакты' },
    },
    contactBtn: { en: 'Get in Touch', ru: 'Связаться' },
  },

  hero: {
    preTitle: { en: "HELLO, I'M", ru: 'ПРИВЕТ, Я' },
    nameFirst: { en: 'Makhset', ru: 'Махсет' },
    nameLast: { en: 'Narbekov', ru: 'Нарбеков' },
    roleTitle: { en: 'Data Analyst / BI Analyst', ru: 'Data Analyst / BI-аналитик' },
    roleDivider: '|',
    roleStack: 'Power BI • SQL • Python',
    bio: {
      en: 'Practical data analysis and BI: advanced SQL (PostgreSQL, CTE, window functions), data cleaning & transformation in Python (Pandas), basic Excel, and interactive corporate dashboards in Power BI (star schemas, DAX, RLS).',
      ru: 'Практический анализ данных и BI: продвинутый SQL (PostgreSQL, CTE, оконные функции), очистка и подготовка данных на Python (Pandas), базовый Excel и интерактивные корпоративные дашборды в Power BI (звёздные схемы, DAX, RLS).',
    },
    location: { en: 'Tashkent / Remote', ru: 'Ташкент / Удалённо' },
    scrollDown: { en: 'Scroll down', ru: 'Листайте вниз' },
  },

  about: {
    number: '01',
    title: { en: 'About Me', ru: 'О себе' },
    p1: {
      en: 'Junior Data Analyst, graduate of the PROWEB Data Science program (Diploma with Honors, January 2026). I work with data across all stages of the analytical lifecycle: from extraction and preparation to exploratory analysis and visualization of insights. I use SQL for data exploration, Python for processing and transformation, and Power BI for designing analytical data models, building DAX measures, and creating interactive dashboards. My portfolio includes 5 business projects across Sales, Finance, HR, E-commerce, and SaaS.',
      ru: 'Junior Data Analyst, выпускник программы Data Science в PROWEB (диплом с отличием, январь 2026 года). Работаю с данными на разных этапах аналитического процесса: от извлечения и подготовки до исследования и визуализации результатов. Использую SQL для анализа данных, Python для их обработки и Power BI для построения аналитических моделей, разработки DAX-мер и интерактивных дашбордов. В портфолио - 5 проектов в направлениях Sales, Finance, HR, E-commerce и SaaS.',
    },
    p2: {
      en: 'In PostgreSQL projects, I leverage JOINs, CTEs, and window functions to merge complex tables, analyze data, calculate metrics, and uncover business trends. Using Python and Pandas, I inspect data quality, handle missing values and duplicates, and clean raw datasets for reliable downstream analysis.',
      ru: 'В проектах на PostgreSQL использую JOIN, CTE и оконные функции для объединения таблиц, исследования данных, расчёта показателей и выявления закономерностей. С помощью Python и Pandas анализирую структуру и качество исходных данных, работаю с пропусками и дубликатами, выполняю очистку и подготовку данных для дальнейшего анализа.',
    },
    downloadCv: { en: 'Download CV', ru: 'Скачать резюме' },
    cvUrl: { en: '/Текст/Resume_EN.md', ru: '/Текст/Resume.md' },
  },

  skills: {
    number: '02',
    title: { en: 'Skills', ru: 'Навыки' },
    allSkills: { en: 'All skills', ru: 'Все навыки' },
    cards: [
      {
        id: 'sql',
        title: { en: 'SQL (PostgreSQL)', ru: 'SQL (PostgreSQL)' },
        description: {
          en: 'JOIN, subqueries, GROUP BY with HAVING, CTEs (Common Table Expressions) and window functions (ROW_NUMBER, DENSE_RANK, LAG, SUM OVER). 3NF schema design.',
          ru: 'JOIN, подзапросы, группировки с HAVING, CTE (Common Table Expressions) и оконные функции (ROW_NUMBER, DENSE_RANK, LAG, SUM OVER). Проектирование 3NF-схем.',
        },
      },
      {
        id: 'python',
        title: { en: 'Python (Pandas)', ru: 'Python (Pandas)' },
        description: {
          en: 'End-to-end data cleaning and transformation (Pandas, NumPy): datetime parsing, deduplication, missing values and outlier handling. Understanding ETL and ELT.',
          ru: 'Сквозная очистка и трансформация данных (Pandas, NumPy): парсинг дат, удаление дубликатов, обработка пропусков и выбросов. Понимание ETL и ELT.',
        },
      },
      {
        id: 'powerbi',
        title: { en: 'Power BI (Specialization)', ru: 'Power BI (Специализация)' },
        description: {
          en: 'Star schema modeling, complex DAX measures, Power Query, RLS (Row-Level Security), What-If parameters, and intuitive multi-page UX. 5 enterprise dashboards.',
          ru: 'Звёздная схема, сложные DAX-меры, Power Query, RLS (разграничение прав), What-If параметры, продуманная навигация. 5 отраслевых дашбордов.',
        },
      },
      {
        id: 'excel',
        title: { en: 'Spreadsheets & Excel', ru: 'Таблицы и Excel' },
        description: {
          en: 'Working proficiency in Excel (pivot tables, essential business formulas, filtering, and data extraction formatting), Google Sheets.',
          ru: 'Excel на базовом уровне для работы (сводные таблицы, базовые формулы, фильтрация и подготовка выгрузок для аналитики), Google Sheets.',
        },
      },
      {
        id: 'ai',
        title: { en: 'AI Tools & Workflows', ru: 'ИИ-инструменты' },
        description: {
          en: 'AI coding agents (MCP, skills, AGENTS.md), local LLMs (Qwen, Ollama), OpenClaw, Antigravity, VS Code, Supabase, Vercel.',
          ru: 'ИИ-агенты (MCP, skills, AGENTS.md), локальные LLM (Qwen, Ollama), OpenClaw, Antigravity, VS Code, Supabase, Vercel.',
        },
      },
      {
        id: 'softskills',
        title: { en: 'Soft Skills', ru: 'Soft skills' },
        description: {
          en: 'Fast learner, highly adaptable, communicative, receptive to feedback. Comfortable with public speaking and presenting analytics to teams.',
          ru: 'Быстро обучаюсь, легко адаптируюсь, коммуникабелен, открыт к обратной связи. Не боюсь выступлений, есть опыт презентаций перед аудиторией.',
        },
      },
    ],
  },

  projects: {
    number: '03',
    title: { en: 'Projects', ru: 'Проекты' },
    subtitle: {
      en: 'Real-world cases showcasing my data analysis and visualization approach.',
      ru: 'Реальные кейсы, которые показывают мой подход к аналитике и визуализации данных.',
    },
    filterAll: { en: 'All', ru: 'Все' },
    viewProject: { en: 'View Project', ru: 'Посмотреть проект' },
    viewRepo: { en: 'GitHub Repository', ru: 'Репозиторий на GitHub' },
    moreOnGithub: { en: 'More projects on GitHub', ru: 'Больше проектов на GitHub' },
    goToGithub: { en: 'Open GitHub', ru: 'Перейти на GitHub' },
  },

  modal: {
    dashboardScreen: { en: 'Dashboard Screen', ru: 'Страница дашборда' },
    keyboardHint: { en: 'Navigate with keyboard arrow keys', ru: 'Листайте стрелками на клавиатуре' },
    fullscreen: { en: 'Fullscreen', ru: 'Во весь экран' },
    blockArchitecture: { en: '01 / Data Architecture', ru: '01 / Архитектура данных' },
    sourcesLabel: { en: 'Sources:', ru: 'Источники:' },
    modelLabel: { en: 'Model:', ru: 'Модель:' },
    blockFeatures: { en: '02 / Report Features', ru: '02 / Инструменты отчёта' },
    blockInsights: { en: '03 / Business Insights', ru: '03 / Результаты анализа' },
    technologies: { en: 'Technologies Used', ru: 'Использованные технологии' },
    sourceCode: { en: 'Source Code / Repository', ru: 'Исходный код / Репозиторий' },
    closeAria: { en: 'Close modal window', ru: 'Закрыть модальное окно' },
  },

  education: {
    number: '04',
    title: { en: 'Education', ru: 'Образование' },
    institution: 'PROWEB',
    degree: { en: 'Diploma with Honors • January 2026', ru: 'Диплом с отличием • Январь 2026' },
    narrative: {
      en: 'Successfully defended both graduation projects: YesCredit (credit risk scoring, FastAPI) and the Netflix catalog analytics dashboard in Power BI. Following the program, developed a comprehensive portfolio of practical projects: 5 enterprise dashboards in Power BI, a normalized relational database in PostgreSQL with 8 analytical queries, and a modular Python ETL data cleaning pipeline.',
      ru: 'Защитил обе дипломные работы: YesCredit (скоринг кредитоспособности, FastAPI) и дашборд по анализу данных Netflix. После завершения курса разработал серию практических проектов: 5 бизнес-дашбордов в Power BI, реляционную модель базы данных в PostgreSQL с 8 аналитическими запросами и модульный ETL-пайплайн очистки данных на Python.',
    },
  },

  extra: {
    number: '05',
    title: { en: 'Additional Info', ru: 'Дополнительно' },
    pill1: {
      en: 'Understanding of DWH architecture, Data Marts, Data Quality, and differences between OLTP and OLAP systems',
      ru: 'Понимаю архитектуру DWH (хранилища данных), витрины Data Mart, Data Quality, OLTP и OLAP',
    },
    pill2: {
      en: 'Based in Tashkent, open to remote or on-site roles, fast learner and adaptable',
      ru: 'Базируюсь в Ташкенте, готов к удалённой работе, в офисе и быстрому обучению',
    },
  },

  contactBanner: {
    title: { en: 'Let’s<br />Connect', ru: 'Давайте<br />свяжемся' },
    note: {
      en: 'Open to new analytical challenges, career opportunities, and collaboration.',
      ru: 'Буду рад обсудить новые возможности, проекты и сотрудничество.',
    },
    cta: { en: 'Message on Telegram', ru: 'Написать в Telegram' },
  },

  footer: {
    copyright: { en: '© 2026 Makhset Narbekov', ru: '© 2026 Махсет Нарбеков' },
    backToTop: { en: 'Back to top', ru: 'Наверх' },
  },

  toasts: {
    unconfirmedLink: {
      en: 'Sorry, this link is not confirmed yet',
      ru: 'Извините, пока что ссылка не подтверждена',
    },
  },
};
