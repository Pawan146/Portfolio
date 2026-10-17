export type SectionId =
  | 'home'
  | 'about'
  | 'experience'
  | 'leadership'
  | 'education'
  | 'achievements'
  | 'certificates'
  | 'skills'
  | 'projects'
  | 'blog'
  | 'contact';

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'instagram'
  | 'leetcode'
  | 'hackerrank'
  | 'medium'
  | 'email';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  organization?: string;
  organizationUrl?: string;
  description?: string;
  technologies?: string[];
  link?: { label: string; url: string };
  status?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface LeadershipItem {
  title: string;
  description: string;
}

export interface BlogPost {
  title: string;
  date: string;
  summary: string;
  url: string;
  coverImage?: string;
}

export interface Counter {
  label: string;
  value: number;
  suffix?: string;
}

export interface Profile {
  site: {
    title: string;
    description: string;
    keywords: string[];
    url: string;
    ogImage: string;
    accentColor: string;
    sections: SectionId[];
    copyright: string;
  };
  hero: {
    greeting: string;
    name: string;
    roles: string[];
    photo: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  about: {
    tagline: string;
    bio: string;
    details: { label: string; value: string; url?: string }[];
    counters: Counter[];
    resumeUrl: string;
  };
  experience: TimelineItem[];
  leadership: {
    tagline: string;
    items: LeadershipItem[];
  };
  education: TimelineItem[];
  achievements: TimelineItem[];
  certificates: TimelineItem[];
  skills: {
    languages: Skill[];
    tools: Skill[];
  };
  projects: Project[];
  blog: {
    tagline: string;
    posts: BlogPost[];
  };
  contact: {
    quote: string;
    currentAddress: string;
    email: string;
    website?: string;
    socials: SocialLink[];
  };
  hireMe: {
    show: boolean;
    headline: string;
    roles: string;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
  };
}
