import type { Profile } from '../types';
import { useTyping } from '../hooks/useTyping';

export default function Hero({ hero }: { hero: Profile['hero'] }) {
  const role = useTyping(hero.roles);

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="hero__greeting">{hero.greeting}</span>
          <h1>{hero.name}</h1>
          <h2 className="hero__role">
            I'm a <span className="hero__typed">{role}</span>
            <span className="hero__cursor" aria-hidden="true">
              |
            </span>
          </h2>
          <div className="hero__actions">
            <a href={hero.primaryCta.href} className="btn btn--primary">
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="btn btn--outline"
              {...(hero.secondaryCta.href.startsWith('#') ? {} : { target: '_blank', rel: 'noreferrer' })}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="hero__photo">
          <img src={hero.photo} alt={hero.name} width={420} height={420} />
        </div>
      </div>
    </section>
  );
}
