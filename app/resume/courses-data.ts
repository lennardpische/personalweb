export type Course = { code: string; topic: string };

export const SEMESTERS: { term: string; courses: (Course | null)[] }[] = [
  { term: 'Spring 2026', courses: [
    { code: 'APCOMP 209B', topic: 'Data Science 2: Advanced Topics in Data Science' },
    { code: 'STAT 111', topic: 'Statistical Inference' },
  ]},
  { term: 'Fall 2025', courses: [
    { code: 'APCOMP 209A', topic: 'Data Science 1 (graduate level)' },
    { code: 'APMTH 121', topic: 'Optimization: Models and Methods' },
    { code: 'STAT 110', topic: 'Probability' },
  ]},
  { term: 'Spring 2025', courses: [
    { code: 'ECON 970', topic: 'Tutorial — The Economics of Trade Policy' },
    { code: 'ECON 1011B', topic: 'Intermediate Macroeconomics: Advanced' },
    { code: 'MATH 21A', topic: 'Multivariable Calculus' },
  ]},
  { term: 'Fall 2024', courses: [
    { code: 'ECON 1010A', topic: 'Intermediate Microeconomics' },
    { code: 'ECON 1123', topic: 'Econometrics' },
  ]},
  { term: 'Spring 2024', courses: [
    { code: 'ECON 10B', topic: 'Principles of Economics (Macroeconomics)' },
  ]},
  { term: 'Fall 2023', courses: [
    { code: 'COMPSCI 50', topic: 'Computer Science' },
    { code: 'GOV 50', topic: 'Data Science for the Social Sciences' },
    { code: 'MATH 22A', topic: 'Vector Calculus and Linear Algebra I' },
  ]},
];
