import type { Project } from '../types';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section id="projects" title="Projects" subtitle="A few things I have built.">
      <div className="card-grid">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 80} className="card">
            {project.image && <img className="card__image" src={project.image} alt={project.name} loading="lazy" />}
            <div className="card__body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="tags">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="card__links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <Icon name="external" size={16} /> Live
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Icon name="github" size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
