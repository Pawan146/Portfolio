import type { TimelineItem } from '../types';
import Icon from './Icon';
import Reveal from './Reveal';

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <Reveal key={`${item.title}-${item.period}-${index}`} delay={index * 80} className="timeline__item">
          <span className="timeline__dot" aria-hidden="true" />
          <div className="timeline__card">
            <span className="timeline__period">{item.period}</span>
            <h3>{item.title}</h3>
            {item.organization && (
              <p className="timeline__org">
                {item.organizationUrl ? (
                  <a href={item.organizationUrl} target="_blank" rel="noreferrer">
                    {item.organization}
                  </a>
                ) : (
                  item.organization
                )}
              </p>
            )}
            {item.status && <span className="badge">{item.status}</span>}
            {item.description && <p className="timeline__desc">{item.description}</p>}
            {item.technologies && item.technologies.length > 0 && (
              <ul className="tags">
                {item.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
            {item.link && (
              <a className="timeline__link" href={item.link.url} target="_blank" rel="noreferrer">
                {item.link.label} <Icon name="external" size={14} />
              </a>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
