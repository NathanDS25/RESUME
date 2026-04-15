export const portfolioData = {
  personalInfo: {
    name: "Nathan Dsouza",
    tagline: "Software Engineer & Data Scientist",
    contact: {
      phone: "+91 9326539028",
      email: "nathanneildsouza2021@gmail.com",
      linkedin: "https://linkedin.com/in/nathan-dsouza-a81b28229",
      github: "https://github.com/NathanDS25",
    },
  },
  education: [
    {
      institution: "Fr. Conceicao Rodrigues College of Engineering",
      degree: "B.Tech in Computer Engineering",
      duration: "2024 â€“ 2028",
      details: "CGPA: 8.68",
    },
    {
      institution: "Maharashtra State Board (HSC)",
      degree: "Higher Secondary Certificate",
      duration: "2023",
      details: "Percentage: 73%",
    },
    {
      institution: "Maharashtra State Board (SSC)",
      degree: "Secondary School Certificate",
      duration: "2021",
      details: "Percentage: 92%",
    },
  ],
  leadership: [
    {
      role: "Founder & Director of Finance",
      organization: "Finvest Finance Council, Fr. CRCE",
      duration: "2024 â€“ Present",
      description: [
        "Founded the college's first dedicated finance and investment club; organised workshops attended by 120+ students covering equity valuation, personal finance, and portfolio construction.",
        "Coordinated guest lectures from industry alumni in investment banking, asset management, and fintech, providing members with real-world career exposure.",
      ],
    },
  ],
  skills: {
    languages: ["Python", "C++", "Java", "C", "SQL", "JavaScript", "PostgreSQL"],
    frontend: ["React.js", "HTML5", "CSS3", "Flask", "Streamlit"],
    dataScience: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "NLTK",
      "TF-IDF",
      "VADER",
      "FinBERT",
      "LSTM",
      "XGBoost",
      "Matplotlib",
      "Plotly",
      "Seaborn",
    ],
    databases: [
      "PostgreSQL",
      "SQL (joins, CTEs, window functions, stored procedures, indexing)",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Overleaf",
      "OpenWeatherMap API",
      "Power BI",
      "Excel",
      "psycopg2",
    ],
  },
  projects: [
    {
      title: "Global Electronics Sales & Customer Dashboard",
      tech: ["Power BI", "DAX", "Power Query", "Data Modelling"],
      points: [
        "Architected an end-to-end Power BI solution to analyze electronics sales across multiple global regions, processing multi-national customer and transactional datasets.",
        "Engineered a relational data model (Star Schema) in Power BI, integrating diverse data sources such as sales logs, customer demographics, and product inventories.",
        "Developed advanced DAX measures to track KPIs including Year-over-Year (YoY) growth, Profit Margins, and Customer Acquisition Cost (CAC) by region.",
        "Designed interactive visualizations including geographic maps for regional performance, heatmaps for sales density, and drill-through pages for granular customer insights.",
      ],
    },
    {
      title: "AI-Driven Market Regime Detection System",
      tech: ["Python", "LSTM", "XGBoost", "NLP", "FinBERT", "Pandas", "Scikit-learn"],
      points: [
        "Engineered a multimodal classification system predicting market regimes (bull, bear, sideways) by fusing price trends, macroeconomic indicators, and news sentiment.",
        "Built an LSTM-based sequence model to capture momentum and trend dynamics.",
        "Integrated XGBoost to process macroeconomic features (crude oil, gold, VIX) as early-warning signals.",
        "Applied NLP-based sentiment analysis using FinBERT on financial news headlines.",
      ],
    },
    {
      title: "E-Commerce Database System",
      tech: ["Python", "PostgreSQL", "SQL", "Flask", "HTML", "CSS"],
      points: [
        "Designed a fully normalised relational database schema for an e-commerce platform.",
        "Wrote complex SQL queries including multi-table JOINs, CTEs, and window functions to generate business reports.",
        "Built stored procedures and triggers to automate inventory updates and log transactions.",
        "Developed a Flask REST API for CRUD operations and query optimizations with B-tree indexes.",
      ],
    },

    {
      title: "Netflix UI Clone",
      tech: ["React.js", "JavaScript", "CSS3"],
      points: [
        "Built a pixel-accurate front-end clone of Netflix with smooth CSS transitions.",
        "Integrated TMDB API for dynamic rendering of trending, top-rated, and genre categories.",
        "Implemented React Hooks and responsive grid layouts for multi-device support.",
        "Incorporated trailer modal pop-ups using YouTube embeds.",
      ],
    },
    {
      title: "Spotify UI Clone",
      tech: ["React.js", "CSS3", "OAuth 2.0"],
      points: [
        "Faithfully replicated the Spotify sidebar, playlist view, and now-playing bar.",
        "Integrated real user library data, playlists, and artist metadata via Spotify API.",
        "Built audio playback controls (play/pause, skip, volume) using Spotify Playback SDK.",
      ],
    },
    {
      title: "Stock Market Prediction & Optimization Tools",
      tech: ["Python", "Scikit-learn", "Streamlit", "NLTK", "Flask"],
      points: [
        "Engineered a Random Forest-based buy/sell signal pipeline with moving averages via Wolfram API.",
        "Built a Streamlit app implementing Modern Portfolio Theory for Sharpe ratio optimization.",
        "Architected a real-time Flask dashboard aggregating news feeds and scoring sentiment via VADER.",
      ],
    },
    {
      title: "Fake News Detection System",
      tech: ["Python", "Scikit-learn", "NLTK", "Logistic Regression"],
      points: [
        "Developed an NLP pipeline to classify 40,000+ news articles with over 98% accuracy.",
        "Implemented TF-IDF vectorisation, hyperparameter tuning, and ROC-AUC evaluation.",
      ],
    },
  ],
  research: {
    title: "AI-Driven Market Regime Detection in Emerging Markets: A Systematic Review",
    status: "Under Review | IEEE Conference Format (2025)",
    points: [
      "Co-authored a literature review on deep learning, regime-switching models, and financial sentiment analysis (synthesized 22+ peer-reviewed papers).",
      "Mapped LSTM/CNN models, Markov-switching classifiers, and FinBERT-based NLP models.",
      "Identified critical gaps and proposed deep fusion architectures as promising future work.",
    ],
  },
  certifications: [
    {
      title: "SQL (Advanced) Certificate",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/2b770eb710db"
    },
    {
      title: "SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/59f9307df1f8"
    },
    {
      title: "Quantitative Research Job Simulation",
      issuer: "Forage x JPMorgan Chase & Co.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_69a0257cb1f8e4b868415d6a_1774607223418_completion_certificate.pdf"
    }
  ],
  spokenLanguages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Hindi", proficiency: "Fluent" },
    { language: "German", proficiency: "Beginner" }
  ],
  programmingProgress: [
    { name: "Python", level: "Intermediate", percentage: 75 },
    { name: "C / C++", level: "Intermediate", percentage: 70 },
    { name: "HTML / CSS", level: "Intermediate", percentage: 70 },
    { name: "PostgreSQL", level: "Intermediate", percentage: 65 },
    { name: "SQL", level: "Beginner", percentage: 45 },
    { name: "JavaScript", level: "Beginner", percentage: 40 },
    { name: "React.js", level: "Beginner", percentage: 35 },
    { name: "Flask", level: "Low", percentage: 25 },
  ]
};

