# Toujar Kundenayak — Portfolio

A modern, fully static personal portfolio website for a **Java Full Stack / Software Engineer**.
Built with React, Vite, Tailwind CSS, and Framer Motion. No backend required.

---

## Tech Stack

| Layer        | Technology |
|--------------|------------|
| Framework    | React 19 + TypeScript |
| Build Tool   | Vite 8 |
| Styling      | Tailwind CSS v4 |
| Animations   | Framer Motion |
| Contact Form | EmailJS (`@emailjs/browser`) |
| Icons        | Lucide React + custom SVG components |
| Routing      | React Router DOM v7 |
| SEO          | react-helmet-async |

---

## Features

- **Hero** — animated intro, tech stack visual, CTA buttons
- **About** — bio, career goals, stat cards
- **Skills** — filterable cards grouped by category with proficiency labels
- **Projects** — featured showcase + All Projects page with search & filter
- **Project Detail** — full-screen screenshot gallery, architecture diagram, challenges & learnings
- **Experience** — animated vertical timeline
- **Education** — card layout with coursework and achievements
- **GitHub** — live repo cards linking to your GitHub profile
- **Resume** — view/download CTA
- **Contact** — EmailJS-powered form (no backend, sends directly to your inbox)
- **Dark / Light mode** — persisted via `localStorage`
- **Responsive** — mobile-first, animated hamburger menu
- **SEO** — page titles, meta descriptions, semantic HTML

---

## Project Structure

```
portfolio-frontend/
└── src/
    ├── components/
    │   ├── layout/       Navbar, Footer
    │   ├── sections/     Hero, About, Skills, Projects, Experience,
    │   │                 Education, GitHubSection, Resume, Contact
    │   └── ui/           ImageGallery, GithubIcon, LinkedinIcon
    ├── pages/            Home, AllProjects, ProjectDetail, NotFound
    ├── data/             projects.ts, skills.ts, experience.ts,
    │                     education.ts, profile.ts
    ├── context/          ThemeContext.tsx
    └── hooks/            useScrollReveal.ts
```

---

## Quick Start

**Requirements:** Node.js 20+

```bash
cd portfolio-frontend
npm install
npm run dev
# → http://localhost:5173
```

---

## EmailJS Setup (contact form)

The contact form sends directly from the browser to your inbox using [EmailJS](https://www.emailjs.com) — no server needed.

**5-minute setup:**

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. **Add an Email Service** — connect Gmail or any provider → copy **Service ID**
3. **Create an Email Template** — use these variable names in the template body:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}

   {{message}}
   ```
   Copy the **Template ID**
4. **Get your Public Key** — Account → API Keys
5. Fill in `portfolio-frontend/.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
   ```
6. Restart the dev server

---

## Personalisation Checklist

Update these files before deploying:

| File | What to update |
|------|----------------|
| `src/data/profile.ts` | Your name, title, bio, GitHub URL, LinkedIn URL, email |
| `src/data/projects.ts` | Your real projects (replace GitHub URLs) |
| `src/data/skills.ts` | Adjust skill levels or add/remove skills |
| `src/data/experience.ts` | Your actual work / internship experience |
| `src/data/education.ts` | Your degree, institution, CGPA |
| `public/images/profile.jpg` | Your profile photo |
| `public/resume/Toujar_Kundenayak_Resume.pdf` | Your resume PDF |
| `.env` | EmailJS credentials |

---

## Build for Production

```bash
cd portfolio-frontend
npm run build
# Output in dist/ — deploy to Netlify, Vercel, GitHub Pages, etc.
```

### Deploy to Netlify (easiest)

1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Set **Base directory** → `portfolio-frontend`
4. Set **Build command** → `npm run build`
5. Set **Publish directory** → `portfolio-frontend/dist`
6. Add environment variables (`VITE_EMAILJS_*`) in Site Settings → Environment

### Deploy to Vercel

```bash
npm i -g vercel
cd portfolio-frontend
vercel --prod
```

Add the `VITE_EMAILJS_*` environment variables in the Vercel dashboard.

---

## License

MIT — adapt freely for your own portfolio.
