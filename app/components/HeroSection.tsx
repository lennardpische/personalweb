'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 mb-8">
      <motion.div
        className="w-full max-w-[200px] sm:max-w-[240px] shrink-0"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Image
          src="/image_contours_copy_1.png"
          alt="Lennard Pische"
          width={280}
          height={280}
          className="w-full h-auto object-contain"
        />
      </motion.div>
      <motion.div
        className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-0"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
      >
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-2">
          Lennard Pische
        </h1>
        <p className="text-gray-600 text-lg">
          Applied Mathematics & Economics @Harvard
        </p>
      </motion.div>
    </section>
  );
}
