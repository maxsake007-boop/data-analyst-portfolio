import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

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
  const [activeFilter, setActiveFilter] = useState<'Все' | 'Power BI' | 'Python' | 'SQL'>('Все');

  const filterTabs = ['Все', 'Power BI', 'Python', 'SQL'] as const;

  const projects: ProjectCardData[] = [
    {
      id: 'novabridge-sales',
      category: 'Power BI',
      tags: ['Power BI', 'DAX', 'Sales Analytics', 'B2B CRM'],
      title: 'NovaBridge Solutions — Sales Performance',
      description: 'B2B Sales аналитика: воронка сделок, drill-through по менеджерам, Decomposition Tree.',
      fullDescription: 'Корпоративный дашборд B2B-продаж на $58.8M. Включает воронку сделок (Pipeline & Funnel) с конверсией по этапам, фото-карточки менеджеров с drill-through на детальный профиль, Decomposition Tree для разбора выручки, карту регионов и Team Leaderboard. Звёздная схема, DAX-меры для YoY-сравнений и динамические заголовки.',
      architecture: {
        sources: 'Salesforce (сделки, аккаунты, стадии), PostgreSQL (активности по сделкам, календарь дат) и Google Sheets (команда менеджеров, регионы, плановые KPI).',
        model: 'Звёздная схема (Star Schema) с 2 таблицами фактов (сделки, активности) и 6 таблицами измерений. Выделенная таблица мер (Measures table) с DAX-расчётами динамики YoY, MTD, QTD и Pipeline Coverage.',
      },
      features: [
        'Интерактивный Drill-through: мгновенный переход с фото-карточек менеджеров на персональный аналитический профиль сотрудника.',
        'Decomposition Tree: многоуровневый факторный анализ отклонений выручки по регионам и продуктовым линейкам.',
        'Матрица эффективности (Scatter chart): сопоставление объёма активности и реального Win Rate для выявления скрытых неэффективностей.',
        'Навигация и визуализация: система закладок (Bookmarks), единая цветовая палитра и интеграция с картографией Azure Maps.',
      ],
      insights: [
        'Точка потерь в воронке: резкий обвал конверсии на этапе перехода Proposal (69.1%) → Negotiation (34.4%) — почти 50% сделок теряются перед финальным согласованием.',
        'Дисбаланс скидок: лидер продаж (James Mitchell, $10.39M) удерживает средний дисконт 8%, тогда как у отстающих менеджеров скидка достигает 26% без прироста конверсии.',
        'Региональный разрыв: макрорегион Mountain West лидирует по выручке с большим отрывом, в то время как West Coast демонстрирует устойчивое отставание от плана.',
      ],
      image: '/Скрины/Sales Perfomens/Welcome Page.png',
      linkText: 'Посмотреть проект',
      screens: [
        { title: 'Welcome Page', image: '/Скрины/Sales Perfomens/Welcome Page.png' },
        { title: 'Executive Overview', image: '/Скрины/Sales Perfomens/Executive Overview.png' },
        { title: 'Pipeline & Funnel', image: '/Скрины/Sales Perfomens/Pipeline & Funnel.png' },
        { title: 'Manager Detail (Drill-through)', image: '/Скрины/Sales Perfomens/Manager Detail (Dthrough).png' },
        { title: 'Regional Map', image: '/Скрины/Sales Perfomens/Regional Map.png' },
        { title: 'Team Leaderboard', image: '/Скрины/Sales Perfomens/Team Leaderboard.png' },
      ],
    },
    {
      id: 'kestrel-saas',
      category: 'Power BI',
      tags: ['Power BI', 'DAX', 'SaaS Analytics', 'ML Churn'],
      title: 'Kestrel Software — SaaS Analytics & Churn Intelligence',
      description: 'SaaS-аналитика с ML-прогнозом оттока клиентов, Customer 360° и когортным анализом.',
      fullDescription: 'Дашборд для SaaS-компании с полным циклом аналитики удержания клиентов. Страница Churn Intelligence интегрирует ML-модель прогноза оттока. Customer 360° предоставляет drill-through на профиль каждого клиента с историей покупок и health score. Customer Health отображает сегментацию по состоянию аккаунта. Использованы field parameters, bookmarks, forecast и anomaly detection.',
      architecture: {
        sources: 'Google BigQuery (ежемесячные биллинги MRR, справочники аккаунтов, даты) и PostgreSQL (продуктовые логи, ML-скоры вероятности оттока, тарифные планы, CSM-менеджеры).',
        model: 'Звёздная схема с 3 фактовыми таблицами (история MRR, продуктовые события, ML-прогнозы оттока) и 4 измерениями. Расчёт ключевых SaaS-метрик (ARR, MRR, Blended NRR, Gross Retention, Churn Rate).',
      },
      features: [
        'Визуализация ML-вывода: ранжирование клиентов по классам риска (Risk Tiers), вероятность оттока и автоматический вывод триггеров риска по каждому аккаунту.',
        'Customer 360° (Drill-through): сквозной переход со страниц оттока и здоровья клиентской базы в детализированное досье аккаунта с историей активности.',
        'Health Map (Scatter chart): многомерное сопоставление утилизации лицензий (Seat Utilization) и количества внешних интеграций с размером контракта (MRR).',
        'Waterfall-динамика: наглядное разложение изменений ежемесячной выручки по потокам New MRR / Expansion / Contraction / Churn.',
      ],
      insights: [
        'Разрыв по сегментам: показатель удержания выручки NRR у Mid Market составляет 99.5%, в то время как в сегменте SMB падает до 93.3% при критическом оттоке логотипов (Logo Churn 79.4%).',
        'Зона риска оттока: модель выделила 153 аккаунта в сегменте High Risk, создающих прямую угрозу потери регулярной выручки.',
        'Ключевой фактор ухода: у 44% проблемных клиентов (68 аккаунтов) главной причиной является низкая утилизация рабочих мест и отсутствие настроенных интеграций (в среднем 1.7 против 4.0 у стабильных клиентов).',
      ],
      image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Welcome Page.png',
      linkText: 'Посмотреть проект',
      screens: [
        { title: 'Welcome Page', image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Welcome Page.png' },
        { title: 'Executive Overview', image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Executive Overview.png' },
        { title: 'Customer Health', image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Customer Health.png' },
        { title: 'Customer 360° (Drill-through)', image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Customer 360° (Drill-through).png' },
        { title: 'Churn Intelligence (ML)', image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Churn Intelligence (ML).png' },
      ],
    },
    {
      id: 'crestforge-finance',
      category: 'Power BI',
      tags: ['Power BI', 'DAX', 'Corporate Finance', 'What-If'],
      title: 'CrestForge Industrial — Finance & Accounting',
      description: 'Финансовый дашборд: P&L, Cash Flow, Budget vs Actual и What-If сценарии.',
      fullDescription: 'Корпоративная финансовая отчётность для промышленной компании. P&L Detail детализирует доходы и расходы по статьям, Cash Flow отслеживает движение денежных средств, Budget vs Actual сравнивает план/факт. Ключевая фича — страница What-If Scenarios с параметрами для моделирования изменения выручки и затрат. Department Detail с drill-through по подразделениям.',
      architecture: {
        sources: 'Azure SQL (детализированные финансовые проводки и транзакции), корпоративный Excel (бюджетные планы) и SharePoint (справочники подразделений, номенклатуры и поставщиков).',
        model: 'Реляционная звёздная схема с 2 таблицами фактов (фактические проводки, плановый бюджет) и 5 таблицами измерений. Иерархии счетов P&L, расчёт Cash Flow косвенным методом.',
      },
      features: [
        'Интерактивное What-If моделирование: слайдеры сценарного анализа параметров (COGS Reduction, Revenue Growth, Overhead Reduction) с моментальным пересчётом чистой маржи на лету.',
        'Department Detail (Drill-through): контекстный переход из общей структуры P&L к детализации расходов конкретного департамента и контрагента.',
        'Waterfall P&L & Cash Flow: ступенчатая визуализация перехода от валовой выручки к Net Income и помесячного чистого денежного потока.',
        'Matrix с условным форматированием: тепловая карта отклонений Budget Variance % по статьям затрат и периодам.',
      ],
      insights: [
        'Источник перерасхода: единственным подразделением с систематическим превышением лимитов затрат оказался отдел производства (Production, Budget Variance +4.16%).',
        'Низкомаржинальный драйвер: крупнейшая по объёму продаж линейка Custom Fabrication ($24.85M) показала наименьшую рентабельность среди всей продукции компании.',
        'Эффект оптимизации: What-If сценарий показал, что снижение себестоимости сырья (COGS) всего на 5% увеличивает чистую маржу с 11% до 30%, высвобождая более $2.05M чистого денежного потока.',
      ],
      image: '/Скрины/Finance & Accounting/Welcome Page.png',
      linkText: 'Посмотреть проект',
      screens: [
        { title: 'Welcome Page', image: '/Скрины/Finance & Accounting/Welcome Page.png' },
        { title: 'Executive Overview', image: '/Скрины/Finance & Accounting/Executive Overciew.png' },
        { title: 'Budget vs Actual', image: '/Скрины/Finance & Accounting/Budget vs Actual.png' },
        { title: 'Cash Flow', image: '/Скрины/Finance & Accounting/Cash Flow.png' },
        { title: 'P&L Detail', image: '/Скрины/Finance & Accounting/P&L Detail.png' },
        { title: 'Department Detail (Drill-through)', image: '/Скрины/Finance & Accounting/Department Detail (Drill-through).png' },
        { title: 'What-If Scenarios', image: '/Скрины/Finance & Accounting/What-if Scenarios.png' },
      ],
    },
    {
      id: 'harlow-ecommerce',
      category: 'Power BI',
      tags: ['Power BI', 'DAX', 'E-commerce', 'RFM Analytics'],
      title: 'Harlow Home Co. — E-commerce & Retail',
      description: 'Retail-аналитика продаж: обзор продуктов, покупательское поведение, региональные продажи.',
      fullDescription: 'Дашборд электронной коммерции для мебельного ритейлера. Sales Overview отображает выручку, средний чек и маржу. Product Performance ранжирует товары по доходности. Customer Analysis сегментирует покупателей по RFM. Regional Sales визуализирует продажи на карте. Promotions & Discounts анализирует эффективность акций. Использованы waterfall chart, dynamic titles и условное форматирование.',
      architecture: {
        sources: 'Реляционные выгрузки заказов, CRM-данные (Pipedrive через REST API / веб-коннектор), логи возвратов и промоактивности из Google Sheets.',
        model: 'Звёздная схема: 2 таблицы фактов (продажи, возвраты) и 5 таблиц измерений (клиенты, товарный каталог, даты, рекламные каналы, скидки). Меры RFM-сегментации и когортного анализа.',
      },
      features: [
        'RFM-аналитика клиентской базы: распределение покупателей по давности, частоте и чеку для прицельного ретаргетинга.',
        'Анализ возвратов (Return Rate): матричное сопоставление причин отказов и категорий товаров с контролем логистических издержек.',
        'Waterfall маржинальности: разложение структуры цены с учётом себестоимости, затрат на доставку и применённых скидок.',
        'Географический кластеринг: интерактивная карта концентрации заказов с динамической фильтрацией по каналам трафика.',
      ],
      insights: [
        'Убыточный флагман: категория Lighting продемонстрировала высокую динамику продаж, но оказалась убыточной по валовой прибыли из-за высокой себестоимости и скидок.',
        'Критический процент возвратов: в категории Furniture доля возвратов составила 16.7% (против 3.5% у Textiles), формируя основные складские потери.',
        'Ценность постоянной базы: всего 9% постоянных покупателей принесли компании свыше $3.0M из общего оборота $4.4M, подтвердив приоритет удержания клиентов над разовым привлечением.',
      ],
      image: '/Скрины/E-commerce & Retail/Welcome Page.png',
      linkText: 'Посмотреть проект',
      screens: [
        { title: 'Welcome Page', image: '/Скрины/E-commerce & Retail/Welcome Page.png' },
        { title: 'Sales Overview', image: '/Скрины/E-commerce & Retail/Sales Overview.png' },
        { title: 'Customer Analysis', image: '/Скрины/E-commerce & Retail/Customer Analysis.png' },
        { title: 'Product Performance', image: '/Скрины/E-commerce & Retail/Product Performance.png' },
        { title: 'Regional Sales', image: '/Скрины/E-commerce & Retail/Regional Sales.png' },
        { title: 'Promotions & Discounts', image: '/Скрины/E-commerce & Retail/Promotions & Discounts.png' },
      ],
    },
    {
      id: 'veridian-hr',
      category: 'Power BI',
      tags: ['Power BI', 'DAX', 'People Analytics', 'HR Metrics'],
      title: 'Veridian Consulting — HR & People Analytics',
      description: 'HR-аналитика: текучесть кадров, найм, удержание и детализация по отделам.',
      fullDescription: 'Дашборд управления персоналом для консалтинговой компании. Workforce Overview показывает общую численность и структуру. Attrition & Turnover анализирует текучесть кадров по причинам и отделам. Recruitment & Retention отслеживает воронку найма и показатели удержания. Department Detail с drill-through по каждому подразделению. Использованы RLS для разграничения доступа по HR-менеджерам.',
      architecture: {
        sources: 'ATS-система рекрутинга HubSpot (отклики, воронка собеседований, офферы), корпоративный Excel (история увольнений, зарплатные грейды, ежемесячный headcount).',
        model: 'Звёздная схема: 3 таблицы фактов (помесячный учёт штата, найм, увольнения) и 5 таблиц измерений. Расчёт Time-to-Fill, Attrition Rate, Cost-per-Hire, eNPS и стажа (Tenure).',
      },
      features: [
        'Funnel рекрутинга: сквозной контроль конверсии этапов отбора кандидатов Applied → Screened → Interview → Offer → Hired.',
        'Small Multiples трендов: одновременный сравнительный анализ динамики текучести кадров по каждому департаменту компании.',
        'Field Parameters: динамическое переключение визуалов между метриками стоимости, скорости найма и конверсии в один клик.',
        'Department Detail (Drill-through): переход на глубокую аналитику конкретного подразделения с оценкой переработок и eNPS.',
      ],
      insights: [
        'Кризис онбординга: 33.6% всех увольнений (74 из 220) приходятся на специалистов со стажем менее 6 месяцев, что указывает на сбои в адаптации новичков.',
        'Доминирование Push-факторов: 52% сотрудников покинули компанию из-за внутренних факторов (отсутствие карьерного трека, стиль руководства, дисбаланс нагрузки).',
        'Зона перегрузки: в департаменте Delivery зафиксирована максимальная нагрузка (45 ч/неделю) и рекордная стоимость закрытия вакансии ($11K) при низкой удовлетворённости (3.7 из 10).',
      ],
      image: '/Скрины/HR & People Analytics/Welcome Page.png',
      linkText: 'Посмотреть проект',
      screens: [
        { title: 'Welcome Page', image: '/Скрины/HR & People Analytics/Welcome Page.png' },
        { title: 'Workforce Overview', image: '/Скрины/HR & People Analytics/Workforce Overview.png' },
        { title: 'Attrition & Turnover', image: '/Скрины/HR & People Analytics/Attrition & Turnover.png' },
        { title: 'Recruitment & Retention', image: '/Скрины/HR & People Analytics/Recruitment & Retention.png' },
        { title: 'Department Detail', image: '/Скрины/HR & People Analytics/Department Detail.png' },
      ],
    },
    {
      id: 'yescredit',
      category: 'Python',
      tags: ['Python', 'FastAPI', 'Machine Learning', 'scikit-learn'],
      title: 'YesCredit — Кредитный скоринг & ML-сервис',
      description: 'FastAPI-приложение для оценки кредитного риска с ML-моделью. Дипломный проект PROWEB.',
      fullDescription: 'Дипломный проект курса Data Science в PROWEB, защищён с отличием. Веб-приложение на FastAPI принимает данные о заёмщике и возвращает оценку кредитоспособности на основе обученной модели scikit-learn. Включает калькулятор риска с визуальным результатом (одобрено/отказ), страницы About и Contacts. Демонстрирует интеграцию ML-модели в продуктовый Python-бэкенд.',
      architecture: {
        sources: 'Выборка кредитных заявок с Kaggle: финансовые метрики заявителей (доход, кредитный рейтинг CIBIL, объём займа, баланс активов, статус занятости и образования).',
        model: 'Предобработка признаков через pandas/numpy, нормализация числовых шкал, кодирование категориальных параметров (LabelEncoder), разделение выборки на Train/Test (80/20).',
      },
      features: [
        'Сравнение ML-моделей: сопоставление точности классификации Logistic Regression (Accuracy 0.90) и Random Forest Classifier (Accuracy 0.98, ROC-AUC 0.99).',
        'FastAPI Backend: асинхронный REST API микросервис для приёма данных скоринга в формате JSON и возврата вероятности одобрения займа в реальном времени.',
        'Интерактивный UI: веб-интерфейс калькулятора риска с валидацией полей, микроанимациями и отображением статуса решения.',
      ],
      insights: [
        'Точность прогноза: ансамблевая модель Random Forest превзошла базовую регрессию на 8 процентных пунктов по Accuracy на валидационной выборке.',
        'Ключевые предикторы риска: наибольший вес в принятии решения алгоритмом имеют кредитный рейтинг CIBIL и соотношение суммы займа к стоимости обеспечения (Loan-to-Asset Ratio).',
        'Скорость инференса: время расчёта вероятности и генерации скорингового ответа сервером составило менее 45 мс на запрос.',
      ],
      image: '/Скрины/Yes Credit FAst API/hero sectio n.png',
      linkText: 'Посмотреть проект',
      screens: [
        { title: 'Hero / Главный экран', image: '/Скрины/Yes Credit FAst API/hero sectio n.png' },
        { title: 'О нас', image: '/Скрины/Yes Credit FAst API/abour us.png' },
        { title: 'Калькулятор — Get Started', image: '/Скрины/Yes Credit FAst API/get started.png' },
        { title: 'Результат: Одобрено', image: '/Скрины/Yes Credit FAst API/good result.png' },
        { title: 'Результат: Отказ', image: '/Скрины/Yes Credit FAst API/bad result.png' },
        { title: 'Контакты', image: '/Скрины/Yes Credit FAst API/Contacts.png' },
      ],
    },
    {
      id: 'dbeaver-sql',
      category: 'SQL',
      tags: ['SQL', 'PostgreSQL', 'DBeaver', 'Query Optimization'],
      title: 'SQL-аналитика в DBeaver & PostgreSQL',
      description: 'Практические SQL-запросы: CTE, оконные функции, хранимые процедуры и анализ данных.',
      fullDescription: 'Набор SQL-запросов и аналитических сценариев в DBeaver на базе PostgreSQL. Включает Common Table Expressions (CTE) для сложных иерархических запросов, оконные функции для ранжирования и скользящих метрик, хранимые процедуры, а также анализ проблемных продуктов. Практика работы с реальной базой данных через профессиональный инструмент.',
      architecture: {
        sources: 'Транзакционная база данных PostgreSQL (таблицы заказов, номенклатуры, складских запасов, контрагентов и клиентских транзакций).',
        model: 'Проектирование многоуровневых Common Table Expressions (CTE), временных аналитических представлений и нормализованных схем.',
      },
      features: [
        'Оконные функции: расчёт кумулятивных итогов (SUM() OVER), скользящих средних, ранжирования продаж (DENSE_RANK(), ROW_NUMBER()) и смещений по периодам (LAG / LEAD).',
        'Хранимые процедуры & функции: автоматизация регламентных расчётов и процедур валидации целостности данных.',
        'Оптимизация производительности: профилирование запросов через EXPLAIN ANALYZE, построение b-tree индексов и исключение полных сканирований таблиц (Seq Scan).',
      ],
      insights: [
        'Выявление проблемных позиций: когортный анализ выявил 14 категорий товаров с критическим сроком оборачиваемости и затовариванием складов.',
        'Локализация финансовых разрывов: алгоритм поиска дубликатов и расхождений в платежах позволил обнаружить скрытые кассовые разрывы в транзакциях контрагентов.',
        'Ускорение аналитических выборок: переработка вложенных подзапросов в CTE и добавление композитных индексов сократили время выполнения тяжёлых отчётов более чем в 4 раза.',
      ],
      image: '/Скрины/DBever/Снимок экрана 2026-03-12 124120.png',
      linkText: 'Посмотреть проект',
      screens: [
        { title: 'Обзор базы данных', image: '/Скрины/DBever/Снимок экрана 2026-03-12 124120.png' },
        { title: 'CTE запросы', image: '/Скрины/DBever/CTE .png' },
        { title: 'Оконные функции', image: '/Скрины/DBever/Window Function .png' },
        { title: 'Хранимые процедуры', image: '/Скрины/DBever/Stored Procedure .png' },
        { title: 'Проблемные продукты', image: '/Скрины/DBever/Problematic products.png' },
        { title: 'Анализ 1', image: '/Скрины/DBever/Снимок экрана 2026-03-12 124913.png' },
        { title: 'Анализ 2', image: '/Скрины/DBever/Снимок экрана 2026-03-12 125436.png' },
        { title: 'Анализ 3', image: '/Скрины/DBever/Снимок экрана 2026-03-12 125547.png' },
      ],
    },
  ];

  const filteredProjects = activeFilter === 'Все'
    ? projects
    : projects.filter((p) => p.category === activeFilter || p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 px-8 sm:px-12 lg:px-16 w-full max-w-[1560px] mx-auto select-none border-t border-zinc-200/60 scroll-mt-24">
      
      {/* 03 Section Header */}
      <RevealOnScroll direction="up" delay={50}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono font-medium text-zinc-400 mb-1 block">03</span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                Проекты
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 font-normal">
                Реальные кейсы, которые показывают мой подход к аналитике и визуализации данных.
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-xs'
                      : 'bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200/80'
                  }`}
                >
                  {tab}
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
                    <span>{project.linkText}</span>
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
              Больше проектов на GitHub
            </div>

            <button
              type="button"
              onClick={onUnconfirmedLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold shadow-sm hover:scale-[1.04] active:scale-95 transition-all duration-200 hover:shadow-md cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>Перейти на GitHub</span>
            </button>

          </div>
        </RevealOnScroll>

      </div>

    </section>
  );
};
