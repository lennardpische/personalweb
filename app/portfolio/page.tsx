export const metadata = {
  title: 'Portfolio',
  description: 'Lennard Pische — Portfolio and projects.'
};

export default function PortfolioPage() {
  return (
    <div className="max-w-[60ch] mx-auto w-full">
      <h1 className="font-medium pt-4 pb-2 text-3xl text-gray-900">
        Portfolio
      </h1>
      <p className="text-gray-700 leading-snug mb-8">
        Projects and work in progress. More coming soon.
      </p>

      <section className="space-y-6">
        <article className="border border-gray-200 rounded-lg p-4 bg-gray-50/50">
          <h2 className="text-gray-800 font-medium mt-0 mb-2 text-lg">Project placeholder</h2>
          <p className="text-gray-600 text-sm leading-snug">
            Add your projects here. Same style as the homepage: clean, minimal, readable.
          </p>
        </article>
      </section>
    </div>
  );
}
