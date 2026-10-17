import type { Counter, Profile } from '../types';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

function CounterBox({ counter }: { counter: Counter }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  const value = useCountUp(counter.value, inView);
  return (
    <div ref={ref} className="counter">
      <span className="counter__value">
        {value}
        {counter.suffix}
      </span>
      <span className="counter__label">{counter.label}</span>
    </div>
  );
}

export default function About({ about, photo }: { about: Profile['about']; photo: string }) {
  return (
    <Section id="about" title="About Me" subtitle={about.tagline}>
      <div className="about">
        <Reveal className="about__photo">
          <img src={photo} alt="" width={360} height={360} loading="lazy" />
        </Reveal>
        <Reveal className="about__content" delay={100}>
          <p className="about__bio">{about.bio}</p>
          <ul className="about__details">
            {about.details.map((detail) => (
              <li key={detail.label}>
                <span>{detail.label}:</span>
                {detail.url ? (
                  <a href={detail.url} target="_blank" rel="noreferrer">
                    {detail.value}
                  </a>
                ) : (
                  <strong>{detail.value}</strong>
                )}
              </li>
            ))}
          </ul>
          <div className="counters">
            {about.counters.map((counter) => (
              <CounterBox key={counter.label} counter={counter} />
            ))}
          </div>
          <a href={about.resumeUrl} className="btn btn--primary" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
