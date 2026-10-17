# Personal Portfolio

Single-page portfolio built with React, TypeScript and Vite. Output is a static site (`dist/`) that can be hosted anywhere.

## Update your details

All personal content lives in **`src/config/profile.ts`**. Edit the values there; no component code needs to change.

| What | Where |
|------|-------|
| Name, roles, bio, experience, skills, links, etc. | `src/config/profile.ts` |
| Page title, description, share image, accent color | `site` block in `src/config/profile.ts` |
| Show / hide / reorder sections | `site.sections` array |
| Profile photo | `public/images/` (then update `hero.photo`) |
| Resume | Add your PDF as `public/resume.pdf`, or set `hero.secondaryCta.href` and `about.resumeUrl` to the same path or external URL |
| Favicon | replace `public/favicon.svg` |

Notes:

- Sections with an empty list (e.g. `projects: []`) are hidden automatically, along with their nav link.
- For link previews on LinkedIn/WhatsApp, use a PNG or JPG (1200×630) for `site.ogImage`; most social sites ignore SVG.

## Commands

Requires Node 18+.

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm test          # run tests
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
```

## Deploy

- **Vercel / Netlify**: import the repo; build command `npm run build`, output directory `dist`.
- **GitHub Pages**: build and publish the `dist/` folder.
