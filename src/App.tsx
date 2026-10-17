import { Fragment, type CSSProperties, type ReactElement } from 'react';
import profile from './config/profile';
import type { SectionId } from './types';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Leadership from './sections/Leadership';
import HireMe from './sections/HireMe';

export default function App() {
  const { site, hero, about, contact, hireMe } = profile;

  const renderers: Record<SectionId, () => ReactElement | null> = {
    home: () => <Hero hero={hero} />,
    about: () => <About about={about} photo={hero.photo} />,
    experience: () =>
      profile.experience.length ? (
        <Section id="experience" title="Experience">
          <Timeline items={profile.experience} />
        </Section>
      ) : null,
    leadership: () =>
      profile.leadership.items.length ? <Leadership leadership={profile.leadership} /> : null,
    education: () =>
      profile.education.length ? (
        <Section id="education" title="Education">
          <Timeline items={profile.education} />
        </Section>
      ) : null,
    achievements: () =>
      profile.achievements.length ? (
        <Section id="achievements" title="Achievements">
          <Timeline items={profile.achievements} />
        </Section>
      ) : null,
    certificates: () =>
      profile.certificates.length ? (
        <Section id="certificates" title="Certificates">
          <Timeline items={profile.certificates} />
        </Section>
      ) : null,
    skills: () => <Skills skills={profile.skills} />,
    projects: () => (profile.projects.length ? <Projects projects={profile.projects} /> : null),
    blog: () => (profile.blog.posts.length ? <Blog blog={profile.blog} /> : null),
    contact: () => <Contact contact={contact} />,
  };

  const rendered = site.sections
    .map((id) => ({ id, node: renderers[id]() }))
    .filter((entry): entry is { id: SectionId; node: ReactElement } => entry.node !== null);

  return (
    <div style={{ '--accent': site.accentColor } as CSSProperties}>
      <Navbar brand={hero.name.split(' ')[0]} sections={rendered.map((entry) => entry.id)} />
      <main>
        {rendered.map(({ id, node }) => (
          <Fragment key={id}>{node}</Fragment>
        ))}
        {hireMe.show && <HireMe hireMe={hireMe} />}
      </main>
      <Footer socials={contact.socials} copyright={site.copyright} />
      <BackToTop />
    </div>
  );
}
