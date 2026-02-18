import { RESUME } from './resume-data';
import { SEMESTERS } from './courses-data';
type Course = { code: string; topic: string };
import {
  ResumeSection,
  ResumeCard,
  ResumeItem,
} from './ResumeTimeline';

export const metadata = {
  title: 'Experience',
  description:
    'Lennard Pische — Education, experience, and extracurriculars.',
};

export default function ResumePage() {
  const { contact, education, experience, extracurriculars, skills } = RESUME;

  return (
    <div className="max-w-[56ch] mx-auto w-full">
      <header className="mb-8">
        <h1 className="font-medium pt-2 pb-1 text-2xl text-stone-900">
          Experience
        </h1>
        <p className="text-stone-600 text-sm">
          Education, work, and more on{' '}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-900"
          >
            LinkedIn
          </a>
          .
        </p>
      </header>

      <div className="space-y-12">
        <ResumeSection title="Education" delay={0} id="education">
          {education.map((ed, i) => (
            <ResumeCard key={i} index={i}>
              <ResumeItem
                org={ed.org}
                location={ed.location}
                degree={'degree' in ed ? ed.degree : undefined}
                program={'program' in ed ? ed.program : undefined}
                date={ed.date}
                bullets={ed.bullets}
                logo={'logo' in ed ? ed.logo : undefined}
              />
            </ResumeCard>
          ))}
          <div className="mt-4">
            <h3 className="text-stone-700 font-medium text-xs uppercase tracking-wider mb-3">Courses</h3>
            <ul className="space-y-1 text-sm text-stone-600">
              {SEMESTERS.flatMap((sem) => sem.courses).filter((c): c is Course => c != null).map((course, i) => (
                <li key={i} className="flex flex-wrap gap-x-2 gap-y-0">
                  <span className="text-stone-500 shrink-0">{course.code}</span>
                  <span>{course.topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </ResumeSection>

        <ResumeSection title="Relevant Experience" delay={0.03}>
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
