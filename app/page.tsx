import Image from 'next/image';

export default function HomePage() {
  const experiences = [
    {
      title: 'Experience 1',
      org: 'Placeholder',
      period: '2024 – Present',
      description: 'Short description of your role and impact.'
    },
    {
      title: 'Experience 2',
      org: 'Placeholder',
      period: '2023 – 2024',
      description: 'Short description of your role and impact.'
    },
    {
      title: 'Experience 3',
      org: 'Placeholder',
      period: '2022 – 2023',
      description: 'Short description of your role and impact.'
    }
  ];

  return (
    <div className="max-w-[60ch] mx-auto w-full">
      {/* Hero: image and name aligned */}
      <section className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-10">
        <div className="w-full max-w-[200px] sm:max-w-[240px] shrink-0">
          <Image
            src="/image_contours_copy.png"
            alt="Lennard Pische"
            width={280}
            height={280}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-1">
            Lennard Pische
          </h1>
          <p className="text-gray-600 text-lg">
            Applied Mathematics & Economics @Harvard
          </p>
        </div>
      </section>

      <p className="text-gray-700 leading-snug mb-12">
        Passionate about mathematics, computer science, and minimalist design.
      </p>

      {/* Scrollable Experiences */}
      <section className="mb-12">
        <h2 className="text-gray-800 font-medium mt-8 mb-3 text-xl">Experiences</h2>
        <div className="scroll-experiences overflow-x-auto pb-4 -mx-2 px-2 flex gap-4 snap-x snap-mandatory">
          {experiences.map((exp, i) => (
            <article
              key={i}
              className="min-w-[280px] max-w-[280px] snap-start rounded-lg border border-gray-200 bg-gray-50/50 p-4 shrink-0"
            >
              <p className="font-medium text-gray-900">{exp.title}</p>
              <p className="text-sm text-gray-500 mt-0.5">{exp.org} · {exp.period}</p>
              <p className="text-sm text-gray-600 mt-2 leading-snug">{exp.description}</p>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
