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

  // 4. SQL PROJECT
  {
    id: "sql",
    caseNumber: "04 / 07",
    title: "DBeaver PostgreSQL Analytics Studio — Live Interactive SQL Workbench",
    shortTitle: "SQL Studio & DWH",
    category: "PostgreSQL / CTE / Оконные функции / DBeaver",
    badge: "SQL Analytics IDE",
    metrics: [
      { label: "Скорость запросов", value: "< 14ms" },
      { label: "Строк в базе данных", value: "1.2M+" },
      { label: "Сложность логики", value: "Multi-CTE" }
    ],
    businessProblem: "Подготовка аналитических витрин из сырой транзакционной реляционной базы данных. Задача требовала написания отказоустойчивых SQL-запросов для расчета когортного удержания, скользящего MRR и кластеризации клиентов без блокировки production БД.",
    architectureNotes: [
      "Многоуровневые CTE (Common Table Expressions): структурирование аналитической логики на читаемые блоки (First_Touch, Retention_Matrix).",
      "Оконные функции (Window Functions): использование SUM() OVER (ORDER BY ROWS BETWEEN), LAG(), DENSE_RANK() и NTILE(4).",
      "Индексация и оптимизация: создание композитных индексов по (customer_id, payment_date), сокративших время сканирования таблиц в 8 раз."
    ],
    takeaway: "Создан набор переиспользуемых представлений (SQL Views) и хранимых процедур, который стал фундаментом для автоматического обновления корпоративных Power BI отчетов по расписанию.",
    stack: ["PostgreSQL", "DBeaver IDE", "Оконные функции", "Рекурсивные CTE", "EXPLAIN ANALYZE"],
    screens: [
      {
        id: "s1",
        title: "01. Window Functions (DBeaver)",
        image: "/Скрины/DBever/Window Function .png",
        caption: "DBeaver Studio — расчет скользящих агрегатов и ранжирования с помощью оконных функций."
      },
      {
        id: "s2",
        title: "02. Multi-CTE MoM Analysis",
        image: "/Скрины/DBever/CTE .png",
        caption: "SQL Editor — многоуровневые CTE для помесячного расчета когортного удержания подписок."
      },
      {
        id: "s3",
        title: "03. Loss-Making Diagnostics",
        image: "/Скрины/DBever/Problematic products.png",
        caption: "PostgreSQL Query — выявление убыточных товарных позиций с отрицательной юнит-экономикой."
      },
      {
        id: "s4",
        title: "04. Stored Procedures",
        image: "/Скрины/DBever/Stored Procedure .png",
        caption: "DWH Maintenance — хранимая процедура инкрементного обновления аналитической витрины."
      }
    ],
    isSqlProject: true,
    sqlQueries: [
      {
        id: "q1",
        name: "01. Когортный анализ LTV (CTE + LAG)",
        time: "12 ms",
        code: `-- 01. Когортный анализ удержания подписчиков (Retention & LTV)
WITH monthly_cohorts AS (
    SELECT 
        customer_id,
        DATE_TRUNC('month', MIN(subscription_start_date))::DATE AS cohort_month
    FROM subscriptions
    GROUP BY customer_id
),
customer_activities AS (
    SELECT 
        s.customer_id,
        mc.cohort_month,
        DATE_TRUNC('month', s.payment_date)::DATE AS activity_month,
        (EXTRACT(YEAR FROM s.payment_date) - EXTRACT(YEAR FROM mc.cohort_month)) * 12 +
        (EXTRACT(MONTH FROM s.payment_date) - EXTRACT(MONTH FROM mc.cohort_month)) AS month_number,
        s.amount
    FROM payments s
    JOIN monthly_cohorts mc ON s.customer_id = mc.customer_id
)
SELECT 
    cohort_month,
    month_number,
    COUNT(DISTINCT customer_id) AS active_subscribers,
    ROUND(SUM(amount), 2) AS cohort_revenue_usd,
    ROUND(AVG(amount), 2) AS arpu_usd,
    ROUND(COUNT(DISTINCT customer_id)::NUMERIC / 
          FIRST_VALUE(COUNT(DISTINCT customer_id)) OVER (PARTITION BY cohort_month ORDER BY month_number) * 100, 2) AS retention_rate_pct
FROM customer_activities
GROUP BY cohort_month, month_number
ORDER BY cohort_month, month_number;`,
        headers: ["COHORT_MONTH", "MONTH_NUMBER", "ACTIVE_SUBSCRIBERS", "COHORT_REVENUE_USD", "ARPU_USD", "RETENTION_RATE_PCT"],
        rows: [
          ["2026-01-01", "0", "1,240", "$148,800.00", "$120.00", "100.00%"],
          ["2026-01-01", "1", "1,165", "$139,800.00", "$120.00", "93.95%"],
          ["2026-01-01", "2", "1,098", "$131,760.00", "$120.00", "88.55%"],
          ["2026-01-01", "3", "1,042", "$125,040.00", "$120.00", "84.03%"],
          ["2026-01-01", "4", "1,012", "$121,440.00", "$120.00", "81.61%"]
        ]
      },
      {
        id: "q2",
        name: "02. Скользящее среднее MRR (ROWS BETWEEN)",
        time: "9 ms",
        code: `-- 02. Расчет 3-месячного скользящего среднего выручки и MoM темпа роста
WITH monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', order_date)::DATE AS sales_month,
        SUM(order_total) AS total_mrr
    FROM orders
    WHERE order_status = 'COMPLETED'
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT 
    sales_month,
    total_mrr,
    LAG(total_mrr, 1) OVER (ORDER BY sales_month) AS prev_month_mrr,
    ROUND((total_mrr - LAG(total_mrr, 1) OVER (ORDER BY sales_month)) / 
          LAG(total_mrr, 1) OVER (ORDER BY sales_month) * 100, 2) AS mom_growth_pct,
    ROUND(AVG(total_mrr) OVER (
        ORDER BY sales_month 
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ), 2) AS rolling_3m_avg_mrr
FROM monthly_sales
ORDER BY sales_month DESC;`,
        headers: ["SALES_MONTH", "TOTAL_MRR", "PREV_MONTH_MRR", "MOM_GROWTH_PCT", "ROLLING_3M_AVG_MRR"],
        rows: [
          ["2026-04-01", "$184,200.00", "$168,900.00", "+9.06%", "$171,433.33"],
          ["2026-03-01", "$168,900.00", "$161,200.00", "+4.78%", "$161,500.00"],
          ["2026-02-01", "$161,200.00", "$154,400.00", "+4.40%", "$157,800.00"],
          ["2026-01-01", "$154,400.00", "$148,000.00", "+4.32%", "$151,200.00"]
        ]
      },
      {
        id: "q3",
        name: "03. RFM-кластеризация (NTILE + CASE)",
        time: "15 ms",
        code: `-- 03. RFM-сегментация клиентской базы для целевого маркетинга
WITH rfm_raw AS (
    SELECT 
        customer_id,
        CURRENT_DATE - MAX(order_date)::DATE AS recency_days,
        COUNT(order_id) AS frequency_orders,
        SUM(order_total) AS monetary_usd
    FROM orders
    WHERE order_status = 'COMPLETED'
    GROUP BY customer_id
),
rfm_scores AS (
    SELECT 
        customer_id,
        recency_days,
        frequency_orders,
        monetary_usd,
        NTILE(5) OVER (ORDER BY recency_days DESC) AS r_score,
        NTILE(5) OVER (ORDER BY frequency_orders ASC) AS f_score,
        NTILE(5) OVER (ORDER BY monetary_usd ASC) AS m_score
    FROM rfm_raw
)
SELECT 
    customer_id,
    recency_days,
    frequency_orders,
    monetary_usd,
    CONCAT(r_score, f_score, m_score) AS rfm_cell,
    CASE 
        WHEN r_score >= 4 AND f_score >= 4 THEN 'VIP Champions'
        WHEN r_score >= 3 AND f_score >= 3 THEN 'Loyal Customers'
        WHEN r_score <= 2 AND f_score >= 4 THEN 'At Risk / Churning'
        ELSE 'Standard / Occasional'
    END AS customer_segment
FROM rfm_scores
LIMIT 10;`,
        headers: ["CUSTOMER_ID", "RECENCY_DAYS", "FREQUENCY_ORDERS", "MONETARY_USD", "RFM_CELL", "CUSTOMER_SEGMENT"],
        rows: [
          ["CUST-8021", "4", "28", "$18,450.00", "555", "VIP Champions"],
          ["CUST-3914", "11", "24", "$14,920.00", "554", "VIP Champions"],
          ["CUST-9140", "19", "18", "$9,840.00", "444", "Loyal Customers"],
          ["CUST-2104", "78", "21", "$12,300.00", "245", "At Risk / Churning"],
          ["CUST-1049", "140", "2", "$840.00", "111", "Standard / Occasional"]
        ]
      },
      {
        id: "q4",
        name: "04. Эффективность сейлзов (RANKX + Window)",
        time: "10 ms",
        code: `-- 04. Ранжирование менеджеров по маржинальной прибыли и доле скидки
SELECT 
    manager_name,
    region,
    COUNT(deal_id) AS deals_won,
    ROUND(SUM(deal_amount), 2) AS total_revenue,
    ROUND(AVG(discount_pct), 2) AS avg_discount_pct,
    ROUND(SUM(deal_margin_amount), 2) AS total_margin_contribution,
    DENSE_RANK() OVER (ORDER BY SUM(deal_margin_amount) DESC) AS margin_rank,
    ROUND(SUM(deal_margin_amount) / SUM(SUM(deal_margin_amount)) OVER () * 100, 2) AS pct_of_company_margin
FROM sales_deals
WHERE stage = 'CLOSED_WON'
GROUP BY manager_name, region
ORDER BY margin_rank ASC;`,
        headers: ["MANAGER_NAME", "REGION", "DEALS_WON", "TOTAL_REVENUE", "AVG_DISCOUNT_PCT", "TOTAL_MARGIN_CONTRIBUTION", "MARGIN_RANK"],
        rows: [
          ["Marcus Johnson", "Midwest", "490", "$9,748,694.00", "4.2%", "$3,899,477.00", "1"],
          ["James Mitchell", "Mountain West", "501", "$10,390,330.00", "18.5%", "$2,909,292.00", "2"],
          ["Sarah Chen", "Northeast", "474", "$9,701,675.00", "6.1%", "$3,395,586.00", "3"],
          ["Amanda Foster", "Southeast", "514", "$4,370,866.00", "5.8%", "$1,748,346.00", "4"]
        ]
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
  }
];
