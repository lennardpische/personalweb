/** Structured resume content (parsed from Pische_Lennard_Resume.pdf). */

export const RESUME = {
  name: 'Lennard Pische',
  contact: {
    location: 'Cambridge, MA',
    email: 'lennardpische@outlook.com',
    linkedin: 'https://linkedin.com/in/lennard-pische',
    github: 'https://github.com/lennardpische',
  },
  education: [
    {
      org: 'Harvard University',
      location: 'Cambridge, MA',
      degree: 'A.B. Applied Mathematics & Economics; Secondary in Government',
      date: 'May 2027',
      bullets: [
        'Relevant Coursework: Probability, Data Science, Advanced Macroeconomics, Neural Networks, Optimization, Multivariable Calculus, Statistical Inference',
        'Honors: Scholarship Recipient, KMF Professional Excellence Program',
      ],
    },
    {
      org: 'Fudan University',
      location: 'Shanghai, China',
      program: 'Harvard Summer School',
      date: 'Jun – Aug 2025',
      bullets: [
        'Completed coursework in economics and history; engaged with U.S.–China policy stakeholders (e.g., AmCham Shanghai)',
      ],
    },
  ],
  experience: [
    {
      org: 'Institute for Quantitative Social Science (IQSS)',
      location: 'Cambridge, MA',
      role: 'Undergraduate Research Team Lead — Prof. Gary King',
      date: 'Oct 2024 – Present',
      bullets: [
        'Trained ML pipelines for randomized controlled trials; increased classifier precision and automated downstream classification tasks',
        'Standardized experimental glossaries and automated team workflows using Google Apps Script and customized XML interfaces, improving pipeline throughput',
        'Implemented data validation checks and inter-annotator agreement diagnostics to improve labeling consistency',
      ],
    },
    {
      org: 'CSIS — Indonesia Bureau of Economic Research',
      location: 'Jakarta, Indonesia',
      role: 'Summer Fellow',
      date: 'Jun – Aug 2024',
      bullets: [
        'Processed 15+ years of trade and foreign aid panel data in R and Stata to identify early signals of premature deindustrialization; findings featured in a policy brief',
        'Synthesized 100+ academic and policy sources and conducted interviews with diplomatic and embassy staff',
        'Contributed empirical analysis and visualizations to a full-length chapter in CSIS’s policy journal',
      ],
    },
    {
      org: 'Department of Government & Economics, Harvard University',
      location: 'Cambridge, MA',
      role: 'Course Assistant — GOV 50 (Data Science); ECON 1011B (Advanced Macroeconomics)',
      date: 'Sept 2024 – Present',
      bullets: [
        'Led sections and office hours in statistical programming (R) and advanced macroeconomic theory; supported measurable improvement in student performance across class cohorts (~25%)',
        'Redesigned problem sets and instructional materials in coordination with faculty',
      ],
    },
  ],
  projects: [
    {
      title: 'Optimal Pricing for Carbon-Efficient Flights',
      course: 'APCOMP 209A',
      date: 'December 2025',
      bullets: [
        'Merged DOT DB1B and T–100 aviation datasets to estimate airfare determination using gradient-boosted decision tree regression, achieving train R² ≈ 0.60 and outperforming linear baselines',
        'Engineered route- and aircraft-level carbon intensity measures (CO2 per seat-km and passenger-km) following ICAO emissions accounting methodology',
        'Found no economically meaningful relationship between emissions intensity and fares after controlling for carrier, aircraft type, and route characteristics',
      ],
    },
    {
      title: 'Air Traffic Liberalization and Consumer Welfare',
      course: 'ECON 970',
      date: 'May 2025',
      bullets: [
        'Estimated difference-in-differences models on international route-level panels (2015–2020) to identify passenger demand responses to U.S.–Brazil Open Skies liberalization',
        'Specified route and year fixed effects with standard errors clustered at the route level to account for serial correlation and unobserved heterogeneity',
        'Documented short-run increases in passenger volumes that attenuate under macroeconomic shocks; discussed welfare interpretation and identification limits',
      ],
    },
  ],
  skills: {
    technical:
      'R, Stata, SQL, Python (pandas, NumPy, Matplotlib), MATLAB, C/C++, Tableau, Excel, LaTeX',
    languages: 'Italian (Native), English (Bilingual), Spanish (Intermediate)',
    interests: 'Commercial aviation, travel, photography, track & field',
  },
} as const;
