import { useEffect, useState } from 'react';
import type { SectionId } from '../types';
import { useActiveSection } from '../hooks/useActiveSection';
import Icon from './Icon';

const labels: Record<SectionId, string> = {
  home: 'Home',
  about: 'About',
  experience: 'Experience',
  leadership: 'Leadership',
  education: 'Education',
  achievements: 'Achievements',
  certificates: 'Certificates',
  skills: 'Skills',
  projects: 'Projects',
  blog: 'Blog',
  contact: 'Contact',
};

interface NavbarProps {
  brand: string;
  sections: SectionId[];
}

export default function Navbar({ brand, sections }: NavbarProps) {
  const active = useActiveSection(sections);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          {brand}
        </a>
        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {labels[id]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
