export const metadata = {
  title: 'Blog',
  description: 'Lennard Pische — Blog and writing.',
};

export default function BlogPage() {
  return (
    <div className="max-w-[60ch] mx-auto w-full">
      <h1 className="font-medium pt-4 pb-2 text-3xl text-gray-900">
        Blog
      </h1>
      <p className="text-gray-700 leading-snug mb-10">
        Writing on tech, tools, and other topics.
      </p>

      <section className="space-y-4">
        <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
          <h2 className="text-lg font-medium text-gray-900">Coming soon</h2>
          <p className="text-gray-500 text-sm mt-1">
            Posts will appear here. Check back later.
          </p>
        </div>
      </section>
    </div>
  );
}
