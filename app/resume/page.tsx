import { RESUME } from './resume-data';
import {
  ResumeSection,
  ResumeCard,
  ResumeItem,
} from './ResumeTimeline';

export const metadata = {
  title: 'Experience',
  description:
    'Lennard Pische — Experience and extracurriculars.',
};

export default function ResumePage() {
  const { name, contact, experience, extracurriculars, skills } = RESUME;

  return (
    <div className="max-w-[56ch] mx-auto w-full">
      <header className="mb-10">
        <h1 className="font-medium pt-4 pb-2 text-3xl text-gray-900">
          Experience
        </h1>
        <p className="text-gray-700 leading-snug">
          More on{' '}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:text-sky-700"
          >
            LinkedIn
          </a>
          .
        </p>
      </header>

      <div className="space-y-12">
        <ResumeSection title="Relevant Experience" delay={0}>
          {experience.map((exp, i) => (
            <ResumeCard key={i} index={i}>
              <ResumeItem
                org={exp.org}
                location={exp.location}
                role={exp.role}
                date={exp.date}
                bullets={exp.bullets}
                logo={'logo' in exp ? exp.logo : undefined}
              />
            </ResumeCard>
          ))}
        </ResumeSection>

        <ResumeSection title="Extracurriculars" delay={0.05}>
          {extracurriculars.map((ext, i) => (
            <ResumeCard key={i} index={i}>
              <ResumeItem
                org={ext.org}
                location={ext.location}
                role={ext.role}
                date={ext.date}
                bullets={ext.bullets}
                logo={'logo' in ext ? ext.logo : undefined}
              />
            </ResumeCard>
          ))}
        </ResumeSection>

        <ResumeSection title="Skills" delay={0.1}>
          <ResumeCard index={0}>
            <dl className="text-sm space-y-2">
              <div>
                <dt className="font-medium text-gray-700">Technical</dt>
                <dd className="text-gray-600">{skills.technical}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-700">Languages</dt>
                <dd className="text-gray-600">{skills.languages}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-700">Interests</dt>
                <dd className="text-gray-600">{skills.interests}</dd>
              </div>
            </dl>
          </ResumeCard>
        </ResumeSection>
      </div>
    </div>
  );
}
