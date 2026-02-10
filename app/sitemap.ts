const SITE_URL = 'https://lennardpische.com';

const ROUTES = ['', '/portfolio', '/travel', '/education', '/resume', '/blog', '/maintenance'];

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
}
