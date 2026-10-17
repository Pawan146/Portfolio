import { render, screen, within } from '@testing-library/react';
import App from './App';
import profile from './config/profile';

describe('App', () => {
  it('renders the hero with name and CTAs from config', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: profile.hero.name })).toBeInTheDocument();
    const hero = document.getElementById('home')!;
    expect(within(hero).getByRole('link', { name: profile.hero.primaryCta.label })).toHaveAttribute(
      'href',
      profile.hero.primaryCta.href,
    );
  });

  it('renders a nav link for every configured section that has content', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    const hrefs = within(nav)
      .getAllByRole('link')
      .map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(profile.site.sections.map((id) => `#${id}`));
    for (const href of hrefs) {
      expect(document.querySelector(href!)).not.toBeNull();
    }
  });

  it('renders every timeline entry from config', () => {
    render(<App />);
    const entries = [...profile.experience, ...profile.education, ...profile.achievements, ...profile.certificates];
    for (const entry of entries) {
      expect(screen.getAllByText(entry.title).length).toBeGreaterThan(0);
    }
  });

  it('renders every skill with its percentage', () => {
    render(<App />);
    for (const skill of profile.skills.tools) {
      expect(screen.getByRole('progressbar', { name: skill.name })).toHaveAttribute(
        'aria-valuenow',
        String(skill.level),
      );
    }
    for (const skill of profile.skills.languages) {
      expect(screen.getByRole('img', { name: `${skill.name} ${skill.level}%` })).toBeInTheDocument();
    }
  });

  it('renders contact details and footer socials', () => {
    render(<App />);
    expect(screen.getAllByRole('link', { name: profile.contact.email }).length).toBeGreaterThan(0);
    const contact = document.getElementById('contact')!;
    expect(within(contact).getByText(profile.contact.currentAddress)).toBeInTheDocument();
    for (const social of profile.contact.socials) {
      expect(screen.getByRole('link', { name: social.platform })).toHaveAttribute('href', social.url);
    }
  });
});
