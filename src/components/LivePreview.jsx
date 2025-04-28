import React from 'react';
import { useFormDataStore } from '../contexts/FormDataContext';

const LivePreview = () => {
  const bio = useFormDataStore((state) => state.bio);
  const education = useFormDataStore((state) => state.education);
  const certifications = useFormDataStore((state) => state.certifications);
  const experience = useFormDataStore((state) => state.experience);
  const skills = useFormDataStore((state) => state.skills);
  const projects = useFormDataStore((state) => state.projects);

  return (
    <article className="bg-white text-black max-w-2xl mx-auto font-serif shadow p-8">
      {/* Name, Title, and Description with bottom border */}
      <header className="border-b border-black pb-2 mb-2">
        <h1 className="text-2xl font-bold text-center mb-1">{bio.name || 'Your Name'}</h1>
        {bio.title && <p className="text-center text-base font-semibold mb-1">{bio.title}</p>}
        {bio.description && <p className="text-center text-sm mb-2 whitespace-pre-line">{bio.description}</p>}
      </header>
      {/* Contact Info */}
      <div className="mb-4">
        <p className="text-center text-sm">
          {(bio.address || 'Your Address') + ' • ' + (bio.email || 'your@email.com') + ' • ' + (bio.phone || '+62xxxxxxxx')}
        </p>
      </div>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-lg font-bold text-center mb-2">Education</h2>
        {(education.length > 0 ? education : [null, null]).map((edu, i) => (
          <div key={i} className="flex justify-between text-sm mb-1">
            <div>
              <span className="font-bold">{edu?.school || 'School Name'}</span><br />
              <span>{edu?.major || 'Major/Program'}</span><br />
              {edu?.gpa && <span>{edu.gpa}</span>}
            </div>
            <div className="text-right min-w-[110px]">
              <span>{edu?.location || 'Location'}</span><br />
              <span>{edu?.years || 'Years'}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="mb-4">
        <h2 className="text-lg font-bold text-center mb-2">Certifications</h2>
        <ul className="list-none text-sm pl-0">
          {(certifications.length > 0 ? certifications : ['Certification Name', 'Certification Name']).map((cert, i) => (
            <li key={i} className="font-bold mb-1">{cert}</li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-4">
        <h2 className="text-lg font-bold text-center mb-2">Experience</h2>
        {(experience.length > 0 ? experience : [null]).map((exp, i) => (
          <div key={i} className="flex justify-between text-sm mb-1">
            <div>
              <span className="font-bold">{exp?.title || 'Job Title'}</span><br />
              <span>{exp?.role || 'Role'}</span>
              <ul className="list-disc ml-5 mt-1">
                {(exp?.bullets?.length > 0 ? exp.bullets : ['Description bullet point']).map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="text-right min-w-[110px]">
              <span>{exp?.location || 'Location'}</span><br />
              <span>{exp?.years || 'Years'}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="text-lg font-bold text-center mb-2">Projects</h2>
        {projects.length > 0 ? projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-semibold m-0 p-0">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {project.link}
              </a>
            )}
          </div>
        )) : <p className="text-sm">No projects added yet.</p>}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-lg font-bold text-center mb-2">Skills</h2>
        <div className="text-sm">
          {Array.isArray(skills) && skills.length > 0
            ? (
                <div className="flex mb-1">
                  <span className="w-24 font-bold">Skills</span>
                  <span>: {skills.join(', ')}</span>
                </div>
              )
            : [
                <div key="Skills" className="flex mb-1">
                  <span className="w-24 font-bold">Skills</span>
                  <span>: Skill 1, Skill 2</span>
                </div>,
              ]}
        </div>
      </section>
    </article>
  );
};

export default LivePreview;
