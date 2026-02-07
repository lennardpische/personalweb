export const metadata = {
  title: 'Education',
  description: 'Lennard Pische — Coursework and education.',
};

type Course = { code: string; topic: string };

const SEMESTERS: { term: string; courses: (Course | null)[] }[] = [
  {
    term: 'Spring 2026',
    courses: [
      { code: 'APCOMP 209B', topic: 'Data Science 2: Advanced Topics in Data Science' },
      { code: 'ECON 1746', topic: 'Financial and Economic Crises of the 21st Century' },
      { code: 'GENED 1080', topic: 'How Music Works: Engineering the Acoustical World' },
      { code: 'STAT 111', topic: 'Statistical Inference' },
    ],
  },
  {
    term: 'Fall 2025',
    courses: [
      { code: 'APCOMP 209A', topic: 'Data Science 1 (graduate level)' },
      { code: 'APMTH 121', topic: 'Optimization: Models and Methods' },
      { code: 'GENED 1120', topic: 'The Political Economy of Globalization' },
      { code: 'STAT 110', topic: 'Probability' },
    ],
  },
  {
    term: 'Spring 2025',
    courses: [
      { code: 'ECON 970', topic: 'Tutorial — The Economics of Trade Policy' },
      { code: 'ECON 1011B', topic: 'Intermediate Macroeconomics: Advanced' },
      { code: 'ENG-SCI 94', topic: 'Entrepreneurship and Innovation: Case Study Perspectives' },
      { code: 'MATH 21A', topic: 'Multivariable Calculus' },
    ],
  },
  {
    term: 'Fall 2024',
    courses: [
      { code: 'ECON 1010A', topic: 'Intermediate Microeconomics' },
      { code: 'ECON 1123', topic: 'Econometrics' },
      { code: 'GENED 1200', topic: 'Justice: Ethical Reasoning in Polarized Times' },
      { code: 'GOV 1790', topic: 'American Foreign Policy' },
    ],
  },
  {
    term: 'Spring 2024',
    courses: [
      { code: 'ECON 10B', topic: 'Principles of Economics (Macroeconomics)' },
      { code: 'EXPOS 20', topic: 'Expository Writing 20' },
      { code: 'FYSEMR 42C', topic: 'The Role of Government' },
      { code: 'GOV 40', topic: 'International Conflict and Cooperation' },
    ],
  },
  {
    term: 'Fall 2023',
    courses: [
      { code: 'COMPSCI 50', topic: 'Computer Science' },
      { code: 'EASTD 199', topic: 'China and the African Continent' },
      { code: 'GOV 50', topic: 'Data Science for the Social Sciences' },
      { code: 'MATH 22A', topic: 'Vector Calculus and Linear Algebra I' },
    ],
  },
];

export default function EducationPage() {
  return (
    <div className="max-w-[60ch] mx-auto w-full">
      <h1 className="font-medium pt-4 pb-2 text-3xl text-gray-900 mb-10">
        Education
      </h1>

      <section className="mb-10 space-y-6 text-gray-700 text-sm leading-snug">
        <div className="flex gap-3 items-center">
          <img
            src="/Harvard_University_coat_of_arms.svg"
            alt=""
            className="w-7 h-7 object-contain shrink-0"
          />
          <div>
            <p className="font-medium text-gray-900">Harvard University</p>
            <p>Cambridge, MA</p>
            <p>A.B. Applied Mathematics & Economics · May 2027</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src="/fudan.jpeg"
            alt=""
            className="w-7 h-7 object-contain shrink-0 rounded-sm"
          />
          <div>
            <p className="font-medium text-gray-900">Fudan University</p>
            <p>Shanghai, China · Harvard Summer School Jun – Aug 2025</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-gray-800 font-medium text-lg mb-4">Courses</h2>
        <div className="space-y-8">
          {SEMESTERS.map((sem) => (
            <div key={sem.term}>
              <h3 className="text-gray-600 font-medium text-sm mb-2">{sem.term}</h3>
              <ul className="space-y-1.5 text-sm">
                {sem.courses.map((course, i) =>
                  course ? (
                    <li key={i} className="text-gray-700 flex flex-wrap gap-x-2 gap-y-0">
                      {course.code !== '—' && (
                        <span className="text-gray-500 shrink-0 font-medium">{course.code}</span>
                      )}
                      <span>{course.topic}</span>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
