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
      <section className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 mb-12">
        <div className="w-40 h-52 sm:w-44 sm:h-56 shrink-0 overflow-hidden rounded-[50%] shadow-xl shadow-sky-950/50 ring-2 ring-sky-400/30 ring-offset-2 ring-offset-[#0f172a] transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src="/image_contours_copy_1.png"
            alt="Lennard Pische"
            width={176}
            height={224}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-0">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-100 mb-2">
            Lennard Pische
          </h1>
          <p className="text-gray-300 text-lg">
            Applied Mathematics & Economics @Harvard
          </p>
        </div>
      </section>

      <p className="text-gray-200 leading-snug mb-12 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center gap-1.5">
          <svg className="w-4 h-4 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <a href="mailto:lenny_pische@college.harvard.edu" className="text-sky-400 hover:text-sky-300">lenny_pische@college.harvard.edu</a>
        </span>
        <span className="inline-flex items-center gap-1.5 text-gray-200">
          <svg className="w-4 h-4 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Cambridge, MA — Rome, Italy
        </span>
      </p>

      {/* Scrollable Experiences */}
      <section className="mb-12">
        <h2 className="text-gray-200 font-medium mt-8 mb-3 text-xl">Experiences</h2>
        <div className="scroll-experiences overflow-x-auto pb-4 -mx-2 px-2 flex gap-4 snap-x snap-mandatory">
          {EXPERIENCES.map((exp, i) => (
            <article
              key={i}
              className="min-w-[280px] max-w-[280px] snap-start rounded-lg border border-gray-600 bg-slate-800/50 p-4 shrink-0"
            >
              <p className="font-medium text-gray-100">{exp.title}</p>
              <p className="text-sm text-gray-400 mt-0.5">
                {exp.org}{exp.location ? ` · ${exp.location}` : ''} · {exp.period}
              </p>
              <p className="text-sm text-gray-300 mt-2 leading-snug line-clamp-4">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
