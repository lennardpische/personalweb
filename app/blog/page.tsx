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
      <p className="text-gray-700 leading-snug mb-8">
        Posts coming soon.
      </p>

      <section className="space-y-4">
        <p className="text-gray-500 text-sm">
          No posts yet. Check back later.
        </p>
      </section>
    </div>
  );
}
