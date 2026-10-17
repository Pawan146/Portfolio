import type { Profile, Skill } from '../types';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { useInView } from '../hooks/useInView';

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const clamp = (level: number) => Math.max(0, Math.min(100, level));

function SkillRing({ skill }: { skill: Skill }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const level = clamp(skill.level);
  const offset = inView ? CIRCUMFERENCE * (1 - level / 100) : CIRCUMFERENCE;
  return (
    <div ref={ref} className="ring">
      <svg viewBox="0 0 120 120" role="img" aria-label={`${skill.name} ${level}%`}>
        <circle className="ring__track" cx="60" cy="60" r={RADIUS} />
        <circle
          className="ring__fill"
          cx="60"
          cy="60"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="ring__value">{level}%</span>
      <h3>{skill.name}</h3>
    </div>
  );
}

function SkillBar({ skill }: { skill: Skill }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const level = clamp(skill.level);
  return (
    <div ref={ref} className="bar">
      <div className="bar__header">
        <h3>{skill.name}</h3>
        <span>{level}%</span>
      </div>
      <div
        className="bar__track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={skill.name}
      >
        <div className="bar__fill" style={{ width: inView ? `${level}%` : 0 }} />
      </div>
    </div>
  );
}

export default function Skills({ skills }: { skills: Profile['skills'] }) {
  return (
    <Section id="skills" title="Skills" subtitle="Languages, tools and concepts I work with.">
      {skills.languages.length > 0 && (
        <div className="rings">
          {skills.languages.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 60}>
              <SkillRing skill={skill} />
            </Reveal>
          ))}
        </div>
      )}
      {skills.tools.length > 0 && (
        <div className="bars">
          {skills.tools.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      )}
    </Section>
  );
}
