import Image from 'next/image';

const EXPERIENCES = [
  {
    title: 'Undergraduate Research Team Lead — Prof. Gary King',
    org: 'Institute for Quantitative Social Science (IQSS)',
    location: 'Cambridge, MA',
    period: 'Oct 2024 – Present',
    description: 'Trained ML pipelines to detect and reduce conspiracy content online (10,000+ observations); increased classifier precision by 50%. Standardized glossaries and automated workflows; implemented validation and inter-annotator agreement diagnostics.',
  },
  {
    title: 'Summer Fellow',
    org: 'CSIS — Indonesia Bureau of Economic Research',
    location: 'Jakarta, Indonesia',
    period: 'Jun – Aug 2024',
    description: 'Processed 15+ years of trade and foreign aid panel data in R/Stata; findings featured in policy brief. Synthesized 100+ sources; contributed analysis and visualizations to CSIS policy journal chapter.',
  },
  {
    title: 'Course Assistant — GOV 50 (Data Science); ECON 1011B (Advanced Macroeconomics)',
    org: 'Department of Government & Economics, Harvard University',
    location: 'Cambridge, MA',
    period: 'Sept 2024 – Present',
    description: 'Led sections and office hours in R and advanced macroeconomic theory; supported ~25% improvement in student performance. Redesigned problem sets and instructional materials with faculty.',
  },
  {
    title: 'Policy Associate; Deputy Director, Corporate Sponsorships',
    org: 'Harvard Undergraduate Foreign Policy Initiative',
    location: 'Cambridge, MA',
    period: 'Jan 2024 – Oct 2024',
    description: 'Co-led 5-person team on AI in nuclear regulation; authored waste management section of presentation to Nuclear Regulatory Commissioner. Drafted regulatory brief; built 20+ sponsor relationships.',
  },
  {
    title: 'Director of Business Development',
    org: 'Harvard Model United Nations',
    location: 'Boston, MA',
    period: 'Sept 2024 – Present',
    description: 'Built relationships with 10+ corporate partners for 4,000-attendee conference. Negotiated sponsor contracts; reduced logistics costs 20%, increased revenue 10%.',
  },
  {
    title: 'Staff Writer',
    org: 'The Harvard Crimson',
    location: 'Cambridge, MA',
    period: 'Sept 2023 – Jan 2025',
    description: 'Published 10+ investigative and editorial articles on campus governance; interviewed 500+ stakeholders. Prompted rescheduling of student government elections.',
  },
];

export default function HomePage() {
  return (
    <div className="max-w-[60ch] mx-auto w-full">
      {/* Hero: image and name aligned */}
      <section className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-10">
        <div className="w-full max-w-[200px] sm:max-w-[240px] shrink-0">
          <Image
            src="/image_contours_copy.png"
            alt="Lennard Pische"
            width={280}
            height={280}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-1">
            Lennard Pische
          </h1>
          <p className="text-gray-600 text-lg">
            Applied Mathematics & Economics @Harvard
          </p>
        </div>
      </section>

      <p className="text-gray-700 leading-snug mb-12 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center gap-1.5">
          <svg className="w-4 h-4 text-gray-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <a href="mailto:lenny_pische@college.harvard.edu" className="text-blue-500 hover:text-blue-700">lenny_pische@college.harvard.edu</a>
        </span>
        <span className="inline-flex items-center gap-1.5 text-gray-700">
          <svg className="w-4 h-4 text-gray-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Cambridge, MA — Rome, Italy
        </span>
      </p>

      {/* Scrollable Experiences */}
      <section className="mb-12">
        <h2 className="text-gray-800 font-medium mt-8 mb-3 text-xl">Experiences</h2>
        <div className="scroll-experiences overflow-x-auto pb-4 -mx-2 px-2 flex gap-4 snap-x snap-mandatory">
          {EXPERIENCES.map((exp, i) => (
            <article
              key={i}
              className="min-w-[280px] max-w-[280px] snap-start rounded-lg border border-gray-200 bg-gray-50/50 p-4 shrink-0"
            >
              <p className="font-medium text-gray-900">{exp.title}</p>
              <p className="text-sm text-gray-500 mt-0.5">
                {exp.org}{exp.location ? ` · ${exp.location}` : ''} · {exp.period}
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-snug line-clamp-4">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
