'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.4 },
};

export function ResumeSection({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      className="relative pl-6 border-l-2 border-sky-200 ml-1 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay }}
    >
      <span className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-sky-400 border-2 border-white shadow-sm" />
      <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-700 mb-4 -mt-0.5">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </motion.section>
  );
}

export function ResumeCard({
  children,
  index = 0,
}: {
  children: ReactNode;
  index?: number;
}) {
  return (
    <motion.div
      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm shadow-gray-100/80"
      {...fadeIn}
      transition={{ ...fadeIn.transition, delay: index * 0.06 }}
    >
      {children}
    </motion.div>
  );
}

export function ResumeItem({
  org,
  location,
  role,
  date,
  bullets,
  degree,
  program,
  logo,
}: {
  org: string;
  location: string;
  role?: string;
  date: string;
  bullets: readonly string[];
  degree?: string;
  program?: string;
  logo?: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-center gap-3 min-w-0">
          {logo && (
            <img
              src={logo}
              alt=""
              className="w-10 h-10 rounded-lg object-contain shrink-0 bg-gray-50 border border-gray-100"
              width={40}
              height={40}
            />
          )}
          <div className="min-w-0">
            <span className="font-medium text-gray-900">{org}</span>
            {location && <span className="text-gray-500 text-sm"> · {location}</span>}
          </div>
        </div>
        <span className="text-gray-500 text-sm shrink-0">{date}</span>
      </div>
      {(role || degree || program) && (
        <p className="text-gray-700 text-sm">
          {role}
          {degree && (
            <>
              {role ? ' — ' : ''}
              {degree}
            </>
          )}
          {program && !degree && !role && program}
        </p>
      )}
      {bullets.length > 0 && (
        <ul className="list-disc list-inside text-gray-600 text-sm leading-snug space-y-1 mt-2 ml-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ProjectCard({
  title,
  course,
  date,
  bullets,
  logo,
  index = 0,
}: {
  title: string;
  course: string;
  date: string;
  bullets: readonly string[];
  logo?: string;
  index?: number;
}) {
  return (
    <ResumeCard index={index}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <div className="flex items-center gap-3 min-w-0">
          {logo && (
            <img
              src={logo}
              alt=""
              className="w-10 h-10 rounded-lg object-contain shrink-0 bg-gray-50 border border-gray-100"
              width={40}
              height={40}
            />
          )}
          <span className="font-medium text-gray-900">{title}</span>
        </div>
        <span className="text-gray-500 text-sm shrink-0">{date}</span>
      </div>
      <p className="text-sky-600 text-xs font-medium">{course}</p>
      {bullets.length > 0 && (
        <ul className="list-disc list-inside text-gray-600 text-sm leading-snug space-y-1 mt-2 ml-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </ResumeCard>
  );
}
