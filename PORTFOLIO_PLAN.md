# Personal Portfolio — Build Plan & Details Sheet

Reference site: https://vinodbiradar.com/

This document has two parts:

- **Part A — Build steps**: what to build, in what order, and how.
- **Part B — Personal details sheet**: fill in every `[ ]` / `____` field. Once filled, this doc is the single source of truth for coding the site.

> Tip: Leave a field as `N/A` if you don't want that item shown. Delete whole sections you don't want (e.g. Blog).

---

## Part A — Build Steps

### Step 1. Understand the reference layout

The reference is a **single-page, scroll-based portfolio** with a fixed navigation menu that jumps to each section. Section order:

| # | Section | What it shows |
|---|---------|---------------|
| 1 | Hero / Home | Big name, profile photo, typing animation "I'm a ___" cycling through roles |
| 2 | About Me | Short tagline, personal info list (name, DOB, city, GitHub), animated counter "X+ years of experience", Download CV button |
| 3 | Experience | Vertical timeline: years, job title, company, description, tech used |
| 4 | Education | Timeline: years, degree, college, description |
| 5 | Achievements | Timeline: year, award title, organiser, description |
| 6 | Certificates | Timeline: dates, certificate name, issuer, description, "Certificate" link |
| 7 | Skills | Circular progress rings for languages (%) + horizontal progress bars for tools/concepts (%) |
| 8 | Blog | Cards with cover image, date, title, short summary, link |
| 9 | Contact Me | Quote, contact boxes (address, phone, email, website, LinkedIn), optional contact form |
| 10 | Hire Me banner | "I'm currently open to work as ___" with a call-to-action |
| 11 | Footer | Copyright, social icons |

### Step 2. Decide the tech stack (pick one)

- [ ] **Option 1 — Plain HTML + CSS + JavaScript** (simplest, closest to the reference, free hosting anywhere)
- [ ] **Option 2 — React + Vite + Tailwind CSS** (component-based, easy to maintain)
- [ ] **Option 3 — Next.js + Tailwind CSS** (best SEO, easy blog with Markdown/MDX, deploy on Vercel)

Recommended: **Option 3** if you plan to write blogs; **Option 1** if you want the quickest result.

Supporting libraries (optional):

- Typing animation: `typed.js` (or a small custom script)
- Scroll animations: `AOS` (Animate On Scroll) or `framer-motion`
- Counter animation: `countup.js`
- Icons: `Font Awesome` / `react-icons`
- Contact form without a backend: `Formspree`, `EmailJS`, or `Web3Forms`

### Step 3. Put all content in one data file

Keep all personal content (Part B of this doc) in one file, e.g. `data/profile.json` or `data/profile.ts`. Every section reads from it, so future updates never require touching layout code.

Suggested project structure:

```text
portfolio/
├── public/
│   ├── images/        # profile photo, blog covers, favicon
│   └── resume.pdf     # downloadable CV
├── data/
│   └── profile.json   # all content from Part B
├── components/        # Navbar, Hero, About, Timeline, Skills, Blog, Contact, Footer
├── styles/
└── pages or app/
```

### Step 4. Design system

Decide these before coding (fill in Part B → Section 1):

- Theme: dark (like reference) or light, optionally a toggle
- Primary accent color (reference uses a bright accent on dark background)
- Fonts: one heading font + one body font (e.g. Poppins + Inter from Google Fonts)
- Spacing: consistent section padding (e.g. 80–100px top/bottom on desktop)
- Responsive breakpoints: mobile (<768px), tablet (768–1024px), desktop (>1024px)

### Step 5. Build sections in this order

1. **Navbar** — fixed/sticky, links scroll smoothly to section IDs, highlights active section, hamburger menu on mobile.
2. **Hero** — name, photo, typing roles, "Hire me" / "Download CV" buttons.
3. **About** — tagline, info list, years-of-experience counter (animate when visible).
4. **Timeline component** — build once, reuse for Experience, Education, Achievements, Certificates.
5. **Skills** — circular rings component + progress bar component; animate fill when scrolled into view.
6. **Blog** — card grid; links to external posts (Medium/Hashnode/Dev.to) or internal Markdown posts.
7. **Contact** — info boxes + form (connect to Formspree/EmailJS).
8. **Hire Me banner + Footer**.

### Step 6. Polish

- Scroll-reveal animations (fade-up per item)
- "Back to top" button
- Hover effects on cards and buttons
- Loading spinner/preloader (optional — reference style)
- Accessibility: alt text on images, good color contrast, keyboard-navigable menu

### Step 7. SEO & metadata

- Page title and meta description (Part B → Section 12)
- Open Graph image (preview when shared on LinkedIn/WhatsApp)
- Favicon
- `sitemap.xml` and `robots.txt`
- Google Analytics / Plausible (optional)

### Step 8. Testing checklist

- [ ] Works on Chrome, Safari, Firefox, Edge
- [ ] Looks good on mobile, tablet, desktop
- [ ] All links open correctly (external links in a new tab)
- [ ] Resume downloads
- [ ] Contact form delivers email
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO)
- [ ] Images compressed (WebP, < 200 KB each)

### Step 9. Deploy

- [ ] **Vercel** (best for Next.js/React)
- [ ] **Netlify**
- [ ] **GitHub Pages** (free, good for plain HTML)

Steps: push code to GitHub → import repo into the host → auto-deploy on every push.

### Step 10. Custom domain

1. Buy a domain (GoDaddy, Namecheap, Google/Squarespace Domains, Hostinger, etc.).
2. Add domain in hosting dashboard.
3. Update DNS records (A / CNAME) at the registrar as instructed by the host.
4. Enable HTTPS (automatic on Vercel/Netlify).

---

## Part B — Personal Details Sheet (fill this in)

### 1. Site settings & design preferences

| Field | Your value |
|-------|-----------|
| Tech stack chosen (Option 1/2/3) | ____ |
| Theme (Dark / Light / Toggle) | ____ |
| Primary accent color (hex) | ____ |
| Heading font | ____ |
| Body font | ____ |
| Domain name | ____ |
| Hosting platform | ____ |
| Sections to include (tick) | [ ] Hero [ ] About [ ] Experience [ ] Education [ ] Achievements [ ] Certificates [ ] Skills [ ] Projects [ ] Blog [ ] Contact [ ] Hire Me |

### 2. Hero section

| Field | Your value |
|-------|-----------|
| Full name | ____ |
| Greeting line (e.g. "Hello! I'm") | ____ |
| Roles for typing animation (3–5) | 1. ____ 2. ____ 3. ____ 4. ____ 5. ____ |
| Profile photo file name | ____ (place in `public/images/`) |
| Primary button text & link (e.g. Hire me → #contact) | ____ |
| Secondary button text & link (e.g. Download CV → resume.pdf) | ____ |

### 3. About Me

| Field | Your value |
|-------|-----------|
| Tagline / quote (1 line) | ____ |
| Short bio (2–4 lines) | ____ |
| Name | ____ |
| Date of birth (optional) | ____ |
| City, Country | ____ |
| Zip code (optional) | ____ |
| Email | ____ |
| Phone (optional) | ____ |
| GitHub username | ____ |
| Years of work experience (counter number) | ____ |
| Other counters (optional, e.g. Projects done, Happy clients) | ____ : ____ / ____ : ____ |
| Resume / CV file name | ____ (place in `public/`) |

### 4. Experience (latest first — copy the block as needed)

**Experience 1**

- Duration (e.g. 2023 – Present): ____
- Job title: ____
- Company name: ____
- Company website (optional): ____
- About the company (1 line): ____
- What you worked on / impact (2–3 lines): ____
- Technologies used: ____

**Experience 2**

- Duration: ____
- Job title: ____
- Company name: ____
- Company website (optional): ____
- About the company: ____
- What you worked on / impact: ____
- Technologies used: ____

**Experience 3**

- Duration: ____
- Job title: ____
- Company name: ____
- Company website (optional): ____
- About the company: ____
- What you worked on / impact: ____
- Technologies used: ____

**Internship(s)** (optional)

- Duration: ____ | Title: ____ | Company: ____ | Description: ____
- Duration: ____ | Title: ____ | Company: ____ | Description: ____

### 5. Education

**Education 1**

- Duration (e.g. 2015 – 2019): ____
- Degree & branch: ____
- College / University: ____
- Grade / CGPA (optional): ____
- Description (1–3 lines): ____

**Education 2** (optional — school / diploma / masters)

- Duration: ____
- Degree: ____
- Institute: ____
- Grade (optional): ____
- Description: ____

### 6. Achievements / Awards

| Year | Title (e.g. Grand prize winner) | Organiser / Event | Description | Link (optional) |
|------|------|------|------|------|
| ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ |

### 7. Certificates

| Date (MM/YYYY) | Certificate name | Issuer | What you learned (1–2 lines) | Certificate URL | Status (Completed / Pursuing) |
|------|------|------|------|------|------|
| ____ | ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ | ____ |

### 8. Skills

**8a. Programming languages** (shown as circular rings)

| Language | Proficiency % |
|----------|---------------|
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |

**8b. Frameworks, tools & concepts** (shown as progress bars)

| Skill | Proficiency % |
|-------|---------------|
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |
| ____ | ____ |

### 9. Projects (optional — not in reference, but recommended)

| Project name | Short description | Tech stack | Live URL | GitHub URL | Image file |
|------|------|------|------|------|------|
| ____ | ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ | ____ |

### 10. Blog

| Field | Your value |
|-------|-----------|
| Section tagline | ____ |
| Blog source (Medium / Hashnode / Dev.to / own Markdown posts) | ____ |

| Post title | Date | Summary (1–2 lines) | URL | Cover image |
|------|------|------|------|------|
| ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ |
| ____ | ____ | ____ | ____ | ____ |

### 11. Contact & social links

| Field | Your value |
|-------|-----------|
| Contact section quote | ____ |
| Address / City to display | ____ |
| Contact phone (optional) | ____ |
| Contact email | ____ |
| Website | ____ |
| LinkedIn URL | ____ |
| GitHub URL | ____ |
| Twitter / X URL (optional) | ____ |
| Instagram URL (optional) | ____ |
| LeetCode / HackerRank URL (optional) | ____ |
| Contact form service (Formspree / EmailJS / none) | ____ |
| Email where form messages should arrive | ____ |

### 12. Hire Me banner & footer

| Field | Your value |
|-------|-----------|
| Banner text (e.g. "I'm currently open to work as a Full stack developer") | ____ |
| Sub text (e.g. "Exploring opportunities and side projects.") | ____ |
| Show banner? (Yes / No) | ____ |
| Footer copyright text | ____ |

### 13. SEO & metadata

| Field | Your value |
|-------|-----------|
| Browser tab title | ____ |
| Meta description (150–160 chars) | ____ |
| Keywords | ____ |
| Open Graph / share image file | ____ |
| Favicon file | ____ |
| Analytics (Google Analytics ID / Plausible / none) | ____ |

### 14. Assets checklist

- [ ] Profile photo (square, at least 600×600 px)
- [ ] Resume PDF
- [ ] Favicon (32×32 and 180×180)
- [ ] Open Graph image (1200×630 px)
- [ ] Company logos (optional)
- [ ] Blog cover images (optional)
- [ ] Project screenshots (optional)

---

## Next step

Once Part B is filled in, share this file and ask to "build the portfolio from `PORTFOLIO_PLAN.md`". Everything needed to code the site is in here.
