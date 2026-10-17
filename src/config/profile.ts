import type { Profile } from '../types';

/**
 * All personal content for the portfolio lives here.
 * Edit the values below; no component code needs to change.
 *
 * - Images and the resume go in /public (reference them as "/images/x.png", "/resume.pdf").
 *   Do not put images in dist/ — that folder is rebuilt and not used by `npm run dev`.
 * - Remove an id from `site.sections` to hide that section and its nav link.
 * - Blog is off by default: add `'blog'` to `site.sections` when you have posts ready (content stays in `blog` below).
 * - Skill `level` is a percentage from 0 to 100.
 * - Leadership cards: edit `leadership.items` (empty array hides the section).
 */
const profile: Profile = {
  site: {
    title: 'Pawan Kushwaha - Portfolio',
    description:
      'Portfolio of Pawan Kushwaha, a senior full stack software engineer building scalable web applications and cloud-native systems.',
    keywords: ['Pawan Kushwaha', 'Senior Software Engineer', 'Senior Full Stack Developer', 'Portfolio'],
    url: 'https://portfolio-chi-amber-78.vercel.app',
    ogImage: '/images/og-image.svg',
    accentColor: '#ffbd39',
    sections: [
      'home',
      'about',
      'experience',
      'leadership',
      'education',
      'achievements',
      'certificates',
      'skills',
      'projects',
      'blog',
      'contact',
    ],
    copyright: 'Pawan Kushwaha. All rights reserved.',
  },

  hero: {
    greeting: "Hello! I'm",
    name: 'Pawan Kushwaha',
    roles: ['Senior Software Engineer.','Blogger.'],
    photo: '/images/profile.jpeg',
    primaryCta: { label: 'Contact me', href: '#contact' },
    // Local file: put your PDF in public/ and use "/resume.pdf". Or use a full URL (Google Drive, LinkedIn, etc.).
    secondaryCta: { label: 'Download CV', href: '/resume.pdf' },
  },

  about: {
    tagline: 'I think of myself not just as a dreamer, but as a dream chaser.',
    bio: 'Software engineer with a passion for building reliable, scalable products. I enjoy working across the stack, from crafting clean user interfaces to designing distributed backend systems.',
    details: [
      { label: 'Name', value: 'Pawan Kushwaha' },
      { label: 'Date of birth', value: 'January 18, 1998' },
      { label: 'Current address', value: 'Bengaluru, Karnataka, India' },
      { label: 'Zip code', value: '560114' },
      { label: 'Email', value: 'pawanbmsce146@gmail.com', url: 'mailto:pawanbmsce146@gmail.com' },
      { label: 'Github', value: 'pawan', url: 'https://github.com/Pawan146' },
    ],
    counters: [
      { label: 'Years of work experience', value: 6, suffix: '+' },
      { label: 'Projects completed', value: 25, suffix: '+' },
    ],
    // Same path as hero.secondaryCta.href — must match your PDF location under public/.
    resumeUrl: '/resume.pdf',
  },

  experience: [
    {
      period: 'Aug 2020 - Present',
      title: 'Senior Software Engineer',
      organization: 'Ather Energy',
      organizationUrl: 'https://www.atherenergy.com',
      description:
        'Full-time, on-site in Bengaluru. Designed and implemented a backend system for booking scooter service slots through the mobile app and CRM. Built the Notification Manager microservice for WhatsApp, SMS, email, and push notifications. Designed and developed backend microservices including payment, user, RSA, and authentication. Collaborated with the customer experience team to improve CSAT from 3.9 to 4.4.',
      technologies: [
        'JavaScript',
        'Node.js',
        'Sails.js',
        'Java',
        'Spring Boot',
        'Kubernetes',
        'Kafka',
        'Redis',
        'PostgreSQL',
        'Kibana',
      ],
    },
    {
      period: 'Jan 2020 - Mar 2020',
      title: 'Software Developer',
      organization: 'gnani.ai',
      organizationUrl: 'https://www.gnani.ai',
      description:
        'Internship in Bengaluru. Built conversational chatbots using machine learning and NLP in English and Hindi, implemented in Python with the Rasa framework.',
      technologies: ['Python', 'Rasa', 'NLP', 'Machine Learning'],
    },
  ],

  leadership: {
    tagline: 'Leading delivery, growing engineers, and aligning with partners across the business.',
    items: [
      {
        title: 'Team leadership',
        description:
          'Led engineering for high-impact initiatives—from national refund programs to platform microservices—setting direction, unblocking delivery, and owning outcomes end to end.',
      },
      {
        title: 'Mentoring juniors',
        description:
          'Mentored junior engineers through code reviews, design discussions, and pairing on production services. Helped them grow in backend development, observability, and operational readiness.',
      },
      {
        title: 'Cross-functional collaboration',
        description:
          'Partnered with Finance, customer experience, product, and infrastructure teams to ship compliant, customer-facing systems and smooth rollouts at scale.',
      },
    ],
  },

  education: [
    {
      period: '2016 - 2020',
      title: 'B.E. in Electronics & Communication Engineering',
      organization: 'B.M.S College of Engineering',
      description:
        'Studied core computer science fundamentals and built projects in machine learning, web technologies and databases.',
    },
  ],

  achievements: [
    {
      period: '2016',
      title: 'COMPEX Scholarship',
      organization: 'B.M.S College of Engineering',
      description: 'Awarded COMPEX scholarship to pursue a Bachelor\'s degree.',
    },
    {
      period: '2016 - 2020',
      title: 'Certificate of Merit',
      organization: 'B.M.S College of Engineering',
      description:
        'Received Certificates of Merit with prize recognition for achieving the highest academic performance in three semesters.',
    },
    {
      period: '2016 - 2020',
      title: 'Second rank holder',
      organization: 'B.M.S College of Engineering',
      description:
        'Second rank holder in the university in Electronics & Communication Engineering among 180 students.',
    },
    {
      period: '2019',
      title: 'Grand prize winner',
      organization: 'Tech Hackathon',
      description: 'Won the contest and achieved first place out of 25 competing ideas.',
    },
  ],

  certificates: [
    {
      period: 'Certified',
      title: 'Kubernetes Certification',
      description:
        'Certification covering container orchestration, deploying and operating workloads on Kubernetes clusters.',
    },
    {
      period: 'Certified',
      title: 'Node.js and Web Development Certification',
      description:
        'Certification in Node.js backend development and modern web application development practices.',
    },
    {
      period: 'Certified',
      title: 'LangChain and LangGraph Certification',
      description:
        'Certification on building LLM-powered applications and agent workflows with LangChain and LangGraph.',
    },
  ],

  skills: {
    languages: [
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'NoSQL', level: 85 },
    ],
    tools: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Node.js', level: 90 },
      { name: 'React / Next.js', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'LangGraph', level: 85 },
      { name: 'Agentic AI', level: 85 },
      { name: 'Kubernetes', level: 90 },
      { name: 'AWS / GCP', level: 85 },
      { name: 'Apache Kafka / RabbitMQ', level: 85 },
      { name: 'System Design', level: 85 },
      { name: 'Test Driven Development', level: 80 },
    ],
  },

  projects: [
    {
      name: 'Agentic AI Knowledge Assistant',
      description:
        'Built an internal knowledge assistant that auto-syncs new documents and keeps the RAG index fresh. Layered a LangGraph agent on Google Gemini for grounded search and Q&A. Ran structured evals (accuracy, relevance, faithfulness, latency) and tuned retrieval and prompts until answers met team quality bars.',
      techStack: ['LangGraph', 'LangChain', 'RAG', 'Google Gemini', 'Python'],
    },
    {
      name: 'National EV Charger Refund Program',
      description:
        'Led engineering for a government-mandated FAME-II compliance program that restored subsidy eligibility. Partnered with Finance to automate refunds for 150,000+ verified customers (~₹120 crore / US$14M). Built verification and reconciliation flows so every payout was auditable at national scale.',
      techStack: ['Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'REST APIs'],
    },
    {
      name: 'Data Archival Service',
      description:
        'Owned the service end to end—from solution design through development, testing, and production rollout. Archives legacy data to keep production systems lean and fast, saving an estimated ₹40–50 lakh (~US$50–60K) in infrastructure annually. Drove cross-functional alignment for smooth integration.',
      techStack: ['Java', 'Spring Boot', 'Kubernetes', 'PostgreSQL'],
    },
    {
      name: 'High-Volume Notification Platform',
      description:
        'Designed and delivered a Kafka-based notification microservice handling 100,000+ messages per day across WhatsApp, SMS, email, and push. Redesigned database schemas and queries to reduce end-to-end latency under load.',
      techStack: ['Apache Kafka', 'Node.js', 'JavaScript', 'PostgreSQL', 'Redis'],
    },
    {
      name: 'Core Platform Microservices',
      description:
        'Built payment, user, authentication, and RSA services with REST APIs for mobile apps and partners. Added Prometheus and Grafana alerting so the team could detect and fix issues before they affected customers.',
      techStack: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Prometheus', 'Grafana'],
    },
  ],

  blog: {
    tagline: 'On the technical side, I hope that my writing is evolving and maturing.',
    posts: [
      {
        title: 'Turning Messy Engineering Docs into a Permission-Aware AI Assistant',
        date: 'Oct 2025',
        summary:
          'How we built a doc assistant with hybrid search (vector + keyword + RRF), incremental sync via webhooks, per-user permissions enforced at retrieval, and MCP OAuth for Cursor-style tools — plus retrieval and end-to-end eval lessons.',
        url: 'https://medium.com/@pawanbmsce146/turning-messy-engineering-docs-into-a-permission-aware-ai-assistant-39c42b451ecd',
      },
    ],
  },

  contact: {
    quote: 'There is no key to open the heart of another - except curiosity.',
    currentAddress: 'Bengaluru, Karnataka, India',
    email: 'pawanbmsce146@gmail.com',
    website: 'https://portfolio-chi-amber-78.vercel.app',
    socials: [
      { platform: 'github', url: 'https://github.com/Pawan146' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/pawan-kushwaha-a5771a144' },
    ],
  },

  hireMe: {
    show: true,
    headline: "I'm currently open to work as a",
    roles: 'Senior Software Engineer or Tech Architect',
    subtitle: '🚀 Exploring opportunities and side projects.',
    ctaLabel: '',
    ctaHref: '#contact',
  },
};

export default profile;
