import type { SocialLink } from '../types';
import Icon from './Icon';

interface FooterProps {
  socials: SocialLink[];
  copyright: string;
}

export default function Footer({ socials, copyright }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <ul className="socials">
          {socials.map((social) => (
            <li key={social.platform + social.url}>
              <a
                href={social.url}
                aria-label={social.platform}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer noopener"
              >
                <Icon name={social.platform} size={20} />
              </a>
            </li>
          ))}
        </ul>
        <p>
          &copy; {new Date().getFullYear()} {copyright}
        </p>
      </div>
    </footer>
  );
}
