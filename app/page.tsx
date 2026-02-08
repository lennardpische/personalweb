import { HeroSection } from './components/HeroSection';

const HIGHLIGHTS = [
  { title: 'Research', line: 'AI for policy evaluation, 10k+ labels for RCTs @ IQSS' },
  { title: 'Policy', line: 'Summer Fellow @ CSIS Indonesia' },
  { title: 'Teaching', line: 'Course Assistant, Data Science & Macroeconomics' },
];

export default function HomePage() {
  return (
    <div className="max-w-[60ch] mx-auto w-full">
      <HeroSection />

      <hr className="border-gray-200 my-10" role="separator" />

      <section className="mb-12">
        <h2 className="text-gray-800 font-medium mb-4 text-xl">Highlights</h2>
        <ul className="space-y-3">
          {HIGHLIGHTS.map((item, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-medium text-gray-900 shrink-0">{item.title}</span>
              <span className="text-gray-600 text-sm sm:text-base">{item.line}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
