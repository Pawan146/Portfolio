import type { Profile } from '../types';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';

/** Ensures web links open off-site; leaves mailto/tel unchanged. */
function toExternalHref(url: string): string {
  if (/^(mailto:|tel:)/i.test(url)) return url;
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url.replace(/^\/\//, '')}`;
}

function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export default function Contact({ contact }: { contact: Profile['contact'] }) {
  const linkedIn = contact.socials.find((s) => s.platform === 'linkedin');

  const infoBoxes = [
    { icon: 'location' as const, label: 'Current Address', value: contact.currentAddress },
    { icon: 'email' as const, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    linkedIn && {
      icon: 'linkedin' as const,
      label: 'LinkedIn',
      value: displayUrl(linkedIn.url),
      href: toExternalHref(linkedIn.url),
    },
    contact.website && {
      icon: 'globe' as const,
      label: 'Website',
      value: displayUrl(contact.website),
      href: toExternalHref(contact.website),
    },
  ].filter(Boolean) as { icon: 'location' | 'email' | 'linkedin' | 'globe'; label: string; value: string; href?: string }[];

  return (
    <Section id="contact" title="Contact Me" subtitle={contact.quote}>
      <div className="contact__info">
        {infoBoxes.map((box, i) => (
          <Reveal key={box.label} delay={i * 80} className="contact__box">
            <span className="contact__icon">
              <Icon name={box.icon} size={24} />
            </span>
            <h3>{box.label}</h3>
            {box.href ? (
              <a
                href={box.href}
                target={/^https?:\/\//i.test(box.href) ? '_blank' : undefined}
                rel="noreferrer noopener"
              >
                {box.value}
              </a>
            ) : (
              <p>{box.value}</p>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
