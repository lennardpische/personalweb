export const metadata = {
  title: 'Portfolio',
  description: 'Lennard Pische — Projects and code.'
};

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  homepage: string | null;
  updated_at: string;
};

const REPO_TAGLINES: Record<string, string> = {
  personalweb: 'This site — Next.js, TypeScript.',
  FedSentinel: 'Federal reserve & sentiment analysis.',
  SpotifyParser: 'Spotify data parsing & analysis. Halted — Spotify halted third-party API integrations in Jan 2025.',
  AirTrafficLiberalization: 'Air traffic liberalization (academic / TeX).',
  OptimalCarbonPricing: 'Optimal carbon pricing (academic / economics).',
  SpotifyWrapped: 'Spotify Wrapped–style analytics.',
};

type ProjectStatus = 'active' | 'complete' | 'halted';

const REPO_STATUS: Record<string, ProjectStatus> = {
  personalweb: 'active',
  SpotifyParser: 'halted',
  FedSentinel: 'complete',
  AirTrafficLiberalization: 'complete',
  OptimalCarbonPricing: 'complete',
  SpotifyWrapped: 'halted',
};

function formatDate(s: string) {
  try {
    const d = new Date(s);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    'https://api.github.com/users/lennardpische/repos?sort=updated&per_page=15',
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.filter((r: Repo) => r.name !== 'lennardpische');
}

export default async function PortfolioPage() {
  const repos = await getRepos();

  return (
    <div className="max-w-[60ch] mx-auto w-full">
      <h1 className="font-medium pt-4 pb-2 text-3xl text-gray-100">
        Portfolio
      </h1>
      <p className="text-gray-200 leading-snug mb-8">
        Projects and code. More on{' '}
        <a
          href="https://github.com/lennardpische"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300"
        >
          GitHub
        </a>
        .
      </p>

      <section className="space-y-5">
        {repos.length === 0 ? (
          <p className="text-gray-400">No public repos to show yet.</p>
        ) : (
          repos.map((repo) => {
            const status = REPO_STATUS[repo.name] ?? 'complete';
            const showLiveDemo = repo.homepage && repo.name !== 'personalweb';
            return (
              <article
                key={repo.name}
                className="border border-gray-600 rounded-lg p-4 bg-slate-800/50"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-gray-100 font-medium text-lg">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300"
                    >
                      {repo.name}
                    </a>
                  </h2>
                  <span className="flex items-center gap-2">
                    <span
                      className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                        status === 'active'
                          ? 'bg-green-900/60 text-green-200'
                          : status === 'halted'
                            ? 'bg-amber-900/60 text-amber-200'
                            : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {status}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {repo.language ?? '—'} · {formatDate(repo.updated_at)}
                    </span>
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-snug mt-1">
                  {REPO_TAGLINES[repo.name] ??
                    repo.description ??
                    'Code and experiments.'}
                </p>
                {showLiveDemo && (
                  <a
                    href={repo.homepage!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sky-400 hover:text-sky-300 mt-1 inline-block"
                  >
                    Live demo →
                  </a>
                )}
              </article>
            );
          })
        )}
      </section>
    </div>
  );
}
