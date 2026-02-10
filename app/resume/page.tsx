import { RESUME } from './resume-data';
import {
  ResumeSection,
  ResumeCard,
  ResumeItem,
  ProjectCard,
} from './ResumeTimeline';

export const metadata = {
  title: 'Resume',
  description:
    'Lennard Pische — Education, experience, projects, and skills.',
};

export default function ResumePage() {
  const { name, education, experience, projects, skills } = RESUME;

  return (
    <div className="max-w-[56ch] mx-auto w-full">
      <header className="mb-10">
        <h1 className="font-medium pt-4 pb-2 text-3xl text-gray-900">
          {name}
        </h1>
      </header>

      <div className="space-y-12">
        <ResumeSection title="Education" delay={0}>
          {education.map((ed, i) => (
            <ResumeCard key={i} index={i}>
              <ResumeItem
                org={ed.org}
                location={ed.location}
                degree={'degree' in ed ? ed.degree : undefined}
                program={'program' in ed ? ed.program : undefined}
                date={ed.date}
                bullets={ed.bullets}
              />
            </ResumeCard>
          ))}
        </ResumeSection>

        <ResumeSection title="Relevant Experience" delay={0.05}>
          {experience.map((exp, i) => (
            <ResumeCard key={i} index={i}>
              <ResumeItem
                org={exp.org}
                location={exp.location}
                role={exp.role}
                date={exp.date}
                bullets={exp.bullets}
              />
            </ResumeCard>
          ))}
        </ResumeSection>

        <ResumeSection title="Projects" delay={0.1}>
          {projects.map((proj, i) => (
            <ProjectCard
              key={i}
              title={proj.title}
              course={proj.course}
              date={proj.date}
              bullets={proj.bullets}
              index={i}
            />
          ))}
        </ResumeSection>

        <ResumeSection title="Skills" delay={0.15}>
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
