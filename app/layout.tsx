import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://next-mdx-blog.vercel.app'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Lennard Pische',
    template: '%s | Lennard Pische'
  },
  description: 'Passionate about mathematics, computer science, and minimalist design.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight bg-white text-gray-900">
        <Header />
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 px-8 pb-8">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-[60ch] mx-auto w-full px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline text-gray-900">
          <span className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold shrink-0">
            LP
          </span>
        </Link>
        <nav>
          <Link
            href="/portfolio"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const links = [
    { name: 'x', url: '#' },
    { name: 'youtube', url: '#' },
    { name: 'linkedin', url: '#' },
    { name: 'github', url: '#' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
