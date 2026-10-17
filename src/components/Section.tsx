import type { ReactNode } from 'react';
import type { SectionId } from '../types';
import Reveal from './Reveal';

interface SectionProps {
  id: SectionId;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <Reveal className="section-heading">
          <span className="section-heading__bg" aria-hidden="true">
            {title}
          </span>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
