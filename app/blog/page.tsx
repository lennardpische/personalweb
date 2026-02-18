export const metadata = {
  title: 'Blog',
  description: 'Lennard Pische — Blog and writing.',
};

export default function BlogPage() {
  return (
    <div className="max-w-[60ch] mx-auto w-full">
      <h1 className="font-medium pt-2 pb-1 text-2xl text-stone-900">
        Blog
      </h1>
      <p className="text-stone-600 text-sm mb-8">
        Writing on tech, tools, and other topics.
      </p>

      <section className="space-y-4">
        <div className="rounded-lg border border-stone-200/90 bg-white/80 p-5">
          <h2 className="text-base font-medium text-stone-900">Coming soon</h2>
          <p className="text-stone-500 text-sm mt-1">
            Posts will appear here. Check back later.
          </p>
        </div>
      </section>
    </div>
  );
}
