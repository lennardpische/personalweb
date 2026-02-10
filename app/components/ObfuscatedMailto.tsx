'use client';

import { useEffect, useState } from 'react';

// Stored as [local, domain] so the full address never appears in one string in the repo
const ADDRESSES: Record<string, [string, string]> = {
  primary: ['lenny_pische', 'college.harvard.edu'],
  outlook: ['lennardpische', 'outlook.com'],
};

function buildMailto(which: keyof typeof ADDRESSES): string {
  const [local, domain] = ADDRESSES[which];
  return `mailto:${local}${String.fromCharCode(64)}${domain}`;
}

function buildDisplay(which: keyof typeof ADDRESSES): string {
  const [local, domain] = ADDRESSES[which];
  return `${local}${String.fromCharCode(64)}${domain}`;
}

type Props = {
  which: keyof typeof ADDRESSES;
  children?: React.ReactNode;
  showEmail?: boolean;
  className?: string;
};

export function ObfuscatedMailto({ which, children, showEmail, className }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const href = mounted ? buildMailto(which) : '#';
  const display = showEmail && mounted ? buildDisplay(which) : null;

  return (
    <a href={href} className={className}>
      {display ?? children}
    </a>
  );
}
