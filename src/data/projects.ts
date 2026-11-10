export interface ProjectScreen {
  id: string;
  title: string;
  image: string;
  caption: string;
}

export interface SqlQueryItem {
  id: string;
  name: string;
  time: string;
  code: string;
  headers: string[];
  rows: string[][];
}

export interface ProjectItem {
  id: string;
  caseNumber: string;
  title: string;
  shortTitle: string;
  category: string;
  badge: string;
  metrics: { label: string; value: string }[];
  businessProblem: string;
  architectureNotes: string[];
  takeaway: string;
  stack: string[];
  screens: ProjectScreen[];
  isSqlProject?: boolean;
  sqlQueries?: SqlQueryItem[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  // 1. SALES
  {
    id: "sales",
    caseNumber: "01 / 07",
    title: "NovaBridge Solutions — B2B Sales Performance & Funnel Diagnostics",
    shortTitle: "B2B Sales Performance",
    category: "Power BI / DAX / Коммерческий сектор",
    badge: "B2B Sales",
    metrics: [
      { label: "Пайплайн продаж", value: "$58.8M" },
      { label: "Win Rate воронки", value: "64%" },
      { label: "Прирост чистой маржи", value: "+6.4%" }
    ],
    businessProblem: "Компания с четырьмя региональными филиалами страдала от непрозрачной воронки сделок в CRM. При стабильном росте числа лидов выручка буксовала, а конверсия сделок (Win Rate) между менеджерами отличалась в 3 раза.",
    architectureNotes: [
      "Звёздная схема (Star Schema): факт-таблица заказов с измерениями менеджеров, контрагентов, географии и календаря дат.",
      "Time Intelligence на DAX: динамический расчет YoY Sales, MTD, QTD и скользящего среднего без жесткой привязки к фильтрам.",
      "Интерактивный Drill-through: переход в один клик из общей воронки в личную карточку конкретного менеджера."
    ],
    takeaway: "Менеджер с максимальным объемом продаж (42% объема) закрывал сделки за счет 18% средней скидки. Менеджер со средней скидкой 4% приносил на 22% больше чистой прибыли. Перестройка мотивации подняла маржинальность на 6.4%.",
    stack: ["Power BI Desktop", "Продвинутый DAX", "Звёздная схема", "Azure Maps", "Figma Canvas"],
    screens: [
      {
        id: "s1",
        title: "01. Executive Overview",
        image: "/Скрины/Sales Perfomens/Executive Overview.png",
        caption: "Executive Overview — ключевые KPI: выручка, Win Rate, динамика по месяцам и филиалам."
      },
      {
        id: "s2",
        title: "02. Team Leaderboard",
        image: "/Скрины/Sales Perfomens/Team Leaderboard.png",
        caption: "Team Leaderboard — эффективность менеджеров, средний чек, скидки и scatter plot активности."
      },
      {
        id: "s3",
        title: "03. Pipeline Funnel",
        image: "/Скрины/Sales Perfomens/Pipeline & Funnel.png",
        caption: "Pipeline Funnel — конверсия по 5 этапам сделки, потери лидов и прогнозируемый объем закрытия."
      },
      {
        id: "s4",
        title: "04. Manager Detail",
        image: "/Скрины/Sales Perfomens/Manager Detail (Dthrough).png",
        caption: "Manager Detail — персональный профиль менеджера с историей сделок, скидками и выполнением KPI."
      },
      {
        id: "s5",
        title: "05. Regional Map",
        image: "/Скрины/Sales Perfomens/Regional Map.png",
        caption: "Regional Map — географическое распределение выручки, филиалы и маржинальность регионов."
      },
      {
        id: "s0",
        title: "00. Welcome Page",
        image: "/Скрины/Sales Perfomens/Welcome Page.png",
        caption: "Welcome Page — навигационный портал с оглавлением отчета, глоссарием и описанием методологии."
      }
    ]
  },

  // 2. SAAS
  {
    id: "saas",
    caseNumber: "02 / 07",
    title: "Kestrel Analytics — SaaS Retention, Churn Intelligence & LTV Cohorts",
    shortTitle: "SaaS Retention & Churn",
    category: "Power BI / DAX / Подписочные модели",
    badge: "SaaS Analytics",
    metrics: [
      { label: "Ежемесячный MRR", value: "$142K" },
      { label: "Net Revenue Retention", value: "114%" },
      { label: "Снижение Churn Rate", value: "-2.8%" }
    ],
    businessProblem: "Подписочный SaaS-сервис столкнулся с ростом чистого оттока клиентов (Customer Churn) на 4-й месяц после онбординга. Стандартные метрики в Google Analytics не позволяли разделить отток по тарифам и когортам.",
    architectureNotes: [
      "Когортная матрица на DAX: расчет месячных когорт удержания выручки (Revenue Retention) через функции CALCULATE, FILTER и TREATAS.",
      "Метрики MRR Movement: декомпозиция New MRR, Expansion MRR, Contraction MRR и Churned MRR на едином каскадном чарте (Waterfall).",
      "Dynamic Customer Health Score: матрица риска оттока на основе активности пользователей за последние 30 дней."
    ],
    takeaway: "83% оттока происходило на тарифе Starter из-за неиспользования ключевой фичи автоматизации. Внедрение онбординг-триггеров в первый месяц снизило Churn с 6.4% до 3.6%, сохранив $38K годового ARR.",
    stack: ["Power BI", "DAX Time Intelligence", "Когортный анализ", "Кривые выживаемости", "Star Schema"],
    screens: [
      {
        id: "s1",
        title: "01. Executive Overview",
        image: "/Скрины/SaaS Dashboard & Customer Retention Intelligence/Executive Overview.png",
        caption: "Executive Overview — динамика MRR, ARR, Net Revenue Retention (114%) и Churn Rate по месяцам."
      },
      {
        id: "s2",
        title: "02. Customer Health",
        image: "/Скрины/SaaS Dashboard & Customer Retention Intelligence/Customer Health.png",
        caption: "Customer Health — сегментация активных клиентов, индекс вовлеченности и предиктивные алерты оттока."
      },
      {
        id: "s3",
        title: "03. Churn Intelligence",
        image: "/Скрины/SaaS Dashboard & Customer Retention Intelligence/Churn Intelligence (ML).png",
        caption: "Churn Intelligence — когортная матрица удержания по месяцам подписки и причинам отказа."
      },
      {
        id: "s4",
        title: "04. Customer 360",
        image: "/Скрины/SaaS Dashboard & Customer Retention Intelligence/Customer 360° (Drill-through).png",
        caption: "Customer 360 — детальный срез по конкретному клиенту: история апгрейдов, тикетов и LTV."
      },
      {
        id: "s0",
        title: "00. Welcome Page",
        image: "/Скрины/SaaS Dashboard & Customer Retention Intelligence/Welcome Page.png",
        caption: "Welcome Page — вводный экран с архитектурой подписочной модели данных и определением метрик."
      }
    ]
  },

  // 3. FINANCE
  {
    id: "finance",
    caseNumber: "03 / 07",
    title: "CrestForge Holdings — Corporate P&L, Cash Flow & Financial What-If",
    shortTitle: "Corporate P&L & What-If",
    category: "Power BI / Финансовый менеджмент",
    badge: "Finance & P&L",
    metrics: [
      { label: "Выручка холдинга", value: "$48.2M" },
      { label: "EBITDA Margin", value: "24.6%" },
      { label: "Точность факт/план", value: "98.2%" }
    ],
    businessProblem: "Финансовый отдел холдинга тратил 12 рабочих дней каждого месяца на сбор разрозненных таблиц Excel от 6 дочерних предприятий для формирования управленческого P&L. Ошибки версий приводили к расхождениям данных.",
    architectureNotes: [
      "Матричный P&L на DAX: динамическое построение отчета о прибылях и убытках с правильным уровнем иерархий (Gross Margin, EBITDA, Net Profit).",
      "Сценарный What-If симулятор: параметры (Field Parameters) для стресс-тестирования роста цен на сырье (+/- 15%) и падения курса валют.",
      "Cash Flow & Working Capital: автоматический расчет операционного, инвестиционного и финансового денежного потока."
    ],
    takeaway: "Сокращение цикла закрытия управленческой отчетности с 12 дней до 4 часов. Выявлен скрытый кассовый разрыв на $1.4M в 3-м квартале, что позволило пересмотреть кредитные линии до наступления дефицита ликвидности.",
    stack: ["Power BI Financial Modeling", "Продвинутый DAX", "What-If Parameters", "Power Query M", "Excel DWH"],
    screens: [
      {
        id: "s1",
        title: "01. Executive Overview",
        image: "/Скрины/Finance & Accounting/Executive Overciew.png",
        caption: "Executive Overview — финансовые результаты холдинга, консолидированная выручка, EBITDA и чистая прибыль."
      },
      {
        id: "s2",
        title: "02. P&L Statement",
        image: "/Скрины/Finance & Accounting/P&L Detail.png",
        caption: "P&L Statement — детальный управленческий отчет о прибылях и убытках с разбивкой по статьям OPEX/CAPEX."
      },
      {
        id: "s3",
        title: "03. Budget vs Actual",
        image: "/Скрины/Finance & Accounting/Budget vs Actual.png",
        caption: "Budget vs Actual — план-факт анализ расходов и доходов с динамическим цветовым кодированием отклонений."
      },
      {
        id: "s4",
        title: "04. Cash Flow",
        image: "/Скрины/Finance & Accounting/Cash Flow.png",
        caption: "Cash Flow Dynamics — анализ операционного и инвестиционного денежного потока по филиалам."
      },
      {
        id: "s5",
        title: "05. What-If Scenarios",
        image: "/Скрины/Finance & Accounting/What-if Scenarios.png",
        caption: "What-If Scenarios — симулятор сценарного анализа: моделирование влияния изменения цен и расходов на маржинальность."
      },
      {
        id: "s6",
        title: "06. Department Detail",
        image: "/Скрины/Finance & Accounting/Department Detail (Drill-through).png",
        caption: "Department Detail — детальные карточки центров финансовой ответственности и подразделений."
      },
      {
        id: "s0",
        title: "00. Welcome Page",
        image: "/Скрины/Finance & Accounting/Welcome Page.png",
        caption: "Welcome Page — вводный интерфейс финансовой модели холдинга с картой связей отчетов."
      }
    ]
  },

  // 5. HR
  {
    id: "hr",
    caseNumber: "05 / 07",
    title: "Veridian Group — Enterprise Workforce Analytics & 9-Box Talent Grid",
    shortTitle: "HR Workforce & 9-Box",
    category: "Power BI / HR-аналитика / Управление талантами",
    badge: "HR Analytics",
    metrics: [
      { label: "Численность штата", value: "3,840" },
      { label: "Снижение текучести", value: "-4.2%" },
      { label: "High Potential пул", value: "248 чел" }
    ],
    businessProblem: "Крупная компания теряла до 18% ключевых специалистов в первые 12 месяцев работы. HR-отдел не имел единого инструмента для прогнозирования текучести (Attrition) и объективной оценки кадрового резерва.",
    architectureNotes: [
      "Интерактивная матрица 9-Box Grid: автоматическое распределение сотрудников по осям Performance vs Potential с фильтрацией по грейдам.",
      "Факторный анализ текучести: расчет коэффициентов корреляции между уровнем переработок, частотой повышений и увольнениями.",
      "Динамическая пирамида должностей: визуализация возрастной и гендерной структуры, а также расходов на фонд оплаты труда (ФОТ)."
    ],
    takeaway: "Обнаружена критическая текучесть (31%) в IT-департаменте из-за отставания окладов от медианы рынка на грейде Middle. Коррекция грейдинговой сетки сохранила 28 сеньор-специалистов, сэкономив $220K на рекрутинге.",
    stack: ["Power BI", "DAX", "9-Box Talent Matrix", "HR Metrics", "Power Query"],
    screens: [
      {
        id: "s1",
        title: "01. Workforce Overview",
        image: "/Скрины/HR & People Analytics/Workforce Overview.png",
        caption: "Workforce Overview — общая численность штата, динамика найма, текучесть и структура ФОТ по департаментам."
      },
      {
        id: "s2",
        title: "02. Attrition & Turnover",
        image: "/Скрины/HR & People Analytics/Attrition & Turnover.png",
        caption: "Attrition & Turnover — глубокий анализ причин увольнений, добровольный vs недобровольный отток по стажу."
      },
      {
        id: "s3",
        title: "03. Recruitment & Retention",
        image: "/Скрины/HR & People Analytics/Recruitment & Retention.png",
        caption: "Recruitment & Retention — воронка подбора персонала, Time to Hire, Cost per Hire и конверсия этапов."
      },
      {
        id: "s4",
        title: "04. Department Breakdown",
        image: "/Скрины/HR & People Analytics/Department Detail.png",
        caption: "Department Breakdown — детальный срез по каждому подразделению, грейды и кадровый резерв."
      },
      {
        id: "s0",
        title: "00. Welcome Page",
        image: "/Скрины/HR & People Analytics/Welcome Page.png",
        caption: "Welcome Page — вводный портал HR-аналитики с перечнем показателей и навигацией."
      }
    ]
  },

  // 6. ECOMMERCE
  {
    id: "ecommerce",
    caseNumber: "06 / 07",
    title: "Harlow Home Goods — Omnichannel E-Commerce & Customer RFM",
    shortTitle: "E-Commerce & RFM",
    category: "Power BI / E-Commerce / Юнит-экономика",
    badge: "E-Commerce",
    metrics: [
      { label: "Годовая выручка", value: "$28.4M" },
      { label: "Средний чек (AOV)", value: "$184" },
      { label: "Доля повторных покупок", value: "38.2%" }
    ],
    businessProblem: "Онлайн-ритейлер товаров для дома инвестировал более $400K в платную рекламу ежемесячно, но не мог связать каналы привлечения (Meta, Google, Direct) с повторными покупками и чистой пожизненной ценностью (LTV).",
    architectureNotes: [
      "RFM-сегментация на DAX: динамическое распределение покупателей на 5 кластеров (Champions, Loyal, At Risk, Lost, New) без внешних скриптов.",
      "Сквозной когортный анализ повторных покупок: расчет доли клиентов, совершивших заказ 2+, 3+ и 4+ раза.",
      "Анализ скидочной каннибализации: выявление промокодов, которые снижали маржинальность без привлечения долгосрочных клиентов."
    ],
    takeaway: "Таргетированная реактивация сегмента 'At Risk' (клиенты с высоким чеком, не покупавшие > 90 дней) дала $380K дополнительной выручки за 2 месяца при ROI рекламной рассылки 640%.",
    stack: ["Power BI", "DAX RFM Clustering", "LTV Modeling", "E-Com Funnels", "Google Analytics Data"],
    screens: [
      {
        id: "s1",
        title: "01. Sales Overview",
        image: "/Скрины/E-commerce & Retail/Sales Overview.png",
        caption: "Sales Overview — продажи по категориям товаров, каналам сбыта, динамика среднего чека и маржинальность."
      },
      {
        id: "s2",
        title: "02. Product Performance",
        image: "/Скрины/E-commerce & Retail/Product Performance.png",
        caption: "Product Performance — ABC/XYZ анализ товарной матрицы, оборачиваемость запасов и остатки."
      },
      {
        id: "s3",
        title: "03. Customer Analysis & RFM",
        image: "/Скрины/E-commerce & Retail/Customer Analysis.png",
        caption: "Customer Analysis — когортное удержание, частота заказов и распределение клиентских сегментов."
      },
      {
        id: "s4",
        title: "04. Regional Sales",
        image: "/Скрины/E-commerce & Retail/Regional Sales.png",
        caption: "Regional Sales — географическая карта распределения заказов, логистические затраты и сроки доставки."
      },
      {
        id: "s5",
        title: "05. Promotions & Discounts",
        image: "/Скрины/E-commerce & Retail/Promotions & Discounts.png",
        caption: "Promotions & Discounts — влияние скидок и сезонных промо-акций на чистую рентабельность продаж."
      },
      {
        id: "s0",
        title: "00. Welcome Page",
        image: "/Скрины/E-commerce & Retail/Welcome Page.png",
        caption: "Welcome Page — вводный интерфейс ритейл-аналитики с навигацией по разделам магазина."
      }
    ]
  },

  // 7. FASTAPI ML
  {
    id: "fastapi",
    caseNumber: "07 / 07",
    title: "YesCredit Technologies — Machine Learning Credit Risk Scoring & API",
    shortTitle: "ML Credit Scoring (98%)",
    category: "Python / FastAPI / Scikit-Learn / ML в проде",
    badge: "ML & FastAPI",
    metrics: [
      { label: "Точность модели (Acc)", value: "98.1%" },
      { label: "ROC-AUC Метрика", value: "0.99" },
      { label: "Latency инференса", value: "< 18ms" }
    ],
    businessProblem: "Микрофинансовая организация тратила до 40 минут на ручную оценку кредитоспособности одного заемщика кредитными андеррайтерами. Человеческий фактор приводил к дефолтам по 12% выданных микрозаймов.",
    architectureNotes: [
      "Машинное обучение (Scikit-learn): обучение ансамбля Random Forest Classifier на датасете из 30,000+ кредитных историй.",
      "Сравнение алгоритмов: Random Forest (98.1% Accuracy, ROC-AUC 0.99) превзошел базовую Logistic Regression (90.2%).",
      "Production REST API на FastAPI: асинхронный микросервис с валидацией входных данных через Pydantic и откликом менее 20 мс."
    ],
    takeaway: "Автоматизация скоринга снизила время выдачи кредитного решения с 40 минут до 60 секунд. Уровень дефолтности портфеля упал с 12% до 2.4% за счет точного отсева заемщиков с высокой долговой нагрузкой.",
    stack: ["Python 3.11", "FastAPI", "Scikit-Learn", "Random Forest", "Pydantic", "Docker"],
    screens: [
      {
        id: "s1",
        title: "01. YesCredit Web Service",
        image: "/Скрины/Yes Credit FAst API/hero sectio n.png",
        caption: "YesCredit Web Service — интерфейс сервиса предиктивной оценки платежеспособности в реальном времени."
      },
      {
        id: "s2",
        title: "02. ML Architecture",
        image: "/Скрины/Yes Credit FAst API/abour us.png",
        caption: "ML Architecture — описание пайплайна предобработки фичей и архитектуры алгоритма Random Forest."
      },
      {
        id: "s3",
        title: "03. Loan Scoring Form",
        image: "/Скрины/Yes Credit FAst API/get started.png",
        caption: "Loan Scoring Form — форма ввода скоринговых переменных: доход, кредитная история, DTI и активы."
      },
      {
        id: "s4",
        title: "04. Approved Score (98%)",
        image: "/Скрины/Yes Credit FAst API/good result.png",
        caption: "Scoring Outcome: Approval — результат инференса модели с одобрением заявки и оценкой риска."
      },
      {
        id: "s5",
        title: "05. Risk Diagnostics",
        image: "/Скрины/Yes Credit FAst API/bad result.png",
        caption: "Risk Diagnostics: Rejection — выявление ключевых факторов риска (Feature Importance) при отказе."
      },
      {
        id: "s6",
        title: "06. API Documentation",
        image: "/Скрины/Yes Credit FAst API/Contacts.png",
        caption: "API Documentation — Swagger / OpenAPI документация REST-эндпоинтов для интеграции с мобильным банком."
      }
    ]
  },

  // 7. RETAIL SALES SQL
  {
    id: "retail-sales-sql",
    caseNumber: "07 / 08",
    title: "SQL Data Analysing Project",
    shortTitle: "SQL Data Analysing Project",
    category: "PostgreSQL / 3NF / Оконные функции / CTE",
    badge: "PostgreSQL Analytics",
    metrics: [
      { label: "Выручка магазина", value: "$5.44M" },
      { label: "Объем транзакций", value: "3 000" },
      { label: "Средний чек", value: "$1,814" }
    ],
    businessProblem: "Необходимость структурирования сырых транзакций электронной коммерции в нормализованную реляционную СУБД для регулярного расчёта финансовой отчётности, анализа клиентского оттока и контроля динамики выручки.",
    architectureNotes: [
      "Реляционная нормализация (3NF): разделение данных на справочники customers (50 клиентов), products (25 товаров) и таблицу фактов orders (3 000 транзакций) с контролем целостности PK, FK и CHECK (quantity > 0).",
      "Оконные функции (Window Functions): ранжирование ТОП-2 продуктов внутри каждой категории через DENSE_RANK() OVER (PARTITION BY category).",
      "Временные ряды и динамика MoM: расчет накопительного итога выручки через SUM() OVER (ORDER BY order_date) и помесячного темпа прироста через LAG()."
    ],
    takeaway: "Построена отказоустойчивая реляционная архитектура и написана библиотека из 8 переиспользуемых бизнес-запросов, позволяющая руководству мгновенно оценивать ключевые финансовые KPI и сегментировать клиентов.",
    stack: ["PostgreSQL 15+", "pgAdmin 4", "Оконные функции", "CTE / WITH", "3NF Normalization"],
    screens: [
      {
        id: "s1",
        title: "01. Financial KPI Summary",
        image: "/Скрины/SQL Project/01_financial_kpi.png",
        caption: "Executive Summary: совокупная выручка ($5.44M), число заказов (3 000) и средний чек."
      },
      {
        id: "s2",
        title: "02. Category Revenue (HAVING)",
        image: "/Скрины/SQL Project/02_category_analysis.png",
        caption: "Category Breakdown: фильтрация категорий с выручкой свыше $50,000 через GROUP BY + HAVING."
      },
      {
        id: "s3",
        title: "03. Regional Performance",
        image: "/Скрины/SQL Project/03_regional_sales.png",
        caption: "Regional Breakdown: многотабличный JOIN трёх сущностей и расчёт среднего чека по регионам."
      },
      {
        id: "s4",
        title: "04. Inactive Customer Retention",
        image: "/Скрины/SQL Project/04_inactive_customers.png",
        caption: "Churn Diagnostics: поиск клиентов без активности за период через LEFT JOIN ... WHERE IS NULL."
      },
      {
        id: "s5",
        title: "05. VIP Customers (CTE)",
        image: "/Скрины/SQL Project/05_top5_vip_customers.png",
        caption: "Top-5 VIP Customers: расчёт ядра клиентской базы через многоуровневый CTE."
      },
      {
        id: "s6",
        title: "06. Top-2 Products per Category",
        image: "/Скрины/SQL Project/06_top2_products_per_category.png",
        caption: "Window Functions: ранжирование бестселлеров в каждой категории через DENSE_RANK()."
      },
      {
        id: "s7",
        title: "07. Running Total Revenue",
        image: "/Скрины/SQL Project/07_cumulative_monthly_revenue.png",
        caption: "Running Total: кумулятивный нарастающий итог выручки компании через SUM() OVER."
      },
      {
        id: "s8",
        title: "08. MoM Growth Rate (LAG)",
        image: "/Скрины/SQL Project/08_monthly_revenue_growth_lag.png",
        caption: "MoM Growth Analysis: темпы роста выручки месяц к месяцу с помощью оконной функции LAG()."
      }
    ],
    isSqlProject: true,
    sqlQueries: [
      {
        id: "q1",
        name: "01. Основные финансовые KPI (Executive Summary)",
        time: "11 ms",
        code: `SELECT 
    SUM(o.quantity * p.unit_price) AS total_sales,
    COUNT(order_id) AS total_orders,
    COUNT(DISTINCT customer_id) AS total_customers,
    SUM(quantity) AS total_items_sold,
    ROUND(AVG(o.quantity * p.unit_price), 2) AS avg_sales
FROM orders o
JOIN products p ON o.product_id = p.product_id;`,
        headers: ["TOTAL_SALES", "TOTAL_ORDERS", "TOTAL_CUSTOMERS", "TOTAL_ITEMS_SOLD", "AVG_SALES"],
        rows: [
          ["$5,441,842.10", "3,000", "50", "76,641", "$1,813.95"]
        ]
      },
      {
        id: "q2",
        name: "02. ТОП-2 товара в категории (DENSE_RANK)",
        time: "14 ms",
        code: `WITH product_sales AS (
    SELECT 
        p.category,
        p.product_name,
        SUM(o.quantity * p.unit_price) AS total_sales,
        DENSE_RANK() OVER (
            PARTITION BY p.category 
            ORDER BY SUM(o.quantity * p.unit_price) DESC
        ) AS rank_in_category
    FROM orders o
    JOIN products p ON o.product_id = p.product_id
    GROUP BY p.category, p.product_name
)
SELECT category, rank_in_category, product_name, total_sales
FROM product_sales
WHERE rank_in_category <= 2
ORDER BY category, rank_in_category;`,
        headers: ["CATEGORY", "RANK_IN_CATEGORY", "PRODUCT_NAME", "TOTAL_SALES"],
        rows: [
          ["Clothing", "1", "Leather Jacket", "$364,280.00"],
          ["Clothing", "2", "Winter Coat", "$312,150.00"],
          ["Electronics", "1", "Laptop Pro 16", "$948,200.00"],
          ["Electronics", "2", "Smartphone Ultra", "$762,400.00"]
        ]
      },
      {
        id: "q3",
        name: "03. Нарастающий итог выручки (SUM OVER)",
        time: "12 ms",
        code: `WITH monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', o.order_date)::date AS order_month,
        SUM(o.quantity * p.unit_price) AS total_sales
    FROM orders o
    JOIN products p ON o.product_id = p.product_id
    GROUP BY DATE_TRUNC('month', o.order_date)
)
SELECT 
    order_month,
    total_sales,
    SUM(total_sales) OVER (ORDER BY order_month) AS running_total_sales
FROM monthly_sales
ORDER BY order_month;`,
        headers: ["ORDER_MONTH", "TOTAL_SALES", "RUNNING_TOTAL_SALES"],
        rows: [
          ["2023-01-01", "$214,500.00", "$214,500.00"],
          ["2023-02-01", "$228,400.00", "$442,900.00"],
          ["2023-03-01", "$241,100.00", "$684,000.00"]
        ]
      },
      {
        id: "q4",
        name: "04. Динамика MoM прироста (LAG)",
        time: "15 ms",
        code: `WITH monthly_summary AS (
    SELECT 
        DATE_TRUNC('month', o.order_date)::date AS order_month,
        SUM(o.quantity * p.unit_price) AS current_revenue
    FROM orders o
    JOIN products p ON o.product_id = p.product_id
    GROUP BY DATE_TRUNC('month', o.order_date)
),
monthly_with_lag AS (
    SELECT 
        order_month,
        current_revenue,
        LAG(current_revenue) OVER (ORDER BY order_month) AS prev_revenue
    FROM monthly_summary
)
SELECT 
    order_month,
    current_revenue,
    prev_revenue,
    current_revenue - prev_revenue AS difference_revenue,
    ROUND((current_revenue - prev_revenue) / prev_revenue * 100) AS growth_pct
FROM monthly_with_lag
ORDER BY order_month;`,
        headers: ["ORDER_MONTH", "CURRENT_REVENUE", "PREV_REVENUE", "DIFFERENCE_REVENUE", "GROWTH_PCT"],
        rows: [
          ["2023-02-01", "$228,400.00", "$214,500.00", "+$13,900.00", "+6.48%"],
          ["2023-03-01", "$241,100.00", "$228,400.00", "+$12,700.00", "+5.56%"]
        ]
      }
    ]
  },

  // 8. RETAIL SALES PYTHON
  {
    id: "retail-sales-python",
    caseNumber: "08 / 08",
    title: "Python Data Cleaning Project",
    shortTitle: "Python Data Cleaning Project",
    category: "Python / Pandas / Data Quality / ETL",
    badge: "Python ETL Engine",
    metrics: [
      { label: "Сырых строк обработано", value: "5 000" },
      { label: "Валидный датасет", value: "4 892" },
      { label: "Пропусков после ETL", value: "0" }
    ],
    businessProblem: "Сырые выгрузки транзакционных систем (1С/CRM) содержали дублирующиеся чеки, разнородные форматы дат, текстовые опечатки и критические аномалии (отрицательные цены и объемы), искажающие бизнес-отчетность.",
    architectureNotes: [
      "Модульный ETL-пайплайн: линейный процесс очистки от загрузки dirty_sales.csv до валидированного clean_sales.csv.",
      "Унификация форматов: нормализация mixed-форматов дат в единый datetime64[ns] и текстовых полей к Title Case.",
      "Data Quality контроль: устранение 18 дубликатов, отсев строк без цен и замена пропусков в регионах на 'Unknown'."
    ],
    takeaway: "Разработан скрипт очистки данных, исключающий искажение аналитических отчётов и подготавливающий 100% чистый датасет для загрузки в реляционную СУБД PostgreSQL.",
    stack: ["Python 3.11", "Pandas 2.0+", "NumPy", "EDA", "Data Quality"],
    screens: [
      {
        id: "s1",
        title: "01. Код очистки данных (Часть 1)",
        image: "/Скрины/Python Data Cleaning/1. Первый снимок.png",
        caption: "Python Pipeline: первичный осмотр данных, стандартизация колонок и парсинг дат."
      },
      {
        id: "s2",
        title: "02. Код очистки данных (Часть 2)",
        image: "/Скрины/Python Data Cleaning/2. Второй снимок.png",
        caption: "Python Pipeline: удаление дубликатов, фильтрация аномалий и сохранение clean_sales.csv."
      }
    ]
  }

];
