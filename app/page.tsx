import { HeroSection } from './components/HeroSection';

const HIGHLIGHTS = [
  { title: 'Research', line: 'AI for policy evaluation, 10k+ labels for RCTs @ IQSS' },
  { title: 'Policy', line: 'Summer Fellow @ CSIS Indonesia' },
  { title: 'Teaching', line: 'Course Assistant, Data Science & Macroeconomics' },
  { title: 'Extracurricular', line: 'Strategy Analyst @ BSG' },
];

export default function HomePage() {
  return (
    <div className="max-w-[60ch] mx-auto w-full">
      <HeroSection />

      <hr className="border-stone-200/80 my-8" role="separator" />

      <section className="mb-10">
        <h2 className="text-stone-800 font-medium mb-3 text-base uppercase tracking-wide">Highlights</h2>
        <ul className="space-y-2 text-sm">
          {HIGHLIGHTS.map((item, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-medium text-stone-900 shrink-0 w-24">{item.title}</span>
              <span className="text-stone-600">{item.line}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
