import { Language } from '../context/LanguageContext';
import { ProjectCardData } from '../components/ProjectsGrid';

export interface LocalizedProjectScreen {
  title: { en: string; ru: string };
  image: string;
}

export interface LocalizedProject {
  id: string;
  category: 'Power BI' | 'Looker Studio' | 'Python' | 'SQL';
  tags: string[];
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  fullDescription: { en: string; ru: string };
  image: string;
  linkText?: { en: string; ru: string };
  githubUrl?: string;
  screens: LocalizedProjectScreen[];
  architecture?: {
    sources: { en: string; ru: string };
    model: { en: string; ru: string };
  };
  features?: { en: string; ru: string }[];
  insights?: { en: string; ru: string }[];
}

export const BILINGUAL_PROJECTS: LocalizedProject[] = [
  // 1. NovaBridge Solutions
  {
    id: 'novabridge-sales',
    category: 'Power BI',
    tags: ['Power BI', 'DAX', 'Sales Analytics', 'B2B CRM'],
    title: {
      en: 'NovaBridge Solutions - Sales Performance',
      ru: 'NovaBridge Solutions - Sales Performance',
    },
    description: {
      en: 'B2B Sales analytics: pipeline funnel, manager drill-through, and Decomposition Tree.',
      ru: 'B2B Sales аналитика: воронка сделок, drill-through по менеджерам, Decomposition Tree.',
    },
    fullDescription: {
      en: 'Corporate B2B sales dashboard for a $58.8M portfolio. Features a Pipeline & Funnel stage-conversion view, manager photo cards with drill-through to individual profiles, a Decomposition Tree for revenue breakdown, regional mapping, and a Team Leaderboard. Built with a star schema, dynamic headers, and DAX YoY time-intelligence measures.',
      ru: 'Корпоративный дашборд B2B-продаж на $58.8M. Включает воронку сделок (Pipeline & Funnel) с конверсией по этапам, фото-карточки менеджеров с drill-through на детальный профиль, Decomposition Tree для разбора выручки, карту регионов и Team Leaderboard. Звёздная схема, DAX-меры для YoY-сравнений и динамические заголовки.',
    },
    architecture: {
      sources: {
        en: 'Salesforce (deals, accounts, stages), PostgreSQL (deal activity logs, calendar), and Google Sheets (sales team, target KPIs).',
        ru: 'Salesforce (сделки, аккаунты, стадии), PostgreSQL (активности по сделкам, календарь дат) и Google Sheets (команда менеджеров, регионы, плановые KPI).',
      },
      model: {
        en: 'Star Schema with 2 fact tables (deals, activities) and 6 dimension tables. Dedicated Measures table with DAX calculations for YoY, MTD, QTD, and Pipeline Coverage.',
        ru: 'Звёздная схема (Star Schema) с 2 таблицами фактов (сделки, активности) и 6 таблицами измерений. Выделенная таблица мер (Measures table) с DAX-расчётами динамики YoY, MTD, QTD и Pipeline Coverage.',
      },
    },
    features: [
      {
        en: 'Interactive Drill-through: Instant navigation from manager photo cards to deep-dive personal analytical profiles.',
        ru: 'Интерактивный Drill-through: мгновенный переход с фото-карточек менеджеров на персональный аналитический профиль сотрудника.',
      },
      {
        en: 'Decomposition Tree: Multi-level root-cause analysis of revenue variance by region and product line.',
        ru: 'Decomposition Tree: многоуровневый факторный анализ отклонений выручки по регионам и продуктовым линейкам.',
      },
      {
        en: 'Efficiency Matrix (Scatter chart): Activity volume vs. actual Win Rate to uncover hidden pipeline bottlenecks.',
        ru: 'Матрица эффективности (Scatter chart): сопоставление объёма активности и реального Win Rate для выявления скрытых неэффективностей.',
      },
      {
        en: 'Navigation & UX: Bookmark-based state switching, unified color scheme, and Azure Maps geospatial integration.',
        ru: 'Навигация и визуализация: система закладок (Bookmarks), единая цветовая палитра и интеграция с картографией Azure Maps.',
      },
    ],
    insights: [
      {
        en: 'Pipeline drop-off: Sharp conversion collapse from Proposal (69.1%) to Negotiation (34.4%) - nearly 50% of qualified deals stall before final agreement.',
        ru: 'Точка потерь в воронке: резкий обвал конверсии на этапе перехода Proposal (69.1%) → Negotiation (34.4%) - почти 50% сделок теряются перед финальным согласованием.',
      },
      {
        en: 'Discount imbalance: Top sales performer (James Mitchell, $10.39M) averaged an 8% discount, while underperformers offered up to 26% discounts with no conversion gain.',
        ru: 'Дисбаланс скидок: лидер продаж (James Mitchell, $10.39M) удерживает средний дисконт 8%, тогда как у отстающих менеджеров скидка достигает 26% без прироста конверсии.',
      },
      {
        en: 'Regional disparity: Mountain West macro-region leads revenue by a wide margin, whereas West Coast consistently lags behind targets.',
        ru: 'Региональный разрыв: макрорегион Mountain West лидирует по выручке с большим отрывом, в то время как West Coast демонстрирует устойчивое отставание от плана.',
      },
    ],
    image: '/Скрины/Sales Perfomens/Welcome Page.png',
    linkText: {
      en: 'View Project',
      ru: 'Посмотреть проект',
    },
    screens: [
      { title: { en: 'Welcome Page', ru: 'Welcome Page' }, image: '/Скрины/Sales Perfomens/Welcome Page.png' },
      { title: { en: 'Executive Overview', ru: 'Executive Overview' }, image: '/Скрины/Sales Perfomens/Executive Overview.png' },
      { title: { en: 'Pipeline & Funnel', ru: 'Pipeline & Funnel' }, image: '/Скрины/Sales Perfomens/Pipeline & Funnel.png' },
      { title: { en: 'Manager Detail (Drill-through)', ru: 'Manager Detail (Drill-through)' }, image: '/Скрины/Sales Perfomens/Manager Detail (Dthrough).png' },
      { title: { en: 'Regional Map', ru: 'Regional Map' }, image: '/Скрины/Sales Perfomens/Regional Map.png' },
      { title: { en: 'Team Leaderboard', ru: 'Team Leaderboard' }, image: '/Скрины/Sales Perfomens/Team Leaderboard.png' },
    ],
  },

  // 2. Kestrel Software
  {
    id: 'kestrel-saas',
    category: 'Power BI',
    tags: ['Power BI', 'DAX', 'SaaS Analytics', 'ML Churn'],
    title: {
      en: 'Kestrel Software - SaaS Analytics & Churn Intelligence',
      ru: 'Kestrel Software - SaaS Analytics & Churn Intelligence',
    },
    description: {
      en: 'SaaS metrics with ML churn prediction, Customer 360°, and retention cohort analysis.',
      ru: 'SaaS-аналитика с ML-прогнозом оттока клиентов, Customer 360° и когортным анализом.',
    },
    fullDescription: {
      en: 'End-to-end customer retention dashboard for a subscription SaaS product. Churn Intelligence integrates ML-based churn predictions. Customer 360° provides drill-through into each account with subscription history and health scores. Customer Health segments accounts by risk tier. Leverages field parameters, bookmarks, and automated forecast/anomaly detection.',
      ru: 'Дашборд для SaaS-компании с полным циклом аналитики удержания клиентов. Страница Churn Intelligence интегрирует ML-модель прогноза оттока. Customer 360° предоставляет drill-through на профиль каждого клиента с историей покупок и health score. Customer Health отображает сегментацию по состоянию аккаунта. Использованы field parameters, bookmarks, forecast и anomaly detection.',
    },
    architecture: {
      sources: {
        en: 'Google BigQuery (monthly billing MRR, account masters, calendar) and PostgreSQL (product usage logs, ML churn probabilities, subscription tiers, CSM managers).',
        ru: 'Google BigQuery (ежемесячные биллинги MRR, справочники аккаунтов, даты) и PostgreSQL (продуктовые логи, ML-скоры вероятности оттока, тарифные планы, CSM-менеджеры).',
      },
      model: {
        en: 'Star schema with 3 fact tables (MRR history, product events, ML churn scores) and 4 dimensions. Key metrics calculated: ARR, MRR, Blended NRR, Gross Retention, and Churn Rate.',
        ru: 'Звёздная схема с 3 фактовыми таблицами (история MRR, продуктовые события, ML-прогнозы оттока) и 4 измерениями. Расчёт ключевых SaaS-метрик (ARR, MRR, Blended NRR, Gross Retention, Churn Rate).',
      },
    },
    features: [
      {
        en: 'ML Prediction Visualization: Account segmentation by Risk Tiers with automated risk triggers and churn probability distribution.',
        ru: 'Визуализация ML-вывода: ранжирование клиентов по классам риска (Risk Tiers), вероятность оттока и автоматический вывод триггеров риска по каждому аккаунту.',
      },
      {
        en: 'Customer 360° (Drill-through): Direct transition from churn dashboards into comprehensive client dossiers with historical telemetry.',
        ru: 'Customer 360° (Drill-through): сквозной переход со страниц оттока и здоровья клиентской базы в детализированное досье аккаунта с историей активности.',
      },
      {
        en: 'Health Map (Scatter chart): Multi-dimensional mapping of seat utilization and API integrations against recurring MRR.',
        ru: 'Health Map (Scatter chart): многомерное сопоставление утилизации лицензий (Seat Utilization) и количества внешних интеграций с размером контракта (MRR).',
      },
      {
        en: 'Waterfall Decomposition: Clear breakdown of monthly revenue changes into New MRR, Expansion, Contraction, and Churn.',
        ru: 'Waterfall-динамика: наглядное разложение изменений ежемесячной выручки по потокам New MRR / Expansion / Contraction / Churn.',
      },
    ],
    insights: [
      {
        en: 'Segment divergence: Mid-Market Net Revenue Retention (NRR) holds strong at 99.5%, while SMB drops to 93.3% accompanied by elevated Logo Churn (79.4%).',
        ru: 'Разрыв по сегментам: показатель удержания выручки NRR у Mid Market составляет 99.5%, в то время как в сегменте SMB падает до 93.3% при критическом оттоке логотипов (Logo Churn 79.4%).',
      },
      {
        en: 'Risk concentration: Model highlighted 153 accounts in the High-Risk tier representing immediate ARR churn vulnerability.',
        ru: 'Зона риска оттока: модель выделила 153 аккаунта в сегменте High Risk, создающих прямую угрозу потери регулярной выручки.',
      },
      {
        en: 'Root cause identified: For 44% of at-risk clients (68 accounts), primary driver is low seat utilization (<45%) and lack of configured integrations (1.7 vs. 4.0 for healthy clients).',
        ru: 'Ключевой фактор ухода: у 44% проблемных клиентов (68 аккаунтов) главной причиной является низкая утилизация рабочих мест и отсутствие настроенных интеграций (в среднем 1.7 против 4.0 у стабильных клиентов).',
      },
    ],
    image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Welcome Page.png',
    linkText: {
      en: 'View Project',
      ru: 'Посмотреть проект',
    },
    screens: [
      { title: { en: 'Welcome Page', ru: 'Welcome Page' }, image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Welcome Page.png' },
      { title: { en: 'Executive Overview', ru: 'Executive Overview' }, image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Executive Overview.png' },
      { title: { en: 'Customer Health', ru: 'Customer Health' }, image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Customer Health.png' },
      { title: { en: 'Customer 360° (Drill-through)', ru: 'Customer 360° (Drill-through)' }, image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Customer 360° (Drill-through).png' },
      { title: { en: 'Churn Intelligence (ML)', ru: 'Churn Intelligence (ML)' }, image: '/Скрины/SaaS Dashboard & Customer Retention Intelligence/Churn Intelligence (ML).png' },
    ],
  },

  // 3. CrestForge Industrial
  {
    id: 'crestforge-finance',
    category: 'Power BI',
    tags: ['Power BI', 'DAX', 'Corporate Finance', 'What-If'],
    title: {
      en: 'CrestForge Industrial - Finance & Accounting',
      ru: 'CrestForge Industrial - Finance & Accounting',
    },
    description: {
      en: 'Financial reporting dashboard: P&L Statement, Cash Flow, Budget vs Actual, and What-If scenarios.',
      ru: 'Финансовый дашборд: P&L, Cash Flow, Budget vs Actual и What-If сценарии.',
    },
    fullDescription: {
      en: 'Corporate financial intelligence dashboard for an industrial enterprise. Features P&L Detail by account hierarchy, indirect Cash Flow tracking, and Budget vs Actual variance analysis. Highlighted by interactive What-If Scenarios to simulate COGS and price variations, plus Department Detail with cost center drill-through.',
      ru: 'Корпоративная финансовая отчётность для промышленной компании. P&L Detail детализирует доходы и расходы по статьям, Cash Flow отслеживает движение денежных средств, Budget vs Actual сравнивает план/факт. Ключевая фича - страница What-If Scenarios с параметрами для моделирования изменения выручки и затрат. Department Detail с drill-through по подразделениям.',
    },
    architecture: {
      sources: {
        en: 'Azure SQL (general ledger journal entries and transactions), enterprise Excel (budget forecasts), and SharePoint (cost centers and vendor masters).',
        ru: 'Azure SQL (детализированные финансовые проводки и транзакции), корпоративный Excel (бюджетные планы) и SharePoint (справочники подразделений, номенклатуры и поставщиков).',
      },
      model: {
        en: 'Star schema with 2 fact tables (actual ledger entries, budget targets) and 5 dimension tables. P&L account hierarchies and indirect method Cash Flow calculations.',
        ru: 'Реляционная звёздная схема с 2 таблицами фактов (фактические проводки, плановый бюджет) и 5 таблицами измерений. Иерархии счетов P&L, расчёт Cash Flow косвенным методом.',
      },
    },
    features: [
      {
        en: 'Interactive What-If Modeling: Dynamic parameter sliders (COGS Reduction, Revenue Growth, Overhead Reduction) with real-time recalculation of net margins.',
        ru: 'Интерактивное What-If моделирование: слайдеры сценарного анализа параметров (COGS Reduction, Revenue Growth, Overhead Reduction) с моментальным пересчётом чистой маржи на лету.',
      },
      {
        en: 'Department Detail (Drill-through): Contextual jump from high-level P&L into granular departmental expenditure breakdowns.',
        ru: 'Department Detail (Drill-through): контекстный переход из общей структуры P&L к детализации расходов конкретного департамента и контрагента.',
      },
      {
        en: 'Waterfall P&L & Cash Flow: Step-by-step bridge from Gross Revenue to Net Income and monthly operational cash flows.',
        ru: 'Waterfall P&L & Cash Flow: ступенчатая визуализация перехода от валовой выручки к Net Income и помесячного чистого денежного потока.',
      },
      {
        en: 'Matrix Heatmaps: Conditional color grading of Budget Variance % across expense categories and quarters.',
        ru: 'Matrix с условным форматированием: тепловая карта отклонений Budget Variance % по статьям затрат и периодам.',
      },
    ],
    insights: [
      {
        en: 'Overspend source: Production division was the sole cost center with systematic budget overrun (+4.16% variance).',
        ru: 'Источник перерасхода: единственным подразделением с систематическим превышением лимитов затрат оказался отдел производства (Production, Budget Variance +4.16%).',
      },
      {
        en: 'Low-margin driver: Largest revenue category Custom Fabrication ($24.85M) generated the lowest gross margin across all product lines.',
        ru: 'Низкомаржинальный драйвер: крупнейшая по объёму продаж линейка Custom Fabrication ($24.85M) показала наименьшую рентабельность среди всей продукции компании.',
      },
      {
        en: 'Optimization impact: What-If simulation demonstrated that a 5% COGS reduction increases net margin from 11% to 30%, freeing up over $2.05M in operating cash flow.',
        ru: 'Эффект оптимизации: What-If сценарий показал, что снижение себестоимости сырья (COGS) всего на 5% увеличивает чистую маржу с 11% до 30%, высвобождая более $2.05M чистого денежного потока.',
      },
    ],
    image: '/Скрины/Finance & Accounting/Welcome Page.png',
    linkText: {
      en: 'View Project',
      ru: 'Посмотреть проект',
    },
    screens: [
      { title: { en: 'Welcome Page', ru: 'Welcome Page' }, image: '/Скрины/Finance & Accounting/Welcome Page.png' },
      { title: { en: 'Executive Overview', ru: 'Executive Overview' }, image: '/Скрины/Finance & Accounting/Executive Overciew.png' },
      { title: { en: 'Budget vs Actual', ru: 'Budget vs Actual' }, image: '/Скрины/Finance & Accounting/Budget vs Actual.png' },
      { title: { en: 'Cash Flow', ru: 'Cash Flow' }, image: '/Скрины/Finance & Accounting/Cash Flow.png' },
      { title: { en: 'P&L Detail', ru: 'P&L Detail' }, image: '/Скрины/Finance & Accounting/P&L Detail.png' },
      { title: { en: 'Department Detail (Drill-through)', ru: 'Department Detail (Drill-through)' }, image: '/Скрины/Finance & Accounting/Department Detail (Drill-through).png' },
      { title: { en: 'What-If Scenarios', ru: 'What-If Scenarios' }, image: '/Скрины/Finance & Accounting/What-if Scenarios.png' },
    ],
  },

  // 4. Harlow Home Co.
  {
    id: 'harlow-ecommerce',
    category: 'Power BI',
    tags: ['Power BI', 'DAX', 'E-commerce', 'RFM Analytics'],
    title: {
      en: 'Harlow Home Co. - E-commerce & Retail',
      ru: 'Harlow Home Co. - E-commerce & Retail',
    },
    description: {
      en: 'Retail sales analytics: product matrix performance, consumer behavior, and regional distribution.',
      ru: 'Retail-аналитика продаж: обзор продуктов, покупательское поведение, региональные продажи.',
    },
    fullDescription: {
      en: 'Omnichannel e-commerce dashboard for a home goods retailer. Sales Overview monitors GMV, AOV, and margin. Product Performance ranks SKUs by contribution. Customer Analysis segments shoppers via RFM cohorts. Regional Sales visualizes geographic concentration. Promotions & Discounts evaluates campaign ROI. Features waterfall margin charts and dynamic titles.',
      ru: 'Дашборд электронной коммерции для мебельного ритейлера. Sales Overview отображает выручку, средний чек и маржу. Product Performance ранжирует товары по доходности. Customer Analysis сегментирует покупателей по RFM. Regional Sales визуализирует продажи на карте. Promotions & Discounts анализирует эффективность акций. Использованы waterfall chart, dynamic titles и условное форматирование.',
    },
    architecture: {
      sources: {
        en: 'Relational database order exports, CRM data (Pipedrive via REST API / web connector), returns logs and promotion tables from Google Sheets.',
        ru: 'Реляционные выгрузки заказов, CRM-данные (Pipedrive через REST API / веб-коннектор), логи возвратов и промоактивности из Google Sheets.',
      },
      model: {
        en: 'Star schema: 2 fact tables (sales, returns) and 5 dimension tables (customers, products, calendar, marketing channels, promotions). Custom DAX for RFM scores and cohort retention.',
        ru: 'Звёздная схема: 2 таблицы фактов (продажи, возвраты) и 5 таблиц измерений (клиенты, товарный каталог, даты, рекламные каналы, скидки). Меры RFM-сегментации и когортного анализа.',
      },
    },
    features: [
      {
        en: 'RFM Customer Segmentation: Classification by Recency, Frequency, and Monetary value for targeted re-engagement campaigns.',
        ru: 'RFM-аналитика клиентской базы: распределение покупателей по давности, частоте и чеку для прицельного ретаргетинга.',
      },
      {
        en: 'Return Rate Analysis: Cross-tabulation of return reasons vs. product categories with freight loss tracking.',
        ru: 'Анализ возвратов (Return Rate): матричное сопоставление причин отказов и категорий товаров с контролем логистических издержек.',
      },
      {
        en: 'Margin Waterfall: Deconstruction of gross revenue down to net contribution after COGS, shipping, and promotional discounts.',
        ru: 'Waterfall маржинальности: разложение структуры цены с учётом себестоимости, затрат на доставку и применённых скидок.',
      },
      {
        en: 'Geospatial Clustering: Interactive order density heatmaps with dynamic attribution by acquisition channel.',
        ru: 'Географический кластеринг: интерактивная карта концентрации заказов с динамической фильтрацией по каналам трафика.',
      },
    ],
    insights: [
      {
        en: 'Unprofitable bestseller: Lighting category exhibited strong top-line sales but posted negative net profit due to high product return rates and excessive discounting.',
        ru: 'Убыточный флагман: категория Lighting продемонстрировала высокую динамику продаж, но оказалась убыточной по валовой прибыли из-за высокой себестоимости и скидок.',
      },
      {
        en: 'Critical return rate: Furniture return rate peaked at 16.7% (compared to 3.5% in Textiles), generating the majority of warehouse fulfillment losses.',
        ru: 'Критический процент возвратов: в категории Furniture доля возвратов составила 16.7% (против 3.5% у Textiles), формируя основные складские потери.',
      },
      {
        en: 'Repeat customer value: Top 9% of loyal customer accounts generated over $3.0M out of $4.4M total GMV, confirming retention as the top ROI driver.',
        ru: 'Ценность постоянной базы: всего 9% постоянных покупателей принесли компании свыше $3.0M из общего оборота $4.4M, подтвердив приоритет удержания клиентов над разовым привлечением.',
      },
    ],
    image: '/Скрины/E-commerce & Retail/Welcome Page.png',
    linkText: {
      en: 'View Project',
      ru: 'Посмотреть проект',
    },
    screens: [
      { title: { en: 'Welcome Page', ru: 'Welcome Page' }, image: '/Скрины/E-commerce & Retail/Welcome Page.png' },
      { title: { en: 'Sales Overview', ru: 'Sales Overview' }, image: '/Скрины/E-commerce & Retail/Sales Overview.png' },
      { title: { en: 'Customer Analysis', ru: 'Customer Analysis' }, image: '/Скрины/E-commerce & Retail/Customer Analysis.png' },
      { title: { en: 'Product Performance', ru: 'Product Performance' }, image: '/Скрины/E-commerce & Retail/Product Performance.png' },
      { title: { en: 'Regional Sales', ru: 'Regional Sales' }, image: '/Скрины/E-commerce & Retail/Regional Sales.png' },
      { title: { en: 'Promotions & Discounts', ru: 'Promotions & Discounts' }, image: '/Скрины/E-commerce & Retail/Promotions & Discounts.png' },
    ],
  },

  // 5. Veridian Consulting Group
  {
    id: 'veridian-hr',
    category: 'Power BI',
    tags: ['Power BI', 'DAX', 'People Analytics', 'HR Metrics'],
    title: {
      en: 'Veridian Consulting - HR & People Analytics',
      ru: 'Veridian Consulting - HR & People Analytics',
    },
    description: {
      en: 'HR analytics: workforce attrition, recruitment pipeline, retention, and departmental drill-down.',
      ru: 'HR-аналитика: текучесть кадров, найм, удержание и детализация по отделам.',
    },
    fullDescription: {
      en: 'Workforce intelligence dashboard for an enterprise consulting firm. Workforce Overview monitors headcount and demographic structure. Attrition & Turnover analyzes voluntary vs. involuntary exits by reason and department. Recruitment & Retention tracks hiring funnel conversion and time-to-hire. Department Detail with granular drill-through and RLS security for HR managers.',
      ru: 'Дашборд управления персоналом для консалтинговой компании. Workforce Overview показывает общую численность и структуру. Attrition & Turnover анализирует текучесть кадров по причинам и отделам. Recruitment & Retention отслеживает воронку найма и показатели удержания. Department Detail с drill-through по каждому подразделению. Использованы RLS для разграничения доступа по HR-менеджерам.',
    },
    architecture: {
      sources: {
        en: 'HubSpot ATS recruiting system (applications, candidate stages, job offers), corporate Excel (exit interviews, salary grades, monthly headcount census).',
        ru: 'ATS-система рекрутинга HubSpot (отклики, воронка собеседований, офферы), корпоративный Excel (история увольнений, зарплатные грейды, ежемесячный headcount).',
      },
      model: {
        en: 'Star schema: 3 fact tables (monthly headcount snapshots, hires, exits) and 5 dimensions. Measures calculate Time-to-Fill, Attrition Rate, Cost-per-Hire, eNPS, and Tenure.',
        ru: 'Звёздная схема: 3 таблицы фактов (помесячный учёт штата, найм, увольнения) и 5 таблиц измерений. Расчёт Time-to-Fill, Attrition Rate, Cost-per-Hire, eNPS и стажа (Tenure).',
      },
    },
    features: [
      {
        en: 'Recruiting Funnel: End-to-end pipeline visibility across Applied → Screened → Interview → Offer → Hired.',
        ru: 'Funnel рекрутинга: сквозной контроль конверсии этапов отбора кандидатов Applied → Screened → Interview → Offer → Hired.',
      },
      {
        en: 'Small Multiples: Side-by-side trend analysis tracking voluntary turnover rates across all operational departments.',
        ru: 'Small Multiples трендов: одновременный сравнительный анализ динамики текучести кадров по каждому департаменту компании.',
      },
      {
        en: 'Field Parameters: Dynamic single-click visualization metric switching between cost, speed, and candidate pass-through rates.',
        ru: 'Field Parameters: динамическое переключение визуалов между метриками стоимости, скорости найма и конверсии в один клик.',
      },
      {
        en: 'Department Detail (Drill-through): In-depth departmental deep dive with overtime tracking, satisfaction scores, and eNPS.',
        ru: 'Department Detail (Drill-through): переход на глубокую аналитику конкретного подразделения с оценкой переработок и eNPS.',
      },
    ],
    insights: [
      {
        en: 'Onboarding vulnerability: 33.6% of all exits (74 out of 220) occurred within the first 6 months of employment, highlighting new-hire ramp issues.',
        ru: 'Кризис онбординга: 33.6% всех увольнений (74 из 220) приходятся на специалистов со стажем менее 6 месяцев, что указывает на сбои в адаптации новичков.',
      },
      {
        en: 'Push factors dominant: 52% of departures cited internal drivers (unclear career progression, management style, or workload imbalances).',
        ru: 'Доминирование Push-факторов: 52% сотрудников покинули компанию из-за внутренних факторов (отсутствие карьерного трека, стиль руководства, дисбаланс нагрузки).',
      },
      {
        en: 'Overload hotspot: Delivery department exhibited peak weekly overtime (45 hrs/week) and highest cost per hire ($11K) alongside lowest satisfaction (3.7/10).',
        ru: 'Зона перегрузки: в департаменте Delivery зафиксирована максимальная нагрузка (45 ч/неделю) и рекордная стоимость закрытия вакансии ($11K) при низкой удовлетворённости (3.7 из 10).',
      },
    ],
    image: '/Скрины/HR & People Analytics/Welcome Page.png',
    linkText: {
      en: 'View Project',
      ru: 'Посмотреть проект',
    },
    screens: [
      { title: { en: 'Welcome Page', ru: 'Welcome Page' }, image: '/Скрины/HR & People Analytics/Welcome Page.png' },
      { title: { en: 'Workforce Overview', ru: 'Workforce Overview' }, image: '/Скрины/HR & People Analytics/Workforce Overview.png' },
      { title: { en: 'Attrition & Turnover', ru: 'Attrition & Turnover' }, image: '/Скрины/HR & People Analytics/Attrition & Turnover.png' },
      { title: { en: 'Recruitment & Retention', ru: 'Recruitment & Retention' }, image: '/Скрины/HR & People Analytics/Recruitment & Retention.png' },
      { title: { en: 'Department Detail', ru: 'Department Detail' }, image: '/Скрины/HR & People Analytics/Department Detail.png' },
    ],
  },

  // 6. YesCredit
  {
    id: 'yescredit',
    category: 'Python',
    tags: ['Python', 'FastAPI', 'Machine Learning', 'scikit-learn'],
    title: {
      en: 'YesCredit - Credit Risk Scoring & ML Service',
      ru: 'YesCredit - Кредитный скоринг & ML-сервис',
    },
    description: {
      en: 'FastAPI credit risk assessment web service powered by scikit-learn ML. PROWEB Graduation Project.',
      ru: 'FastAPI-приложение для оценки кредитного риска с ML-моделью. Дипломный проект PROWEB.',
    },
    fullDescription: {
      en: 'PROWEB Data Science graduation project, defended with honors. A FastAPI web application that ingests applicant data and returns real-time creditworthiness predictions from a trained scikit-learn model. Features an interactive risk calculator with visual approval/rejection outcomes, About, and Contact pages, demonstrating end-to-end Python ML deployment.',
      ru: 'Дипломный проект курса Data Science в PROWEB, защищён с отличием. Веб-приложение на FastAPI принимает данные о заёмщике и возвращает оценку кредитоспособности на основе обученной модели scikit-learn. Включает калькулятор риска с визуальным результатом (одобрено/отказ), страницы About и Contacts. Демонстрирует интеграцию ML-модели в продуктовый Python-бэкенд.',
    },
    architecture: {
      sources: {
        en: 'Kaggle loan applications dataset: applicant financial features (income, CIBIL credit score, loan amount, asset values, employment status, education level).',
        ru: 'Выборка кредитных заявок с Kaggle: финансовые метрики заявителей (доход, кредитный рейтинг CIBIL, объём займа, баланс активов, статус занятости и образования).',
      },
      model: {
        en: 'Feature preprocessing via Pandas/NumPy, numeric feature scaling, categorical encoding (LabelEncoder), and 80/20 train/test split.',
        ru: 'Предобработка признаков через pandas/numpy, нормализация числовых шкал, кодирование категориальных параметров (LabelEncoder), разделение выборки на Train/Test (80/20).',
      },
    },
    features: [
      {
        en: 'Model Benchmarking: Comparison of Logistic Regression (0.90 Accuracy) against Random Forest Classifier (0.98 Accuracy, 0.99 ROC-AUC).',
        ru: 'Сравнение ML-моделей: сопоставление точности классификации Logistic Regression (Accuracy 0.90) и Random Forest Classifier (Accuracy 0.98, ROC-AUC 0.99).',
      },
      {
        en: 'FastAPI Backend: Asynchronous REST API microservice accepting JSON scoring payloads and returning real-time approval probabilities.',
        ru: 'FastAPI Backend: асинхронный REST API микросервис для приёма данных скоринга в формате JSON и возврата вероятности одобрения займа в реальном времени.',
      },
      {
        en: 'Interactive UI: Web-based loan calculator with form validation, micro-animations, and instant decision status badges.',
        ru: 'Интерактивный UI: веб-интерфейс калькулятора риска с валидацией полей, микроанимациями и отображением статуса решения.',
      },
    ],
    insights: [
      {
        en: 'Predictive accuracy: Random Forest ensemble outperformed baseline regression by 8 percentage points on out-of-sample validation data.',
        ru: 'Точность прогноза: ансамблевая модель Random Forest превзошла базовую регрессию на 8 процентных пунктов по Accuracy на валидационной выборке.',
      },
      {
        en: 'Key risk drivers: Feature importance analysis identified CIBIL credit score and Loan-to-Asset ratio as the strongest predictors of default.',
        ru: 'Ключевые предикторы риска: наибольший вес в принятии решения алгоритмом имеют кредитный рейтинг CIBIL и соотношение суммы займа к стоимости обеспечения (Loan-to-Asset Ratio).',
      },
      {
        en: 'Low inference latency: Server inference and scoring calculation executed in under 45ms per request.',
        ru: 'Скорость инференса: время расчёта вероятности и генерации скорингового ответа сервером составило менее 45 мс на запрос.',
      },
    ],
    image: '/Скрины/Yes Credit FAst API/hero sectio n.png',
    linkText: {
      en: 'View Project',
      ru: 'Посмотреть проект',
    },
    screens: [
      { title: { en: 'Hero / Main Screen', ru: 'Hero / Главный экран' }, image: '/Скрины/Yes Credit FAst API/hero sectio n.png' },
      { title: { en: 'About Us', ru: 'О нас' }, image: '/Скрины/Yes Credit FAst API/abour us.png' },
      { title: { en: 'Loan Calculator - Get Started', ru: 'Калькулятор - Get Started' }, image: '/Скрины/Yes Credit FAst API/get started.png' },
      { title: { en: 'Result: Approved', ru: 'Результат: Одобрено' }, image: '/Скрины/Yes Credit FAst API/good result.png' },
      { title: { en: 'Result: Rejected', ru: 'Результат: Отказ' }, image: '/Скрины/Yes Credit FAst API/bad result.png' },
      { title: { en: 'Contacts', ru: 'Контакты' }, image: '/Скрины/Yes Credit FAst API/Contacts.png' },
    ],
  },

  // 7. SQL Data Analysing Project
  {
    id: 'retail-sales-sql',
    category: 'SQL',
    tags: ['PostgreSQL', 'SQL', 'Data Integrity', 'Window Functions', 'pgAdmin 4'],
    title: {
      en: 'SQL Data Analysing Project',
      ru: 'SQL Data Analysing Project',
    },
    description: {
      en: 'Relational database in PostgreSQL: 3NF schema, data import, and 8 business queries (CTEs, Window Functions).',
      ru: 'Реляционная база данных в PostgreSQL: 3NF-схема, импорт данных и 8 бизнес-запросов (CTE, Window Functions).',
    },
    fullDescription: {
      en: 'Self-driven relational database engineering and analytics project in PostgreSQL. Built upon a 2023-2024 retail transaction dataset. Includes 3NF normalization (3,000 orders, 50 customers, 25 products), strict referential integrity (PK, FK, CHECK constraints), and 8 business SQL queries: from financial executive summaries and customer churn to advanced window functions (DENSE_RANK, running total SUM() OVER, and MoM growth rate via LAG).',
      ru: 'Самостоятельный аналитический проект по проектированию реляционной базы данных в PostgreSQL. В качестве демонстрационного массива взят транзакционный датасет розничных заказов за 2023-2024 гг. Включает 3NF-нормализацию (3 000 заказов, 50 клиентов, 25 продуктов), ссылочную целостность (PRIMARY KEY, FOREIGN KEY, CHECK (quantity > 0)), а также 8 аналитических SQL-запросов: от расчёта ключевых финансовых KPI и когортного оттока до оконных функций (DENSE_RANK, SUM() OVER для нарастающего итога и LAG для темпов роста месяц к месяцу).',
    },
    architecture: {
      sources: {
        en: 'Retail sales transaction dataset: 3,000 order records, 50 customers across 5 regions, and product catalog with 25 SKUs across 5 categories.',
        ru: 'Транзакционный датасет розничной торговли: выгрузка заказов (3 000 чеков), справочник клиентов (50 покупателей, 5 регионов) и каталог товаров (25 наименований, 5 категорий).',
      },
      model: {
        en: 'Normalized 3NF relational schema. Tables for customers, products, and orders with full relational integrity constraints (PK, FK, CHECK (quantity > 0)).',
        ru: 'Нормализованная реляционная модель данных (3NF). Таблицы customers, products и orders со строгой ссылочной целостностью (PK, FK, CHECK (quantity > 0)).',
      },
    },
    features: [
      {
        en: 'Multi-table JOINs: Aggregations for gross revenue and AOV by category and sales territory (North, South, East, West, Central).',
        ru: 'Многотабличные объединения (JOINs): расчёт финансовых метрик, выручки и среднего чека по категориям и регионам (North, South, East, West, Central).',
      },
      {
        en: 'Window Functions: Top-2 product ranking within each category via DENSE_RANK() OVER (PARTITION BY category).',
        ru: 'Оконные функции (Window Functions): ранжирование ТОП-2 продуктов внутри каждой категории через DENSE_RANK() OVER (PARTITION BY category).',
      },
      {
        en: 'Cumulative Analysis: Daily running totals of sales revenue using SUM() OVER (ORDER BY order_date).',
        ru: 'Кумулятивный анализ (Running Total): расчёт накопительного итога выручки день за днём с помощью SUM() OVER (ORDER BY order_date).',
      },
      {
        en: 'MoM Growth Analysis: Month-over-month revenue percentage variance using LAG() with Common Table Expressions (CTEs).',
        ru: 'Динамика Месяц-к-Месяцу (MoM Growth): анализ темпов прироста выручки с помощью LAG() и Common Table Expressions (CTE).',
      },
      {
        en: 'Retention & Churn Analysis: Identification of dormant customer accounts via LEFT JOIN and NULL filtering for re-engagement.',
        ru: 'Анализ оттока (Churn & Retention): выявление неактивных клиентов через LEFT JOIN и фильтрацию NULL для таргетированных промо-рассылок.',
      },
    ],
    insights: [
      {
        en: 'Total GMV: Store generated $5.44M in gross sales across 3,000 transactions with an average order value of $1,814.',
        ru: 'Общий оборот: суммарная выручка магазина за 2 года составила $5.44M при 3 000 транзакциях со средним чеком $1,814.',
      },
      {
        en: 'Top product categories: Electronics ($1.7M) and Furniture ($1.2M) accounted for over 53% of overall sales.',
        ru: 'Драйверы продаж: категории Electronics ($1.7M) и Furniture ($1.2M) сформировали свыше 53% совокупной выручки ритейлера.',
      },
      {
        en: 'VIP customer concentration: Top 5 repeat buyers contributed over $740K (13.6% of store revenue).',
        ru: 'VIP-клиенты: топ-5 постоянных покупателей принесли компании более $740K выручки (13.6% общего товарооборота).',
      },
      {
        en: 'Dormant accounts: Pinpointed customers with zero purchases in the recent cycle for automated promotional targeting.',
        ru: 'Отток базы: выявлены покупатели без единой покупки за последний период, сформирована база для реактивации.',
      },
    ],
    image: '/Скрины/SQL Project/01_financial_kpi.png',
    linkText: {
      en: 'GitHub Repository',
      ru: 'Репозиторий на GitHub',
    },
    githubUrl: 'https://github.com/maxsake007-boop/SQL-Projects',
    screens: [
      { title: { en: '01. Financial KPIs (Executive Summary)', ru: '01. Финансовые KPI (Executive Summary)' }, image: '/Скрины/SQL Project/01_financial_kpi.png' },
      { title: { en: '02. Category Analysis (GROUP BY + HAVING)', ru: '02. Анализ категорий (GROUP BY + HAVING)' }, image: '/Скрины/SQL Project/02_category_analysis.png' },
      { title: { en: '03. Regional Sales & AOV', ru: '03. География продаж и средний чек' }, image: '/Скрины/SQL Project/03_regional_sales.png' },
      { title: { en: '04. Inactive Customers (LEFT JOIN + NULL)', ru: '04. Неактивные клиенты (LEFT JOIN + NULL)' }, image: '/Скрины/SQL Project/04_inactive_customers.png' },
      { title: { en: '05. TOP-5 VIP Customers (CTE)', ru: '05. ТОП-5 VIP-клиентов (CTE)' }, image: '/Скрины/SQL Project/05_top5_vip_customers.png' },
      { title: { en: '06. TOP-2 Products by Category (DENSE_RANK)', ru: '06. ТОП-2 товара по категориям (DENSE_RANK)' }, image: '/Скрины/SQL Project/06_top2_products_per_category.png' },
      { title: { en: '07. Running Total Revenue (SUM OVER)', ru: '07. Нарастающий итог выручки (SUM OVER)' }, image: '/Скрины/SQL Project/07_cumulative_monthly_revenue.png' },
      { title: { en: '08. MoM Revenue Growth (LAG)', ru: '08. Динамика MoM прироста (LAG)' }, image: '/Скрины/SQL Project/08_monthly_revenue_growth_lag.png' },
    ],
  },

  // 8. Python Data Cleaning Project
  {
    id: 'retail-sales-python',
    category: 'Python',
    tags: ['Python', 'Pandas', 'ETL Pipeline', 'Data Quality', 'Data Cleaning'],
    title: {
      en: 'Python Data Cleaning Project',
      ru: 'Python Data Cleaning Project',
    },
    description: {
      en: 'Automated ETL pipeline processing 5,000 raw sales records: date parsing, deduplication, and quality audit.',
      ru: 'Автоматизированный ETL-пайплайн очистки 5 000 сырых транзакций: даты, дедупликация, аудит качества.',
    },
    fullDescription: {
      en: 'Self-contained ETL pipeline for raw transaction data cleaning before ingestion into relational databases or BI systems. Utilizes a 5,000-row retail transaction dataset. Executes full ETL workflow: parsing mixed-format dates, text standardization, anomaly and negative value filtering, duplicate removal, and strategic imputation.',
      ru: 'Самостоятельный ETL-проект первичной обработки и очистки сырых транзакционных данных перед загрузкой в реляционную базу данных или BI-систему. В качестве демонстрационного массива взят датасет розничных транзакций на 5 000 строк. Пайплайн выполняет полный цикл ETL: парсинг разнородных форматов дат (mixed dates), нормализацию текстовых полей, фильтрацию отрицательных значений и дубликатов, а также интеллектуальную обработку пропусков.',
    },
    architecture: {
      sources: {
        en: 'Raw 5,000-row transaction CSV file dirty_sales.csv with legacy CRM/ERP export flaws.',
        ru: 'Сырой CSV-файл транзакций dirty_sales.csv на 5 000 строк с дефектами выгрузки из учётных систем (CRM/ERP).',
      },
      model: {
        en: 'Modular linear ETL pipeline built with Pandas 2.0+ and Python 3.11 exporting clean, validated clean_sales.csv.',
        ru: 'Линейный модульный ETL-конвейер на Pandas 2.0+ и Python 3.11 с экспортом валидированного датасета clean_sales.csv.',
      },
    },
    features: [
      {
        en: 'Exploratory Data Analysis (EDA): Initial data audit of types, distributions, and anomalies via head(), info(), and describe().',
        ru: 'Исследовательский анализ (EDA): первичный аудит типов данных, распределений и аномалий через head(), info() и describe().',
      },
      {
        en: 'Date Standardization: Parsing irregular date formats and mixed strings into unified datetime64[ns].',
        ru: 'Унификация форматов дат: обработка шаблонов разной длины и форматов ввода (mixed format) в единый datetime64[ns].',
      },
      {
        en: 'Anomaly Filtering: Detecting and pruning rows with impossible negative quantities and pricing.',
        ru: 'Фильтрация аномалий: обнаружение и удаление строк с отрицательными ценами и объемами (quantity <= 0, unit_price <= 0).',
      },
      {
        en: 'Deduplication: Automated removal of duplicated orders while safeguarding unique transactions.',
        ru: 'Дедупликация: автоматическое удаление повторяющихся транзакционных записей без потери уникальных чеков.',
      },
      {
        en: 'Missing Value Strategy: Imputing missing territories with "Unknown" and dropping rows missing critical pricing.',
        ru: 'Стратегия работы с пропусками: сохранение фактов продаж с заполнением региона на "Unknown" и отсевом записей без цены.',
      },
      {
        en: 'Text Hygiene: Trimming whitespace and converting string fields into Title Case.',
        ru: 'Стандартизация текста: удаление паразитных пробелов и унификация регистра строк в Title Case.',
      },
    ],
    insights: [
      {
        en: 'Data cleansing: Identified and pruned 18 full duplicate rows and 30 unrecoverable rows missing unit price.',
        ru: 'Очистка от мусора: выявлено и устранено 18 полных дубликатов транзакций и 30 невалидных строк с отсутствующей ценой.',
      },
      {
        en: 'Anomaly resolution: Eliminated export errors featuring negative quantities (down to -16) and negative pricing (-$497).',
        ru: 'Ликвидация аномалий: отфильтрованы критические ошибки выгрузки с отрицательным количеством (до -16 шт) и ценой (-497$).',
      },
      {
        en: '100% DWH-ready: Final validated dataset contains 4,892 records with zero null values across all critical columns.',
        ru: '100% готовность к DWH: размер итогового датасета составил 4 892 строки с нулевыми пропусками (Zero Nulls) во всех ключевых полях.',
      },
    ],
    image: '/Скрины/Python Data Cleaning/1. Первый снимок.png',
    linkText: {
      en: 'GitHub Repository',
      ru: 'Репозиторий на GitHub',
    },
    githubUrl: 'https://github.com/maxsake007-boop/Python-data-cleaning-project',
    screens: [
      { title: { en: '01. Data Cleaning Script (Part 1)', ru: '01. Код очистки данных (Часть 1)' }, image: '/Скрины/Python Data Cleaning/1. Первый снимок.png' },
      { title: { en: '02. Data Cleaning Script (Part 2)', ru: '02. Код очистки данных (Часть 2)' }, image: '/Скрины/Python Data Cleaning/2. Второй снимок.png' },
    ],
  },
];

export function getLocalizedProjects(lang: Language): ProjectCardData[] {
  return BILINGUAL_PROJECTS.map((p) => ({
    id: p.id,
    category: p.category,
    tags: p.tags,
    title: p.title[lang],
    description: p.description[lang],
    fullDescription: p.fullDescription[lang],
    image: p.image,
    linkText: p.linkText ? p.linkText[lang] : (lang === 'en' ? 'View Project' : 'Посмотреть проект'),
    githubUrl: p.githubUrl,
    screens: p.screens.map((s) => ({
      title: s.title[lang],
      image: s.image,
    })),
    architecture: p.architecture
      ? {
          sources: p.architecture.sources[lang],
          model: p.architecture.model[lang],
        }
      : undefined,
    features: p.features ? p.features.map((f) => f[lang]) : undefined,
    insights: p.insights ? p.insights.map((i) => i[lang]) : undefined,
  }));
}
