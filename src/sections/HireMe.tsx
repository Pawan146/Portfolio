import type { Profile } from '../types';
import Reveal from '../components/Reveal';

export default function HireMe({ hireMe }: { hireMe: Profile['hireMe'] }) {
  return (
    <section className="hire">
      <Reveal className="container hire__inner">
        <h2 className="hire__title">
          <span className="hire__headline">{hireMe.headline}</span>
          <span className="hire__roles">{hireMe.roles}</span>
        </h2>
        <p className="hire__subtitle">{hireMe.subtitle}</p>
        {hireMe.ctaLabel ? (
          <a href={hireMe.ctaHref} className="btn btn--dark">
            {hireMe.ctaLabel}
          </a>
        ) : null}
      </Reveal>
    </section>
  );
}
