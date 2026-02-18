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

const REPO_DESCRIPTIONS: Record<string, string> = {
  personalweb:
    'This site — Next.js, TypeScript. Built and updated with Cursor.',
  FedSentinel:
    'Analyzes Federal Reserve communications and news sentiment to track policy tone over time. Python, NLP, and public data.',
  SpotifyParser:
    'Parsed and analyzed Spotify listening history and playlists. Halted — API access was halted Jan 2026; will continue Feb 13.',
  AirTrafficLiberalization:
    'Academic paper on air traffic liberalization and market effects. Analysis in R; write-up with figures and references.',
  OptimalCarbonPricing:
    'Carbon pricing prediction using gradient boosted decision trees and log-linear modeling. Python.',
  SpotifyWrapped:
    'Personal “Spotify Wrapped”–style stats from listening history. Halted after Spotify’s API changes in 2026.',
  AgePoliticalIdeology:
    'Analysis of age and political ideology. R Markdown.',
  'age-political-ideology':
    'Analysis of age and political ideology. R Markdown.',
};

type ProjectStatus = 'active' | 'complete' | 'halted';

const REPO_STATUS: Record<string, ProjectStatus> = {
  personalweb: 'active',
  SpotifyParser: 'active',
  FedSentinel: 'active',
  AirTrafficLiberalization: 'complete',
  OptimalCarbonPricing: 'complete',
  SpotifyWrapped: 'halted',
  AgePoliticalIdeology: 'complete',
  'age-political-ideology': 'complete',
};

/** Override GitHub-detected language when it’s wrong or we want to be more specific. */
const REPO_LANGUAGE: Record<string, string> = {
  personalweb: 'TypeScript',
  AirTrafficLiberalization: 'R',
  OptimalCarbonPricing: 'Python',
  AgePoliticalIdeology: 'R Markdown',
  'age-political-ideology': 'R Markdown',
};

/** Override displayed date (e.g. last meaningful update or completion). */
const REPO_DATE: Record<string, string> = {
  AgePoliticalIdeology: 'Dec 2023',
  'age-political-ideology': 'Dec 2023',
  OptimalCarbonPricing: 'Dec 2025',
  AirTrafficLiberalization: 'May 2025',
  SpotifyParser: 'Jan 2026',
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
      <h1 className="font-medium pt-2 pb-1 text-2xl text-stone-900">
        Portfolio
      </h1>
      <p className="text-stone-600 text-sm mb-6">
        Projects and code. More on{' '}
        <a
          href="https://github.com/lennardpische"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-blue-900"
        >
          GitHub
        </a>
        .
      </p>

      <section className="space-y-5">
        {repos.length === 0 ? (
          <p className="text-gray-600">No public repos to show yet.</p>
        ) : (
          repos.map((repo) => {
            const status = REPO_STATUS[repo.name] ?? 'complete';
            const showLiveDemo = repo.homepage && repo.name !== 'personalweb';
            return (
              <article
                key={repo.name}
                className="border border-stone-200/90 rounded-lg p-4 bg-white/80"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-gray-900 font-medium text-lg">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:text-blue-900"
                    >
                      {repo.name}
                    </a>
                  </h2>
                  <span className="flex items-center gap-2">
                    <span
                      className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                        status === 'active'
                          ? 'bg-blue-100 text-blue-800'
                          : status === 'halted'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {status}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {REPO_LANGUAGE[repo.name] ?? repo.language ?? '—'} · {REPO_DATE[repo.name] ?? formatDate(repo.updated_at)}
                    </span>
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-snug mt-1">
                  {REPO_DESCRIPTIONS[repo.name] ??
                    repo.description ??
                    'Code and experiments.'}
                </p>
                {showLiveDemo && (
                  <a
                    href={repo.homepage!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-800 hover:text-blue-900 mt-1 inline-block"
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
