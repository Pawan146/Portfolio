import type { Profile } from '../types';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

export default function Leadership({ leadership }: { leadership: Profile['leadership'] }) {
  return (
    <Section id="leadership" title="Leadership" subtitle={leadership.tagline}>
      <div className="leadership__grid">
        {leadership.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} className="leadership__card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
