/** Structured resume content (parsed from Pische_Lennard_Resume.pdf). */

export const RESUME = {
  name: 'Lennard Pische',
  contact: {
    location: 'Cambridge, MA',
    linkedin: 'https://linkedin.com/in/lennard-pische',
    github: 'https://github.com/lennardpische',
  },
  education: [
    {
      org: 'Harvard University',
      location: 'Cambridge, MA',
      degree: 'A.B. Applied Mathematics & Economics · May 2027',
      date: '',
      logo: '/Harvard_University_coat_of_arms.svg',
      bullets: [] as const,
    },
    {
      org: 'Fudan University',
      location: 'Shanghai, China',
      program: 'Harvard Summer School Jun – Aug 2025',
      date: '',
      logo: '/fudan.jpeg',
      bullets: [] as const,
    },
  ],
  experience: [
    {
      org: 'Institute for Quantitative Social Science (IQSS)',
      location: 'Cambridge, MA',
      role: 'Undergraduate Research Team Lead — Prof. Gary King',
      date: 'Oct 2024 – Present',
      logo: '/IQSS.png',
      bullets: [
        'ML pipelines and experimental workflows for research; data validation and team coordination.',
      ] as const,
    },
    {
      org: 'Department of Government & Economics, Harvard University',
      location: 'Cambridge, MA',
      role: 'Course Assistant — GOV 50 (Data Science); ECON 1011B (Advanced Macroeconomics)',
      date: 'Sept 2024 – Present',
      logo: '/Harvard_University_coat_of_arms.svg',
      bullets: [] as const,
    },
    {
      org: 'CSIS — Indonesia Bureau of Economic Research',
      location: 'Jakarta, Indonesia',
      role: 'Summer Fellow',
      date: 'Jun – Aug 2024',
      logo: '/CSIS_Indonesia_Logo.png',
      bullets: [
        'Trade and foreign aid panel data analysis; policy brief and chapter for CSIS journal.',
      ] as const,
    },
  ],
  extracurriculars: [
    {
      org: 'Behavioral Strategy Group',
      location: '',
      role: 'Analyst',
      date: 'Jan 2026 – Present',
      logo: '/BSGlogofinal.png',
      bullets: [
        'Strategy and behavioral insights for organizational decision-making.',
      ] as const,
    },
    {
      org: 'Harvard Model United Nations',
      location: '',
      role: 'Director of Business Development',
      date: 'Sept 2023 – Feb 2025',
      logo: '/HMUN.png',
      bullets: [
        'Drove sponsor outreach and revenue for one of the largest collegiate Model UN conferences.',
      ] as const,
    },
    {
      org: 'Harvard Undergraduate Foreign Policy Initiative',
      location: '',
      role: 'Deputy Director of Corporate Sponsorships (Board)',
      date: 'Jan 2024 – Dec 2024',
      logo: '/harvard_undergraduate_foreign_policy_initiative_logo.jpeg',
      bullets: [
        'Led corporate sponsorship strategy and partnerships for student-run foreign policy conference and programming.',
      ] as const,
    },
    {
      org: 'The Harvard Crimson',
      location: '',
      role: 'Staff Writer',
      date: 'Sept 2023 – Oct 2024',
      logo: '/harvardcrimson.png',
      bullets: [
        'Reported and wrote stories for Harvard’s daily student newspaper.',
      ] as const,
    },
  ],
  skills: {
    technical:
      'R, Stata, SQL, Python (pandas, NumPy, Matplotlib), MATLAB, C/C++, Tableau, Excel, LaTeX',
    languages: 'Italian (Native), English (Bilingual), Spanish (Intermediate)',
    interests: 'Commercial aviation, travel, photography, track & field',
  },
} as const;
